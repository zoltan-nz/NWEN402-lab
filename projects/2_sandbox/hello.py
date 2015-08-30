from flask import Flask
import subprocess32
import example_one
import pdb
import sys
import os
import threading
from multiprocessing import Process

app = Flask(__name__)
can_break = False

def run_mininet():
    args = ["sudo", "python", "example_one.py"]
    popen = subprocess32.Popen(args, shell=False, stdout=subprocess32.PIPE)
    while not can_break:
        print popen.stdout.readline()

t = Process(target=run_mininet)

@app.route("/")
def hello():
    """return hello world"""
    return "<a href='/run'>Run</a>"


@app.route("/run")
def run_a_command():
    print('Console runner...')
    # pdb.set_trace()

    try:
        print t.is_alive()
        t.start()
        while True:
            return "<a href='/stop'>Stop</a>"
    except KeyboardInterrupt:
        can_break = True
    except:
        print "Unexpected error:", sys.exc_info()[0]

@app.route("/stop")
def stop_a_command():
    print t.is_alive()
    t.terminate()
    return 'OK'

if __name__ == "__main__":
    app.run(host='0.0.0.0')