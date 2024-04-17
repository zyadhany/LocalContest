from flask import Blueprint
from healper import login_required

contest_bp = Blueprint('contest_bp', __name__)

@contest_bp.route("/")
@login_required
def index():
    return "contest Page"
