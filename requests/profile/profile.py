from flask import Blueprint, redirect
from healper import login_required

profile_bp = Blueprint('profile_bp', __name__)

@profile_bp.route("/")
@login_required
def index():
    username = "Zyad Hany"
    return redirect(username)

@profile_bp.route("/<username>")
def profile(username):
    return ("Hello " + username)

