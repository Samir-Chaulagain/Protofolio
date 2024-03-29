# Generated by Django 4.1.13 on 2024-03-17 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=15)),
                ('url', models.URLField()),
                ('github_link', models.URLField()),
                ('linkedin_link', models.URLField()),
                ('twitter_link', models.URLField()),
                ('image', models.ImageField(upload_to='project_images/')),
            ],
        ),
    ]
