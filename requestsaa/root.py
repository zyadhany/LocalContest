from flask import redirect, render_template, session
from healper import login_required
from .home import home_bp
from .profile import profile_bp
from .groups import groups_bp
from .login import login, register
from flask import Blueprint


root_bp = Blueprint('root_bp', __name__)

root_bp.register_blueprint(home_bp, url_prefix='/home')
root_bp.register_blueprint(profile_bp, url_prefix='/profile')
root_bp.register_blueprint(groups_bp, url_prefix='/groups')
  
@root_bp.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@root_bp.route("/")
def index():
    return redirect("home/")

@root_bp.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@root_bp.route("register", methods=["GET", "POST"])
def register_route():
    return register()

@root_bp.route("login", methods=["GET", "POST"])
def login_route():
    return login()
