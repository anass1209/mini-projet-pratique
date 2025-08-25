from django.urls import path
from .views import CandidateListCreateView, ServeCVView

urlpatterns = [
    path('candidates/', CandidateListCreateView.as_view(), name='candidate-list-create'),
    # ✅ Nouvelle route pour servir les CVs
    path('candidates/<int:candidate_id>/cv/', ServeCVView.as_view(), name='serve-cv'),
]