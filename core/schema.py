import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
from django.contrib.auth import get_user_model
from graphene_django import DjangoListField
# accounts
from accounts.mutation import RegisterClient, RegisterSysAdmin
# booking
from booking.models import Room
from booking.mutation import CreateBooking
from booking.query import RoomType
User = get_user_model()

# Include all classes

class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    password_change = mutations.PasswordChange.Field()
    registerclient = RegisterClient.Field()
    registersysadmin = RegisterSysAdmin.Field()
    createbooking = CreateBooking.Field()


class Query(UserQuery, MeQuery, graphene.ObjectType):
    # Rooms filters
    allrooms = DjangoListField(RoomType)
    # Select a Room
    searchroom = graphene.List(RoomType, id_room=graphene.Int())
   # Resolve rooms
    def resolve_allrooms(self, info):
      return Room.objects.all()
    # Resolve search a room
    def resolve_searchroom(self, info, id_room):
      return Room.objects.filter(pk=id_room)

class Mutation(AuthMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
