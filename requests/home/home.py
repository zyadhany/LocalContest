from flask import Blueprint, redirect

home_bp = Blueprint('home_bp', __name__)

@home_bp.route("/", strict_slashes=False)
def index():
    return "Home Page"

