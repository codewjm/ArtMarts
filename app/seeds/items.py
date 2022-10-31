from app.models import db, Item

def seed_items():
  item_one = Item(
    owner_id=1,
    item_name="Paint Brush",
    item_price="20.00",
    item_description="Paint brush Description",
    item_img="https://www.artnews.com/wp-content/uploads/2020/09/AdobeStock_61145816.jpeg",
    shop_id=1
  )
  item_two = Item(
    owner_id=2,
    item_name="Canvas",
    item_price="11.00",
    item_description="Canvas Description",
    item_img="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/016DB9C981334D10AF77E13648EC167E/10131569_25.jpg",
    shop_id=2
  )
  item_three = Item(
    owner_id=3,
    item_name="Palette Knife",
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
