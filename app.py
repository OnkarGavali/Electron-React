import sys
from flask import Flask, jsonify, request
from flask_cors import CORS
import toupcam

app = Flask(__name__)
app_config = {"host": "0.0.0.0", "port": sys.argv[1]}

"""
---------------------- DEVELOPER MODE CONFIG -----------------------
"""
# Developer mode uses app.py
if "app.py" in sys.argv[0]:
  # Update app config
  app_config["debug"] = True

  # CORS settings
  cors = CORS(
    app,
    resources={r"/*": {"origins": "http://localhost*"}},
  )

  # CORS headers
  app.config["CORS_HEADERS"] = "Content-Type"


"""
--------------------------- REST CALLS -----------------------------
"""
# Remove and replace with your own
@app.route("/example")
def example():

  # See /src/components/App.js for frontend call
  a = toupcam.Toupcam.EnumV2()
  return jsonify("Example response from Flask! Learn more in /app.py & /src/components/App.js "+ a)



@app.route("/getHue")
def getHue():

  # See /src/components/App.js for frontend call
  a=toupcam.Toupcam.get_Hue( toupcam.Toupcam.EnumV2())
  return jsonify("Example response from Flask! Learn more in /app.py & /src/components/App.js "+ a)



"""
-------------------------- APP SERVICES ----------------------------
"""
# Quits Flask on Electron exit
@app.route("/quit")
def quit():
  shutdown = request.environ.get("werkzeug.server.shutdown")
  shutdown()

  return


if __name__ == "__main__":
  app.run(**app_config)
