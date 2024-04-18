#!/usr/bin/python3
"""This module instantiates an object of class FileStorage"""
from os import getenv
from .storage.db_storage import DBStorage
from .accounts import City

storage = DBStorage()

storage.reload()