from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class CreateReviewForm(FlaskForm):
  author_id = IntegerField('Author Id', validators=[DataRequired()])
  item_id = IntegerField('Item Id', validators=[DataRequired()])
  review_body = StringField('Review', validators=[DataRequired()])
  star_rating = IntegerField('Rating', validators=[DataRequired()])
