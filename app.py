from flask import Flask, flash, redirect, render_template, request, session, send_file
from flask_session import Session
from requests import root_bp

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

app.register_blueprint(root_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
