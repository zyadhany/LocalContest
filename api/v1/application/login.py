from flask import redirect, render_template, session, request
from healper import login_post, register_post

def register():
    if request.method == "POST":
        status = register_post(request.form)
        if status is not None:
            return render_template("register.html", message=status)
        return redirect("/")
        
    return render_template("register.html") 


def login():
    session.clear()
    handle = login_post(request.form)
    # error massage if can't login
    if handle is None:
        return {'status':"couldn't login"}, 400
    session["handle"] = handle
    return redirect("/")

