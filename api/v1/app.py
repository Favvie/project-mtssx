#!/usr/bin/python3

from flask import Flask, jsonify
app = Flask(__name__)


tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})


@app.route('/', methods=["GET"])
def hello():
    return jsonify({'thigns': 1})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, threaded=True)
