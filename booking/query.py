import graphene
from graphene_django import DjangoObjectType
from .models import Booking, Room

class BookingType(DjangoObjectType):
   class Meta:
      model = Booking
      fields = "__all__"
      
class RoomType(DjangoObjectType):
   class Meta:
      model = Room
      fields = "__all__"