from django.urls import path
from .views import CandidateListCreateView, ServeCVView

urlpatterns = [
    path('candidates/', CandidateListCreateView.as_view(), name='candidate-list-create'),
    path('candidates/<int:candidate_id>/cv/', ServeCVView.as_view(), name='serve-cv'),
]