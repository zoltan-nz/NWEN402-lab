from flask import Flask
from example_one import App
import sys

app = Flask(__name__)
mininet_app = App()

@app.route("/start_mininet")
def start_mininet():
    print('Start mininet...')
    mininet_app.start()
    return 'OK'

@app.route("/stop_mininet")
def stop_mininet():
    mininet_app.stop()
    return 'OK'

if __name__ == "__main__":
    app.run(host='0.0.0.0')
