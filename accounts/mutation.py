import graphene
from graphql_auth import mutations
from django.contrib.auth import get_user_model
from .models import Client, SysAdmin
from .query import ClientType, UserType, SysAdminType
from graphene_django import DjangoObjectType

User = get_user_model()

class RegisterClient(graphene.Mutation):
    """
    This is the main class where user object is created.
    This class must implement a mutate method.
    """
    class Arguments:
      name = graphene.String()
      email = graphene.String()
      phone = graphene.String()
      password1 = graphene.String()
      password2 = graphene.String()

    user = graphene.Field(UserType)
    client = graphene.Field(ClientType)

    @classmethod
    def mutate(cls, root, info, **user_data):
         # Create User
         user = User(
            username= "usr" + str(User.objects.all().count()), #user_data.get('username'),
            first_name=user_data.get('name'),
            last_name=user_data.get('surname'),
            email=user_data.get('email'),
            is_client=True
         )
         user.set_password(user_data.get('password1'))  # This will hash the password
         user.save()
        # Create client
         client = Client(
            user=user,
            phone=user_data.get('phone'),
         )
         client.save()
         return RegisterClient(client=client, user=user)


class RegisterSysAdmin(graphene.Mutation):
    """
    This is the main class where user object is created.
    This class must implement a mutate method.
    """
    class Arguments:
      name = graphene.String()
      surname = graphene.String()
      email = graphene.String()      
      password1 = graphene.String()
      password2 = graphene.String()

    user = graphene.Field(UserType)
    sysadmin = graphene.Field(SysAdminType)

    @classmethod
    def mutate(cls, root, info, **user_data):
         # Create User
         user = User(
            username= "usr" + str(User.objects.all().count()), #user_data.get('username'),
            first_name=user_data.get('name'),
            last_name=user_data.get('surname'),
            email=user_data.get('email'),
            is_sysadmin=True
         )
         user.set_password(user_data.get('password1'))  # This will hash the password
         user.save()
        # Create sysadmin
         sysadmin = SysAdmin(
            user=user,
         )
         sysadmin.save()
         return RegisterSysAdmin(sysadmin=sysadmin, user=user)