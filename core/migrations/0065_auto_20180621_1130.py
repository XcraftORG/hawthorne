# Generated by Django 2.0.6 on 2018-06-21 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0064_auto_20180621_0950'),
    ]

    operations = [
        migrations.AlterField(
            model_name='server',
            name='game',
            field=models.CharField(choices=[('csgo', 'Counter-Strike: Global Offensive'), ('tf2', 'Team Fortress 2')], max_length=255),
        ),
    ]
