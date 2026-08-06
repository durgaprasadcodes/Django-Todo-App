from django.contrib import admin
from .models import Task

@admin.register(Task)
class Access_Users(admin.ModelAdmin):
    list_display = ('title','description','created_at')
    search_fields = ['title']
    