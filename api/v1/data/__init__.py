#!/usr/bin/python3
"""This api module """
from flask import Blueprint

app_data = Blueprint('app_data', __name__, url_prefix='/api/data')

if app_data is not None:
    from .main import *

