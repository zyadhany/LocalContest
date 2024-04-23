#!/usr/bin/python3
"""This module defines a base class for all models in our hbnb clone"""
import uuid
import models
from datetime import datetime
import sqlalchemy
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BaseModel(Base):
    """A base class for all hbnb models"""

    # id = Column(String(60), primary_key=True, nullable=False)

    def __init__(self, *args, **kwargs):
        """Instatntiates a new model"""
        if not kwargs:
            self.id = str(uuid.uuid4())
        else:
            if 'id' not in kwargs:
                self.id = str(uuid.uuid4()) 

            if __class__ in kwargs:
                del kwargs['__class__']
            self.__dict__.update(kwargs)

    def __str__(self):
        """Returns a string representation of the instance"""
        cls = (str(type(self)).split('.')[-1]).split('\'')[0]
        return '[{}] {}'.format(cls, self.__dict__)

    def delete(self):
        """delete obj from storage"""
        models.storage.delete(self)

    def save(self):
        """Updates updated_at with current time when instance is changed"""
        models.storage.new(self)
        models.storage.save()

    def to_dict(self):
        """Convert instance into dict format"""
        dictionary = {}
        dictionary = self.__dict__.copy()
        dictionary['__class__'] = str(type(self).__name__)
        if "_sa_instance_state" in dictionary:
            del dictionary["_sa_instance_state"]
        return dictionary
