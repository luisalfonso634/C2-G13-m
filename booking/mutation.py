import graphene
from .models import Booking
from accounts.models import Client
from .query import BookingType

client = Client

class CreateBooking(graphene.Mutation):
    """
    This is the main class where user object is created.
    This class must implement a mutate method.
    """
    class Arguments:
        id_client = graphene.Int()                
        Date = graphene.Date()                                             
        Time = graphene.Time()
        #Status = graphene.String()

    booking = graphene.Field(BookingType)

    @classmethod
    def mutate(cls, root, info, **app_data):
         # Create Appointment
         booking = Booking(
            Client = Client.objects.filter(pk=app_data.get('id_patient')).first(),
            Date = app_data.get('Date'),
            Time = app_data.get('Time'),
            Status = "Active"
         )
         booking.save()

         return CreateBooking(booking=booking)