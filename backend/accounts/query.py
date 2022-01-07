import graphene
from django.contrib.auth import get_user_model
from .models import SysAdmin, Client
from graphene_django import DjangoObjectType

User = get_user_model()

class SysAdminType(DjangoObjectType):
   class Meta:
      model = SysAdmin
      fields = "__all__"

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class ClientType(DjangoObjectType):
    class Meta:
        model = Client
        fields = '__all__'