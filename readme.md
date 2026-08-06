<div align="center">

# 📝 Django Todo App

**A clean, minimal task-management web app built with Django and Bootstrap 5.**

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.2.6-092E20?style=flat&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?style=flat&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

</div>

---

## Overview

Django Todo App is a straightforward CRUD application for managing daily tasks. It lets you create, edit, complete, and delete tasks through a responsive Bootstrap interface, backed by a Django ORM model and SQLite database. The project is intentionally lightweight — a solid reference implementation of the classic "todo list" pattern in Django.

## ✨ Features

- ✅ **Create tasks** with a title and optional description
- ✏️ **Edit tasks** — update title, description, and completion status
- 🔁 **Toggle completion** with a single click, right from the list view
- 🗑️ **Delete tasks** with a confirmation step to prevent accidental removal
- 📋 **List view** showing all tasks, newest first, with status and creation date
- 🛠️ **Django Admin** integration for managing tasks with search and filters
- 🎨 **Responsive UI** styled with Bootstrap 5.3.8, no custom build step required

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Django 5.2.6 |
| Database | SQLite |
| Frontend | Django Templates + Bootstrap 5.3.8 (CDN) |
| Language | Python 3.10+ |

## 📂 Project Structure

```
ToDoList/
├── manage.py
├── db.sqlite3
├── ToDoList/                  # Project configuration
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
└── todo/                      # Core application
    ├── __init__.py
    ├── admin.py                # Task admin config
    ├── apps.py
    ├── models.py                # Task model
    ├── urls.py                  # App-level routes
    ├── views.py                  # CRUD view logic
    ├── tests.py
    └── templates/
        ├── base.html              # Shared layout + navbar
        ├── todo_list.html          # Task list / dashboard
        ├── task_form.html          # Create / edit form
        └── task_confirm_delete.html
```

## 🗃️ Data Model

The app is built around a single `Task` model:

| Field | Type | Notes |
|---|---|---|
| `title` | `CharField(max_length=200)` | Required |
| `description` | `TextField` | Optional |
| `completed` | `BooleanField` | Defaults to `False` |
| `created_at` | `DateTimeField` | Auto-set on creation |

## 🚀 Getting Started

### Prerequisites
- Python 3.10 or later
- pip

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ToDoList

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install django

# 4. Apply migrations
python manage.py migrate

# 5. (Optional) Create an admin user
python manage.py createsuperuser

# 6. Run the development server
python manage.py runserver
```

Then open **http://127.0.0.1:8000/** in your browser.

## 🧭 Routes

| URL | Name | Description |
|---|---|---|
| `/` | `todo:task_list` | View all tasks |
| `/add/` | `todo:task_create` | Create a new task |
| `/edit/<id>/` | `todo:task_edit` | Edit an existing task |
| `/delete/<id>/` | `todo:task_delete` | Delete a task (with confirmation) |
| `/toggle/<id>/` | `todo:task_toggle` | Toggle a task's completed status |
| `/admin/` | — | Django admin panel |

## 🧪 Running Tests

```bash
python manage.py test
```

The test suite covers the task list rendering and the presence of expected form fields on the create page.

## 🔐 Notes for Production

This project ships with development-friendly defaults that should be changed before deploying:

- Set `DEBUG = False` and configure `ALLOWED_HOSTS`
- Move `SECRET_KEY` to an environment variable
- Swap SQLite for a production-grade database (PostgreSQL, MySQL, etc.)
- Serve static files via a proper static file host (e.g. WhiteNoise, S3, or a CDN)

## 🗺️ Roadmap Ideas

- [ ] User authentication (per-user task lists)
- [ ] Due dates and priority levels
- [ ] Search and filtering on the list view
- [ ] REST API via Django REST Framework
- [ ] Dark mode toggle

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
Built with Django 🐍 and Bootstrap 🎨
</div>
