from rest_framework import serializers

from app.models import Player


class PlayerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Player
        fields='__all__'
        
    def to_representation(self, instance):
        return {
            'id':instance.id,
            'first_name': instance.first_name,
            'last_name':instance.last_name,
            'coins':instance.coins,
            }