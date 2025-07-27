from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


User = get_user_model()

#register
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def create(self, validated_data):
        pwd = validated_data.pop('password')
        user = User(**validated_data)
        validate_password(pwd, user=user)
        user.set_password(pwd)
        user.save()
        return user
    
#login
class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'
    
