from flask import Flask, Blueprint
app = Flask(__name__)
app_views = Blueprint('app_views', url_prefix="/api/v1")
app.register_blueprint(app_views)
