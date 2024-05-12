from flask import Blueprint, render_template, abort, session, redirect, url_for, request
from healper import user_profile, Time_left, seconds_to_hms
from models import storage, Contest
import data

contests_bp = Blueprint('contests_bp', __name__)

@contests_bp.route("/", methods=['POST'])
def contest_post():
    cont = Contest(contest_name='contest', group_id=1)
    cont.save()
    cont.contest_name = f"Contest {cont.id}"
    cont.save()
    return redirect(f"/contests/{cont.id}")


@contests_bp.route("/")
def contests_route():
    user = user_profile()
    Contests = storage.all(Contest)
    Contest_list = []
    for contest in Contests.values():
        Contest_list.append(contest.to_dict())

    Manger = False
    if session["handle"] in data.MANAGERS:
        Manger = True
    
    return render_template('contests.html', user=user, contests=Contest_list, Manger=Manger)



@contests_bp.route("/<id>", methods=['POST'])
def contest_id_post(id):
    print('asdfasdfsadfa')
    return redirect(request.url)
    return "POSTign"
    return redirect("/")

@contests_bp.route("/<id>", methods=['DELETE'])
def contest_id_delete(id):
    if session['handle'] not in data.MANAGERS:
        abort(501)
    prob = storage.get('problems', id)
    if not prob:
        abort(404)
    prob.delete()
    return redirect(request.url), 200


@contests_bp.route("/<id>")
def contest_id(id):
    contest = storage.get('contests', id)
    if contest is None:
        abort(404)
    
    st = contest.start_time

    timeleft = -1    
    if st:
        timeleft = Time_left(st)
    
    if timeleft > 0:
        return render_template('timer.html', timeleft=timeleft, timeview=seconds_to_hms(timeleft))
    
    Manger = False
    if session["handle"] in data.MANAGERS:
        Manger = True

    user = user_profile()
    problems = storage.getDict('problems', {'contest_id':id})
    problem_list = []
    for problem in problems:
        problem_list.append(problem.to_dict())
    
    cont = storage.get('contests', id).to_dict()
    return render_template('contestpage.html', user=user, problems=problem_list, Manger=Manger, contest=cont)
