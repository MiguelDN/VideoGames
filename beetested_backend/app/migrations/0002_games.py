# Generated by Django 4.1.4 on 2022-12-14 12:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Games",
            fields=[
                (
                    "id",
                    models.IntegerField(
                        primary_key=True, serialize=False, verbose_name="Pk"
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
        ),
    ]
