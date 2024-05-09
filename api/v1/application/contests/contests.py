from flask import Blueprint, render_template
from healper import user_profile

contests_bp = Blueprint('contests_bp', __name__)

@contests_bp.route("/")
def contests_route():
    user = user_profile()
    return render_template('contests.html', user=user)

