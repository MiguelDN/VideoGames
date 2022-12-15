from rest_framework import serializers

from app.models import Player


class PlayerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Player
        exclude=()
        
    def to_representation(self, instance):
        return {
            'id':instance.id,
            'name': instance.first_name,
            'last name':instance.last_name,
            'coins':instance.coins,
            }