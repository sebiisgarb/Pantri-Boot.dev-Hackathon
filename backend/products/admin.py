from django.contrib import admin
from .models import Product          # sau Products dacă ai păstrat numele inițial

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display  = ("code", "product_name", "brands", "quantity")
    search_fields = ("code", "product_name", "brands")
    list_filter   = ("categories",)
    ordering      = ("code",)

    # toate câmpurile doar în read‑only (tabela e managed=False)
    readonly_fields = [f.name for f in Product._meta.fields]

    # opțional: blocăm adăugarea / ștergerea din admin
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
