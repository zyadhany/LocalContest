from flask import redirect, render_template, session, request, abort, jsonify
from healper import login_post, register_post

def register():
    if request.method == "POST":
        status = register_post(request.form)
        if status is not None:
            return jsonify({'message': 'resgister failed'}), 400
        return jsonify({'message': 'resgister successful'}), 200
        

def login():
    session.clear()
    handle = login_post(request.form)
    # error massage if can't login
    if handle is None:
        return {'status':"couldn't login"}, 400
    session["handle"] = handle
    return jsonify({'message': 'Login successful'}), 200

