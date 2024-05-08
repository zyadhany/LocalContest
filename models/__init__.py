#!/usr/bin/python3
"""This module instantiates an object of class dp"""

from models.engine.db_storage import DBStorage
storage = DBStorage()

storage.reload()

from .accounts import account
from .user import User
