from flask import Blueprint
from .contest import contest_bp
from healper import login_required

groups_bp = Blueprint('groups_bp', __name__)
groups_bp.register_blueprint(contest_bp, url_prefix='/contest')

@groups_bp.route("/")
def index():
    return "groups"
