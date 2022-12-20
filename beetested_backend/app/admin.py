from django.contrib import admin
from app.models import Player, Game

# Register your models here.
class PlayerAdmin(admin.ModelAdmin):
    list = ('id', 'first_name', 'last_name','coins')

    admin.site.register(Player)
    
class GameAdmin(admin.ModelAdmin):
    list = ('id', 'game', 'player')

    admin.site.register(Game)
