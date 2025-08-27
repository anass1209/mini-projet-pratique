from rest_framework import serializers
from .models import Candidate

class CandidateSerializer(serializers.ModelSerializer):
    """
    Serializer for the Candidate model.
    It converts Candidate model instances to JSON and vice-versa.
    """
    class Meta:
        model = Candidate
        # Fields to include in the serialized output
        fields = ['id', 'name', 'email', 'skills', 'cv']