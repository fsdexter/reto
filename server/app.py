from crypt import methods
from distutils.log import debug
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=['GET'])
def hello_world():
    return {
        "origin":"server",
        "msg":"server alive"
    }


if __name__=='__main__':
    app.run(debug=True, host='0.0.0.0')