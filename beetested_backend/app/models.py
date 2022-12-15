from django.db import models

# Create your models here.
class Player(models.Model):
    
    id=models.IntegerField('Pk',primary_key=True)
    first_name=models.CharField('First name', max_length=255)
    last_name=models.CharField('First name', max_length=255)
    coins=models.IntegerField('Coins')
    
    class Meta:
        verbose_name='Player'
        verbose_name_plural='Players'
    
    def __str__(self) -> str:
        return (self.first_name, self.last_name)
    
class Game(models.Model):
    
    id=models.IntegerField('Pk',primary_key=True)
    game=models.CharField('Uploaded Games', max_length=255)
    player=models.ForeignKey(Player, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name='Game'
        verbose_name_plural='Games'
    
    def __str__(self) -> str:
        return (Player.first_name, Player.last_name, self.game)