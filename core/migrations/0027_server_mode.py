# Generated by Django 2.0 on 2018-02-17 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0026_server_game'),
    ]

    operations = [
        migrations.AddField(
            model_name='server',
            name='mode',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
