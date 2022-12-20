from django.db import models

# Create your models here.
class Player(models.Model):
    
    first_name=models.CharField('First name', max_length=255)
    last_name=models.CharField('Last name', max_length=255)
    coins=models.IntegerField('Coins')
    
    class Meta:
        verbose_name='Player'
        verbose_name_plural='Players'
    
    # def __str__(self):
    #     return self.first_name, self.last_name
    
class Game(models.Model):
    
    game=models.CharField('Uploaded Games', max_length=255)
    player=models.ForeignKey(Player, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name='Game'
        verbose_name_plural='Games'
    
    # def __str__(self):
    #     return Player.first_name, Player.last_name, self.game