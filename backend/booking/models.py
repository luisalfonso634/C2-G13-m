from django.db import models
from accounts.models import Client

# Create your models here.
class Booking(models.Model):
    # client definition
    Client = models.ForeignKey(Client, on_delete = models.CASCADE)
    # Reservation Fields
    Date = models.DateField()
    Time = models.TimeField()
    Status = models.CharField(max_length=10)