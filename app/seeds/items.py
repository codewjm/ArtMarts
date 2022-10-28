from app.models import db, Item

def seed_items():
  item_one = Item(
    owner_id=1,
    item_name="Paint Brush",
    item_price="20.00",
    item_description="Paint brush Description",
    item_img="https://cdn.mscdirect.com/global/images/ProductImages/9315381-24.jpg",
    shop_id=1
  )
  item_two = Item(
    owner_id=2,
    item_name="Canvas",
    item_price="11.00",
    item_description="Canvas Description",
    item_img="https://i5.walmartimages.com/asr/92f1eb7b-4a26-4122-add1-e9d5311a1ad5.f701271d51f82f5bcd30a806fae317d6.jpeg",
    shop_id=2
  )
  item_three = Item(
    owner_id=3,
    item_name="Paint",
    item_price="25.00",
    item_description="Paint knife description",
    item_img="https://www.brushesandmore.com/wp-content/uploads/2017/06/500820.jpg",
    shop_id=3
  )

  db.session.add(item_one)
  db.session.add(item_two)
  db.session.add(item_three)
  db.session.commit()


def undo_items():
  db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
  db.session.commit()
