#/usr/bin/local/python3
import json
from flask import Flask, render_template, jsonify, request

app = Flask(__name__, static_folder="../../gui/dist/static", template_folder="../../gui/dist")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/students', methods=['GET', 'POST'])
def get_students():
    if request.method == 'GET':
        with open('data.json', 'r') as infile:
            students = json.load(infile)
        return jsonify(students)

    elif request.method == 'POST':
        students = json.loads(request.data)
        with open('data.json', 'w') as outfile:
            json.dump(students, outfile, indent=2)
        return 'success'

if __name__ == '__main__':
    app.run(port=4000, threaded=True, host='0.0.0.0', debug=True)
