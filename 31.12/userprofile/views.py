# from django.http import HttpResponse
from django.shortcuts import render
from .models import Profile
from rest_framework import ModelViewSet
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter,OrderingFilter
from .models import Profile
from .serializer import ProfileSerializer

# Create your views here.
# def home(request):
#     return HttpResponse("WELCOME")
    

class Profile(ModelViewSet):   
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends=[DjangoFilterBackend,SearchFilter,OrderingFilter]
    filterset_fields=['id','first_name','last_name']
    search_fields=['first_name','last_name']