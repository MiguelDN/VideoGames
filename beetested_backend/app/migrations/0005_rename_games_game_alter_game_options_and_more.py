# Generated by Django 4.1.4 on 2022-12-15 09:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0004_rename_playersdsds_games_player"),
    ]

    operations = [
        migrations.RenameModel(old_name="Games", new_name="Game",),
        migrations.AlterModelOptions(
            name="game",
            options={"verbose_name": "Game", "verbose_name_plural": "Games"},
        ),
        migrations.AlterModelOptions(
            name="player",
            options={"verbose_name": "Player", "verbose_name_plural": "Players"},
        ),
    ]
