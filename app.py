from flask import Flask,render_template,send_from_directory
import requests
import json

app = Flask(__name__)

key = "HkyaRKrAG08v0FLeSPwUp7JR6rAEKVA6FO5vqZ8o"

rev = requests.get("https://api.nasa.gov/planetary/apod?api_key="+key)
rev = rev.json()
image = rev['url']
i = "https://www.google.com/earth/assets/static/images/overview/overview__get-started__mobile-image.jpg"
if (image.find('youtube')):
    image=i
ex = rev['explanation']
app = Flask(__name__)
@app.route("/",methods = ['GET','POST'])
def page():
    return render_template("Home.html", image = image,ex = ex)

@app.route("/Neo")
def Neo():
    return render_template("Neo.html")

@app.route("/Neo1")
def neo_one():
    return render_template("Neo1.html")


if __name__ == '__main__':
    app.run(debug=True)