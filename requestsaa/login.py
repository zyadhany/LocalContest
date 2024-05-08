from flask import redirect, render_template, session, request
from healper import login_post

def register():
    return ("register")
    if request.method == "POST":
        name = request.form.get("username")
        password = request.form.get("password")
        passconf = request.form.get("confirm")
        if not name or not password or not passconf:
            return render_template("register.html",message="Empty field")
        Name = db.execute("SELECT * FROM users where username is (?)", name)
        if Name:
            return render_template("register.html",message="invalid name")
        if password != passconf:
            return render_template("register.html",message="password doesn't match")
        
        db.execute("INSERT INTO users (username, password_hash) VALUES(?, ?)", name, generate_password_hash(password))
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))
        id = rows[0]["id"]
        session["user_id"] = id
        image = Image.open('./static/images/icons/user.png')
        image.save(f'./static/images/user_image/{id}.png')
        return redirect("/")
    
    return render_template("register.html") 


def login():
    session.clear()
    if request.method == "POST":
        handle = login_post(request.form)
        # error massage if can't login
        if handle is None:
            return render_template("login.html",message="invalid username and/or password ")
        session["handle"] = handle
        return redirect("/")

    return render_template("login.html") 
