import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

def create_app():
    load_dotenv()

    app = Flask(__name__)

    # Allow React dev server to call Flask
    # If you’re using Vite, React runs on http://localhost:5173
    # If CRA, it’s usually http://localhost:3000
    CORS(app, resources={r"/api/*": {"origins": [
        "http://localhost:5173",
        "http://localhost:3000",
    ]}})

    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret")

    from .routes import api
    app.register_blueprint(api)

    return app