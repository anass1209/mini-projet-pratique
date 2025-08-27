
from django.contrib import admin
from .models import Candidate

@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    """
    Configuration for the Candidate model in the Django admin interface.
    """
    # Fields to display in the list view of candidates
    list_display = ('name', 'email', 'skills')
    
    # Fields to use for searching candidates
    search_fields = ('name', 'email', 'skills')