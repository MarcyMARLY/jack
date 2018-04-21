from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)


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
    created_at = models.DateField()
    deactivate_at = models.DateField()
