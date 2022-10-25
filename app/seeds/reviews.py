from app.models import db, Review


def seed_reviews():
    review_one = Review(
        user_id=1,
        item_id=1,
        review_body="These brushes are great for painting",
        star_rating=5
    )
    review_two = Review(
        user_id=2,
        item_id=2,
        review_body="The canvas was warped - no bueno.",
        star_rating=2
    )
    review_three = Review(
        user_id=3,
        item_id=3,
        review_body="Nice but a it expensive",
        star_rating=4
    )

    db.session.add(review_one)
    db.session.add(review_two)
    db.session.add(review_three)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
