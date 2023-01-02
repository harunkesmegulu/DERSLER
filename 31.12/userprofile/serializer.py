from .models import Profile
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        path = serializers.StringRelatedField()
        path_id = serializers.IntegerField()