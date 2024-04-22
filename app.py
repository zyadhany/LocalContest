#!/usr/bin/python
from flask import Flask, flash, redirect, render_template, request, session, send_file
from flask_session import Session
from requests import root_bp
from healper import login_required, ConstVar

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

cnt = [1]
@app.before_request
def before_request_func():
    if cnt[0] < 10:
        cnt[0] += 1
        return
    if request.endpoint not in ConstVar.LOGIN_URL_ENDPOINTS:
        print(request.endpoint)
        session['last_url_login'] = request.url
        res = login_required()
        print(res)
        if res is not None:
            return (res)
    return


app.register_blueprint(root_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
