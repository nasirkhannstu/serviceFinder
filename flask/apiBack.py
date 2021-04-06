from flask import Flask, request, json

app = Flask(__name__)


@app.route('/api', methods=['GET', 'POST'])
def index():
    message = None
    if request.method == 'POST':
        data = json.loads(request.data)
        try:
            age = int(data['age'])
            if int(age) < 18:
                return {'state': "Ba", 'status': True}
            else:
                return {'state': "Bb", 'status': True}
        except ValueError:
            return {'state': "Not a Number", 'status': False}

    return {
        'state': 'A',
        'type': 'text-input',
        'text': 'Hello, How old are you?',
        'message': message
    }


@app.route('/api/cardBa', methods=['GET'])
def cardBa():
    return {
        'state': 'Aa',
        'type': 'multiple-choice',
        'text': 'Choose Options',
        'options': ['Youtube', 'Reddit'],
        'message': None
    }


@app.route('/api/cardBb', methods=['GET', 'POST'])
def cardBb():
    return {
        'state': 'Aa',
        'type': 'multiple-choice',
        'text': 'Choose Options',
        'options': ['Cinema', 'Hotel', 'Hospital', 'Harbour'],
        'message': None
    }


if __name__ == '__main__':
    app.run(debug=True)
