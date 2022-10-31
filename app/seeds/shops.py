from app.models import db, Shop

def seed_shops():
    shop_one = Shop(
        owner_id=1,
        shop_name="Paint Brushes Galore",
        shop_description="These paint brushes crafted from only the best materials.",
        shop_img="https://s32625.pcdn.co/wp-content/uploads/2018/07/steve-johnson-592593-unsplash-1024x682.jpg.optimal.jpg"
    )
    shop_two = Shop(
        owner_id=2,
        shop_name="Canvases",
        shop_description="My canvases are designed to make your painting experiance flow like the Rubicon",
        shop_img="https://www.wall26.com//data/product/054/54229/preview/hdVa7W6tnIx6CvCDfL59sIrYR0sfrbWvGcfIbC5X.jpg"
    )
    shop_three = Shop(
        owner_id=3,
        shop_name="Ides of March Palette Knives",
        shop_description="These palette knives are handmade, coated in chrome, and the preferred choice by senators.",
        shop_img="https://ae01.alicdn.com/kf/Hf7d0935caba14c938a2962f0ee24909bi.jpg"
    )

    db.session.add(shop_one)
    db.session.add(shop_two)
    db.session.add(shop_three)

    db.session.commit()

def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;')
    db.session.commit()
