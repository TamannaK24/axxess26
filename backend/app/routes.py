from flask import Blueprint, jsonify, request

api = Blueprint("api", __name__, url_prefix="/api")

@api.get("/health")
def health():
    return jsonify(status="ok")

@api.post("/predict")
def predict():
    data = request.get_json(silent=True) or {}

    # TODO: replace this with your model logic
    # Example placeholder output
    result = {
        "received": data,
        "prediction": "low_risk",
        "confidence": 0.73
    }
    return jsonify(result)