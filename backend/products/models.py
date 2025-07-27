# products/models.py
from django.db import models

class Product(models.Model):                       # ← singular, mai elegant
    code         = models.CharField(
        primary_key=True, max_length=14            # EAN/GTIN 8‑14 caractere
    )
    product_name = models.TextField(blank=True)
    brands       = models.TextField(blank=True)
    categories   = models.TextField(blank=True)
    countries    = models.TextField(blank=True)
    quantity     = models.TextField(blank=True)
    energy_kcal  = models.FloatField(null=True, blank=True)
    fat          = models.FloatField(null=True, blank=True)
    sugars       = models.FloatField(null=True, blank=True)
    proteins     = models.FloatField(null=True, blank=True)

    class Meta:
        managed  = False           # tabela e deja în Postgres – nu o atinge
        db_table = "products"
        verbose_name = "product"
        verbose_name_plural = "products"

    def __str__(self):
        return f"{self.product_name or 'Unnamed'} ({self.code})"
