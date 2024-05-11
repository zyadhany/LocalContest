from flask import Blueprint, render_template
from healper import user_profile
from models import storage, Contest

contests_bp = Blueprint('contests_bp', __name__)

@contests_bp.route("/")
def contests_route():
    user = user_profile()
    Contests = storage.all(Contest)
    Contest_list = []
    for contest in Contests.values():
        Contest_list.append(contest.to_dict())
    return render_template('contests.html', user=user, contests=Contest_list)

