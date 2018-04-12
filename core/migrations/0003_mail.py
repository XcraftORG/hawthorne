# Generated by Django 2.0.3 on 2018-04-03 13:05

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20180402_1337'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mail',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('url', models.URLField()),
                ('target', models.CharField(max_length=255, null=True)),
                ('instance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Instance')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
