from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError

class CreateItemForm(FlaskForm):
    item_name = StringField('Name', validators=[DataRequired()])
    item_price = IntegerField('Price', validators=[DataRequired()])
    item_description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')
