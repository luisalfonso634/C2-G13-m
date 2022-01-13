from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class ExtendUser(AbstractUser):
    is_client = models.BooleanField('client status', default=False)
    is_sysadmin = models.BooleanField('sysadmin status', default=False)

class Client(models.Model):
    # Client definition
    user = models.OneToOneField(ExtendUser, on_delete=models.CASCADE, primary_key=True)
    # Client Fields

class SysAdmin(models.Model):
    user = models.OneToOneField(ExtendUser, on_delete=models.CASCADE, primary_key=True)
