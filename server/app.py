from crypt import methods
from distutils.log import debug
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=['GET'])
def hello_world():
    return {
        "origin":"server",
        "msg":"server alive"
    }
@app.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


if __name__=='__main__':
    app.run(debug=True, host='0.0.0.0')