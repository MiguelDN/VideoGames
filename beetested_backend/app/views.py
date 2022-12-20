from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,status
from rest_framework.response import Response
from app.serializers.player_serializer import PlayerSerializer
from app.models import Player

# Create your views here.
def saludo(request):
    
    return HttpResponse('Hola')

class PlayerViewSet(viewsets.ModelViewSet):
    serializer_class=PlayerSerializer
    queryset = Player.objects.all()
    
    
    
    