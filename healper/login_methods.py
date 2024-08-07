import imghdr

from flask import redirect, render_template, session, request
import requests
from models import storage, account, User
from functools import wraps

def register_post(post):
    data = request.get_json()

    email = data.get('email')
    handle = data.get('username')
    password = data.get('password')

    if not email or not password or not handle:
        return "Empty Field"
        
    acc = storage.getDict(account, {'email':email})
    if acc:
        return 'email is exist'
    
    user = storage.getDict(User, {'handle':handle})
    if user:
        return 'handle is exist'
    
    acc = account(email=email, password=password)
    acc.save()
    user = User(handle=handle, account_id=acc.id)
    user.save()
    
    return None
    

def login_post(post):
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')
    if not 'email' or not 'password':
        return None
    
    print(email, password)
    acc = storage.getDict(account, {'email':email, 'password':password})

    if not acc or acc[0].user is None:
        return None
    acc = acc[0]
    return acc.user.handle

def login_required():
    handle = session.get("handle")
    if handle is None:
        return redirect('/login')
    return
