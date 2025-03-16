from django.urls import path
from . import views

urlpatterns = [
    path('add',views.add_post , name='add_post'),
    path('list', views.list_post, name='list_post'),
    path('courselist', views.list_course, name = 'list_course'),
    path('addcourse', views.add_course, name='add_course')
]