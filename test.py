#!/usr/bin/python

from models.accounts import account
from models import storage


acc = account()
acc.email = 'zyadhany'
acc.password = '123'
acc.save()


