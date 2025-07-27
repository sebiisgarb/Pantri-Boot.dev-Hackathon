from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class UserAdmin(BaseUserAdmin):
    list_display        = ("email", "username", "is_staff", "is_active")
    list_filter         = ("is_staff", "is_superuser", "is_active")
    search_fields       = ("email", "username")
    ordering            = ("email",)

    # câmpurile din formularul de editare
    fieldsets = (
        (None,              {"fields": ("email", "password")}),
        ("Personal info",   {"fields": ("username",)}),
        ("Permissions",     {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )

    # câmpurile din formularul de creare
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2"),
        }),
    )

    filter_horizontal = ("groups", "user_permissions")
