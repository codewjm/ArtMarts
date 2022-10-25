from .db import db

class Item(db.model):
  __tablename__ = 'items'

  id = db.column(db.integer, primary_key = True)
  item_name = db.column(db.string(50), nullable = False)
  item_price = db.column(db.string(10), nullable = False)
  item_description = db.column(db.string(255), nullable = False)
  item_img = db.column(db.string(500), nullable = False)
  shop_id = db.column(db.integer, db.foreignkey('shops.id'), nullable = False)
  # category_id = db.column(db.integer, db.foreignkey('categories.id'), nullable = False)

  item = db.relationship('Shop', back_populates='shop_item')
  review = db.relationship('Review', back_populates='item_reviews', cascade='all, delete')

  def to_dict(self):
    return {
      "id": self.id,
      "item_name": self.item_name,
      "item_price": self.item_price,
      "item_description": self.item_description,
      "item_img": self.item_img,
      "shop_id": self.shop_id,
      # "category_id": self.category_id,
    }
