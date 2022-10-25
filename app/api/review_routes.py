from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db
from ..forms.review_form import CreateReviewForm


review_routes = Blueprint('reviews', __name__)


#*************************************************************************#
# GET ALL REVIEWS
@review_routes.route('/', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

#*************************************************************************#
#CREATE A REVIEW
@review_routes.route('/create_review', methods=['POST'])
@login_required
def create_review():

    form = CreateReviewForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

      reviewData = Review(
        author_id = current_user.id,
        item_id = form.data["item_id"],
        review_body = form.data["review_body"],
        star_rating = form.data["star_rating"]
      )

      db.session.add(reviewData)
      db.session.commit()
      return jsonify(reviewData.to_dict()), 200
    else:
      return {'errors': form.errors}, 401

#*************************************************************************#
# UPDATE A REVIEW
@review_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
        form = CreateReviewForm()

        form["csrf_token"].data = request.cookies["csrf_token"]

        if form.validate_on_submit():

          review = Review.query.get(review_id)

          review.author_id = current_user.id
          review.item_id = form.data["item_id"]
          review.review_body = form.data["review_body"]
          review.star_rating = form.data["star_rating"]

          db.session.commit()
          return jsonify(review.to_dict()), 200
        else:
          return {'errors': form.errors}, 401

#*************************************************************************#
# DELETE A REVIEW
@review_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    review = Review.query.get(review_id)
    db.session.delete(review)
    db.session.commit()
    return {'message': 'Review deleted'}
