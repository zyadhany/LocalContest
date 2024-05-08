#!/usr/bin/python3
"""app"""
from flask import Flask, make_response, jsonify
from models import storage
from os import getenv
from flask_cors import CORS
from .data import app_data


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "0.0.0.0"}})


app.url_map.strict_slashes = False
app.register_blueprint(app_data)


@app.teardown_appcontext
def tear(self):
    ''' closes storage  '''
    storage.close()


@app.errorhandler(404)
def not_found(error):
    ''' handle error '''
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.route('/', methods=['GET'])
def list_states():
    return 'aa'

if __name__ == '__main__':
    app.run()
