import imghdr

from flask import redirect, render_template, session, request
from functools import wraps

def login_post(post):
    pass

def login_required():
    handle = session.get("handle")
    if handle is None:
        return redirect('/login')
    return
