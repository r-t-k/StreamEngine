from django.http import HttpResponse, HttpResponseForbidden
from django.shortcuts import redirect, get_object_or_404
from django.utils import timezone
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView

from .forms import CustomUserCreationForm
from .models import Channel, CustomUser

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'


def index(request):
    return render(request, 'index.html')

def channel(request):
    return render(request, 'channel.html')

def profile(request):
    user = CustomUser.objects.get(username='tom')
    channel = Channel.objects.get(creator=user)
    
    context = {
        'streamkey': channel.streamkey,
    }
    
    return render(request, 'profile.html', context)