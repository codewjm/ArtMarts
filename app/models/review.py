from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'), nullable=False)
    review_body = db.Column(db.String(255), nullable=False)
    star_rating = db.Column(db.Integer, nullable=False)

    item_reviews = db.relationship('Item', back_populates='review')
    author_review = db.relationship('User', back_populates='review_author')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'review': self.review,
            'rating': self.rating
        }
