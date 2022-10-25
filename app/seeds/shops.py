from app.models import db, Shop

def seed_shops():
    shop_one = Shop(
        owner_id=1,
        shop_name="Shop One",
        shop_description="Shop One Description",
        shop_img="https://m.media-amazon.com/images/I/81S5qFUtWAL.jpg"
    )
    shop_two = Shop(
        owner_id=2,
        shop_name="Shop Two",
        shop_description="Shop Two Description",
        shop_img="https://www.canvaschamp.com/static/images/landingpage/blankprestretchedcanvas/streach-choice.jpg"
    )
    shop_three = Shop(
        owner_id=3,
        shop_name="Shop Three",
        shop_description="Shop Three Description",
        shop_img="https://m.media-amazon.com/images/I/61VdIVYoexL.jpg"
    )

    db.session.add(shop_one)
    db.session.add(shop_two)
    db.session.add(shop_three)

    db.session.commit()

def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;')
    db.session.commit()
