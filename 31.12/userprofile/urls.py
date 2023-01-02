from django.urls import path, include
from .import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register("Profile", views.Profile)

urlpatterns =[
    # path("api/", views.home),
    path("", include(router.urls))
]

