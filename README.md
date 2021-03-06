# StreamEngine

## About
StreamEngine is a live streaming app that simply described will be like a white label twitch.tv that can be used either as a personal streaming site or for communities or businesses that want to have a more curated and exclusive streamer base.

This project is in the very early stages of development, and lots more info will be added in the coming days as more progress and planning is done.

**Early version of the desktop homepage, done with plain old html/css vanilla js and UIkit.**
[![Image from Gyazo](https://i.gyazo.com/0bd87cae5130c80427f74f3b70d7f321.png)](https://gyazo.com/0bd87cae5130c80427f74f3b70d7f321)


## Demo

If you want to test the live stream functionality, I have setup a page below for you to do so.


**Link:** https://streamengine.live/channels/demo

**Username:** demo

**Password:** demopassword

**OBS:**

Host:```rtmp://66.228.51.60/```

Stream Key: ```live```

Get OBS: https://obsproject.com/

How to use: https://obsproject.com/wiki/OBS-Studio-Quickstart

### Demo Progess

So the only thing that is mostly functional at the moment is the ABR streaming portion on the demo page.

Nav and links don't work yet, and of course the homepage and other pages aren't ready. 

## This Repo


This repo will be about deployment and usage of StreamEngine.

Since StreamEngine is broken up (or will be..) into parts, I've decided to split up the repos for each part.

Here I plan to include only the methods with which you can deploy the app, i.e. docker-compose, ansible, etc.

## The Parts

Obviously a twitch scale app is gonna involve alot of moving pieces, so I'm sure this list will grow with development.

- [ ] UI (web app) repo: https://github.com/r-t-k/StreamEngine-UI
- [ ] API (connects everything and handles the DB)
- [ ] StreamEngine Admin Panel (For the management of an app instance and its community)
- [ ] Stream Backend repos: https://github.com/r-t-k/StreamEngine-srs-origin | https://github.com/r-t-k/StreamEngine-srs-hls-transcode



## The Tech

The stack may change abit early on in development, but right now I have a solid idea of what I want the architecture to be

- UI: Django w/UIkit and vanilla js (plan to move to Vue in the future)
- API: Django Rest Framework
- StreamEngine Admin Panel: TBD
- Stream Backend: OSSRS (https://github.com/ossrs/srs/) for HLS transcode and streaming

## The Status

Right now I'm working on a proof of concept, so the plan to split the parts up might come later, for now the web app comprises the UI, Admin, and API as a Django monolith.
Here is the GitHub project page for tracking progress: https://github.com/users/r-t-k/projects/2

## The Open Source Part

The core, which is everything described above will be open source under MIT. The not open source part will be the SaaS portion of this project which will be a private project. Basically I intend to offer a managed version of this to businesses with added features around monetization and UI themeing, that's it. 



## The Discord
 
https://discord.gg/nUaBR56




