from flask import *
from werkzeug.exceptions import *
import os
import sys

app = Flask(__name__)
app.secret_key = 'EFBC6184219A84E7A8E48A11AB3302ACBDD5A104067F47AA47E688DC3B3FDA0D'

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)