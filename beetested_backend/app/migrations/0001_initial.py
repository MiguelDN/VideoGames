# Generated by Django 4.1.4 on 2022-12-23 09:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Player",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "first_name",
                    models.CharField(max_length=255, verbose_name="First name"),
                ),
                (
                    "last_name",
                    models.CharField(max_length=255, verbose_name="Last name"),
                ),
                ("coins", models.IntegerField(verbose_name="Coins")),
            ],
            options={"verbose_name": "Player", "verbose_name_plural": "Players",},
        ),
        migrations.CreateModel(
            name="Game",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "game",
                    models.CharField(max_length=255, verbose_name="Uploaded Games"),
                ),
                (
                    "player",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="app.player"
                    ),
                ),
            ],
            options={"verbose_name": "Game", "verbose_name_plural": "Games",},
        ),
    ]
