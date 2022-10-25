from .db import db

class shops(db.model):
  __tablename__ = 'shops'

  id = db.column(db.integer, primary_key = True)
  owner_id = db.column(db.integer, db.foreignkey('users.id'), nullable = False)
  shop_name = db.column(db.string(50), nullable = False)
  shop_description = db.column(db.string(255), nullable = False)
  shop_img = db.column(db.string(255), nullable = False)

  