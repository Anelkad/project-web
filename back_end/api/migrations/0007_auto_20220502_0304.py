# Generated by Django 2.2 on 2022-05-01 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220502_0253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='product',
            field=models.TextField(),
        ),
    ]
