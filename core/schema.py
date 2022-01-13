import graphene
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery
from django.contrib.auth import get_user_model
from graphene_django import DjangoListField
from accounts.mutation import RegisterClient, RegisterSysAdmin
from booking.mutation import CreateBooking

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
    pass

class Mutation(AuthMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)