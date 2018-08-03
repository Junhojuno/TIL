from flask import *
import pickle
import numpy as np

app = Flask(__name__)
app.config.update(
    TEMPLATES_AUTO_RELOAD = True, # html코드 수정시 서버를 내렷다가 다시켤 필요없게 하는 설정. 밑에 @app.적용은 server에 해당(내렸다가 올려야함. 앞선 설명에 해당되지 않음.)
)

models = {}

def init():
    with open("./models/classification.pkl", "rb") as f:
        models["classification"] = pickle.load(f)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict")
def predict():
    result = {}
    result['category'] = ["정치","경제","사회","생활/문화","세계","IT/과학"]

    model = models["classification"]
    sentence = request.values.get("sentence")
    result['sentence'] = sentence

    result['result'] = list(np.round_(model.predict_proba([sentence])[0] * 100, 2)) # numpy array는 json으로 parsing이 되지 않아 list로 바꿔줌.



    return jsonify(result)

init()
app.run()
