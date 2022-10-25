from .db import db

class Shop(db.model):
  __tablename__ = 'shops'

  id = db.column(db.integer, primary_key = True)
  owner_id = db.column(db.integer, db.foreignkey('users.id'), nullable = False)
  shop_name = db.column(db.string(50), nullable = False)
  shop_description = db.column(db.string(255), nullable = False)
  shop_img = db.column(db.string(255), nullable = False)

  owner = db.relationship('User', back_populates='shop_owner')
  

  def to_dict(self):
    return {
      "id": self.id,
      "owner_id": self.owner_id,
      "shop_name": self.shop_name,
      "shop_description": self.shop_description,
      "shop_img": self.shop_img,
    }
