from flask import Flask, request, jsonify, make_response
import json
from flask_cors import CORS
import numpy as np

print("service is running!")
flask_app = Flask(__name__)
app = Api(app=flask_app,
          version="1.0",
          title="Sarcasm Detector",
          description="Detect sarcasm using a trained model.")
CORS(flask_app)


name_space = app.namespace('detection', description='Detection APIs')

print("test2")


@name_space.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin",
                             "http://localhost:3000")
        response.headers.add('Access-Control-Allow-Headers',
                             "Content-Type, Authorization")
        response.headers.add('Access-Control-Allow-Methods',
                             "GET, POST,PUT, DELETE, OPTIONS")
        var = response
        # print(f"response:{type(var)}")
        return response
