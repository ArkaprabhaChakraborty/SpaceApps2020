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

@app.route("/Neo2")
def neo_two():
    return render_template("Neo2.html")

@app.route("/Neo3")
def neo_three():
    return render_template("Neo3.html")

@app.route("/Neo4")
def neo_four():
    return render_template("Neo4.html")

@app.route("/Neo5")
def neo_five():
    return render_template("Neo5.html")

@app.route("/Neo6")
def neo_six():
    return render_template("Neo6.html")

@app.route("/Neo7")
def neo_seven():
    return render_template("Neo7.html")

@app.route("/Neo8")
def neo_eight():
    return render_template("Neo8.html")

@app.route("/Neo9")
def neo_nine():
    return render_template("Neo9.html")

@app.route("/Neo10")
def neo_ten():
    return render_template("Neo10.html")

@app.route("/Neo11")
def neo_eleven():
    return render_template("Neo11.html")

@app.route("/Neo12")
def neo_twelve():
    return render_template("Neo12.html")

@app.route("/Neo13")
def neo_thirteen():
    return render_template("Neo13.html")

@app.route("/earthquake")
def earthquake():
    return render_template("index.html")


    
if __name__ == '__main__':
    app.run(debug=True)