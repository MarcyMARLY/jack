from django.db import models


# Create your models here.
class Card(models.Model):
    title = models.CharField(max_length=90)
    image_url = models.URLField()

