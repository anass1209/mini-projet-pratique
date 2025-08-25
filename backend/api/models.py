from django.db import models

class Candidate(models.Model):
    """
    Represents a job candidate.
    """
    # Candidate's full name
    name = models.CharField(max_length=255)

    # Candidate's email, must be unique
    email = models.EmailField(unique=True)

    # A text field to store skills, e.g., "Python,Django,React"
    skills = models.TextField()

    # The uploaded CV file. Files will be stored in the 'media/cvs/' directory.
    cv = models.FileField(upload_to='cvs/')

    def __str__(self):
        """
        String representation of the Candidate object.
        """
        return self.name