from rest_framework import generics
from django.http import FileResponse, Http404
from django.views import View
from .models import Candidate
from .serializers import CandidateSerializer
import os

class CandidateListCreateView(generics.ListCreateAPIView):
    """
    API view to list all candidates or create a new one.
    """
    serializer_class = CandidateSerializer

    def get_queryset(self):
        queryset = Candidate.objects.all()
        skill = self.request.query_params.get('skill', None)
        if skill is not None:
            queryset = queryset.filter(skills__icontains=skill)
        return queryset

class ServeCVView(View):
    def get(self, request, candidate_id):
        try:
            candidate = Candidate.objects.get(id=candidate_id)
            if candidate.cv and os.path.exists(candidate.cv.path):
                return FileResponse(
                    open(candidate.cv.path, 'rb'),
                    content_type='application/pdf',
                    as_attachment=False 
                )
            else:
                raise Http404("CV not found")
        except Candidate.DoesNotExist:
            raise Http404("Candidate not found")