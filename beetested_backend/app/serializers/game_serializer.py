from rest_framework import serializers
from app.models import Game



class GameSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Game
        fields='__all__'
        
    def to_representation(self, instance):
        return {
            'id':instance.id,
            'game': instance.game,
            'player':instance.player.id,
            'playerName':instance.player.first_name
            }