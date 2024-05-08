#!/usr/bin/python3
""" State Module for HBNB project """
from models.base_model import BaseModel, Base
import models
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship


class User(BaseModel, Base):
    __tablename__ = 'users'
    handle = Column(String(64), primary_key=True)
    account_id = Column(Integer, ForeignKey('accounts.id'))
