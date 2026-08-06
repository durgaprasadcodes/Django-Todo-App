from django.shortcuts import render,redirect,get_object_or_404
from .models import Task

def todo_list(request):
    tasks = Task.objects.all()
    return render(request,'todo.html',{'tasks':tasks})

def add_task(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        if title:
            Task.objects.create(title=title,description=description)
            return redirect('todo_list')
    return render(request,'add_task.html')

def edit_task(request,id):
    task = get_object_or_404(Task,id=id)
    if request.method == 'POST':
        title = request.POST.get('title').strip()
        description = request.POST.get('description').strip()
        task.title = title
        task.description = description
        task.save()
        return redirect('todo_list')
    return render(request,'add_task.html',{'task':task})

def delete_task(request,id):
    task = get_object_or_404(Task,id=id)
    if task:
        task.delete()
        return redirect('todo_list')
    return redirect('todo_list',{'error':"Task Not Found"})

def task_toggle(request,id):
    task = get_object_or_404(Task,id=id)
    task.completed = not task.completed
    task.save()
    return redirect('todo_list')