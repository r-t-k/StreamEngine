"""streamengine URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView

from .views import  index, channel, SignUpView, profile


def fake_view(*args, **kwargs):
    """ This view should never be called because the URL paths
        that map here will be served by nginx directly.
    """
    raise Exception("This should never be called!")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("/", index, name="index"),
    path("", index, name="index"),
    path('auth_landing', TemplateView.as_view(template_name='auth_landing.html'), name='auth'),
    path("home", index, name="index"),
    path("channel", channel, name="channel"),
    path("profile", profile, name="profile"),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('/', include('django.contrib.auth.urls'))
]
