from django.db import models
from accounts.models import Client

# Create your models here.

class Booking(models.Model):
    # client definition
    Client = models.ForeignKey(Client, on_delete=models.CASCADE)
    # Reservation Fields
    Date = models.DateField()
    Time = models.TimeField()
    Status = models.CharField(max_length=10)

class Room(models.Model):
    image = models.CharField(max_length=80)
    title = models.CharField(max_length=80)
    text = models.CharField(max_length=120)
    _in = models.CharField(max_length=30)
    _out = models.CharField(max_length=30)
    price = models.CharField(max_length=50)

    @classmethod
    def create(cls, **kwargs):
        room = cls.objects.create(
            image = kwargs['image'],
            title = kwargs['title'],
            text = kwargs['text'],
            _in = kwargs['in'],
            _out = kwargs['out'],
            price = kwargs['price']
        )

        return room