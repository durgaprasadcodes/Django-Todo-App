from django.urls import path
from .views import todo_list,add_task,edit_task,delete_task,task_toggle

    
urlpatterns = [
    path('',todo_list,name='todo_list'),
    path('addtask/',add_task,name='add_task'),
    path('edittask/<int:id>/',edit_task,name='edit_task'),
    path('deletetask/<int:id>/',delete_task,name='delete_task'),
    path('toggle/<int:id>/',task_toggle,name='task_toggle')
]