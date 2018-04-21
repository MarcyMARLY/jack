from django.db import models


# Create your models here.

class Organization(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    address = models.TextField()


class Gather(models.Model):
    title = models.CharField(max_length=100)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)


class Card(models.Model):
    title = models.CharField(max_length=100)
    card_image = models.URLField()
    gather = models.ForeignKey(Gather, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    deactivate_at = models.DateTimeField()
