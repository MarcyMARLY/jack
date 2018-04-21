from rest_framework import serializers
from .models import Organization,Gather, Card,User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields="__all__"

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields="__all__"


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields="__all__"


class GatherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gather
        fields="__all__"
