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
    shop_four = Shop(
        owner_id=1,
        shop_name="Brushes That Last",
        shop_description="I make paint brushes for all ages and assure my customers will never regret a single purchase.",
        shop_img="https://howtocleanthings.com/wp-content/uploads/2018/04/htct_paintbrushes-768x512.jpg"
    )
    shop_five = Shop(
        owner_id=2,
        shop_name="Canvas ArtMart",
        shop_description="I sell both homemade canvases and resell canvases made by other crafters.",
        shop_img="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2NjM3MDI3MjU5ODUyNzc5/how-to-choose-a-canvas-for-painting.jpg"
    )
    shop_six = Shop(
        owner_id=3,
        shop_name="Roman Pallete Knives",
        shop_description="Palette knives made from the highest quality of materials.",
        shop_img="https://trembelingart.com/wp-content/uploads/2019/01/palette-knife--1024x682.jpg"
    )

    db.session.add(shop_one)
    db.session.add(shop_two)
    db.session.add(shop_three)
    db.session.add(shop_four)
    db.session.add(shop_five)
    db.session.add(shop_six)

    db.session.commit()

def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;')
    db.session.commit()
