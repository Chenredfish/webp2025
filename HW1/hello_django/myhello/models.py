from django.db import models

# Create your models here.

from django.db import models 

class Post(models.Model):
    titles = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    photo = models.URLField(blank=True)
    location = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)

class Course(models.Model):
    department = models.TextField(blank=True)
    course_title = models.CharField(max_length=100)
    instructor = models.TextField(blank=True)