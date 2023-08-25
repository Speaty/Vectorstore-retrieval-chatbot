from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

import main

app = Flask(__name__)
CORS(app)

@app.route('/')
def setup():
    main.setup()
    return 'Hello, World!'

@app.route('/chat', methods=['POST'])
@cross_origin()
def chat():
    print(request.get_json())
    data = request.get_json()
    
    if 'body' in data:
        input_message = data['body']
        output = main.chatbot_loop(input_message)
    
    if output == False:
        output_dict = {
            'source': 'None',
            'page': 'None',
            'answer': 'No results found...'
        }
    else:
        output_dict = {
            'source': output[0],
            'page': output[1],
            'answer': output[2]
        }

    print(jsonify(output_dict))

    return jsonify(output_dict)

if __name__ == "__main__":
    app.run()