from flask import redirect, render_template, session, request


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
        return
        name = request.form.get("username")
        password = request.form.get("password")
        if not name or not password:
            return render_template("login.html",message="Empty field")
        Name = db.execute("SELECT * FROM users where username = (?)",name)
        if not Name or not check_password_hash(Name[0]["password_hash"], password):
            return render_template("login.html",message="invalid username and/or password ")
        session["user_id"] = Name[0]["id"]
        return redirect("/")
    return render_template("login.html") 
