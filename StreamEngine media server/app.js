const NodeMediaServer = require('node-media-server');

const config = {
	logType: 3,
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: 9000,
		mediaroot: './media',
		allow_origin: '*'
	},
/*	https: {
		port: 9443,
		key:'./privatekey.pem',
		cert:'./certificate.pem',
	},*/
	trans: {
		ffmpeg: '/usr/local/bin/ffmpeg',
		tasks: [
			{
				app: 'live',
				vc: "copy",
				vcParam: [],
				ac: "aac",
				acParam: ['-ab', '64k', '-ac', '1', '-ar', '44100'],
				rtmp:true,
				rtmpApp:'live2',
				hls: true,
				hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
				dash: true,
				dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
				mp4: true,
				mp4Flags: '[movflags=faststart]',
			}
		]
	}
};

var nms = new NodeMediaServer(config);

nms.on('preConnect', (id, args) => {
	console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
	// Pre connect authorization
	// let session = nms.getSession(id);
	// session.reject();
});

nms.on('postConnect', (id, args) => {
	console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
	console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', (id, StreamPath, args) => {
	console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
	if(!StreamPath.includes('/live2/')){
		let authUrlBase = 'http://localhost:8000/stream_auth/';
		let separator = '/live/';
		const initPath = StreamPath;
		let authKey = initPath.split(separator).pop();
		const url = authUrlBase + authKey;
		console.log(url);
		const http = require("http");
		http.get(url, res => {
			res.setEncoding("utf8");
			let status = "";
			res.on("data", data => {
				let json = JSON.parse(data);
				console.log(json);
				status = json[0].authorized;
			});
			res.on("end", () => {
				if(status != 'true'){
					session.reject();
				}
				console.log(status);
			});
		});
	}

	// Pre publish authorization
	 let session = nms.getSession(id);
	//
});
nms.run();
