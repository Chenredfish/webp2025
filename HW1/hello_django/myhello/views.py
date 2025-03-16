#from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post
from .models import Course

logger = logging.getLogger('django')

#class HelloApiView(APIView):
    #def get(self,request):
    #    my_name = request.GET.get('name', None)
    #    logger.debug(" ************* myhello_api" + my_name)
    #    if my_name:
    #        retValue = {}
    #        retValue['data'] = "Hello" + my_name
    #        return Response(retValue, status=status.HTTP_200_OK)
    #    else:
    #        return Response(
    #            {"res":"parameter:name is None"},
    #            status=status.HTTP_400_BAD_REQUEST
    #        )

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.titles = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug(" *************** myhello_api:" + title)
    if title:
        return Response({"data":title + "insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()

    return JsonResponse(list(posts), safe=False)
    #return Response({"data":
                    #json.dumps(
                        #list(posts),
                        #sort_keys=True,
                        #indent=1,
                        #cls=DjangoJSONEncoder)},
                    #status=status.HTTP_200_OK)

@api_view(['GET'])
def add_course(request):
    department = request.GET.get('department', '')
    course_title = request.GET.get('course_title', '')
    instructor = request.GET.get('instructor', '')

    new_course = Course()
    new_course.department = department
    new_course.course_title = course_title
    new_course.instructor = instructor
    new_course.save()
    logger.debug(" ********** myhello_api:"+course_title)
    if department and course_title and instructor:
        return Response({"date":course_title + "insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"有缺少資料"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def list_course(request):
    courses = Course.objects.all().values()

    return JsonResponse(list(courses), safe=False)