from flask import Flask,render_template,send_from_directory
import requests
import json

app = Flask(__name__)

message={1:"Land surface temperature is how hot the ground feels to the touch. If you want to know whether temperatures at some place at a specific time of year are unusually warm or cold, you need to compare them to the average temperatures for that place over many years. These maps show the average weekly or monthly daytime land surface temperatures for 2010-2020.",
2:"Fire is a recurring part of nature. Wildfires can be caused by lightning striking a forest canopy or, in a few isolated cases, by lava or hot rocks ejected from erupting volcanoes. Most fires worldwide are started by humans, sometimes accidentally and sometimes on purpose. Not all fires are bad. Fire clears away dead and dying underbrush, which can help restore forest ecosystems to good health. Humans use fire as a tool in slash-and-burn agriculture to speed up the process of breaking down unwanted vegetation into the soil. Humans also use fire to clear away old-growth forests to make room for living spaces, roads, and fields for raising crops and cattle. But not all fires are good. Wildfires can destroy natural resources and human structures. Globally, fire plays a major role in Earth's carbon cycle by releasing carbon into the air, and by consuming trees that would otherwise absorb carbon from the air during photosynthesis. These maps show the locations of actively burning fires around the world, detected by instruments aboard NASA satellites.",
3:"Sea surface temperature is the temperature of the top millimeter of the ocean's surface. The average sea surface temperatures over a long period of time are called a sea surface temperature climatology. An area's climatology acts a baseline for deciding whether and how much the climate is changing. To make a climatology data set, you average measurements collected over a long period of time. These data were collected between 1985 and 1997 by a series of National Oceanic and Atmospheric Administration (NOAA) satellites. The observations are grouped into five-day periods.",
4:"Beneath the waters of the world's ocean, the Earth's surface isn't flat like the bottom of a glass or large bowl. There are giant mountain ranges and huge cracks where the ocean floor is ripping apart. Underwater volcanoes are slowly building up into mountains that may one day rise above the sea surface as islands. Because of these features, the depth of the water isn't the same everywhere in the ocean. Bathymetry is the measurement of how deep the water is at various places and the shape of the land underwater. In these maps, different shades of color represent different water depths. The data come from the General Bathymetric Chart of the Oceans, produced by the International Hydrographic Organization (IHO) and the United Nations' (UNESCO) Intergovernmental Oceanographic Commission (IOC)",
5:"Colorless, odorless, and poisonous, carbon monoxide is a gas that comes from burning fossil fuels, like the gas in cars, and burning vegetation. Carbon monoxide is not one of the gases that is causing global warming, but it is one of the air pollutants that leads to smog. These data sets show monthly averages of carbon monoxide across the Earth measured by the Measurements of Pollution In The Troposphere (MOPITT) sensor on NASA's Terra satellite. Different colors show different amounts of the gas in the troposphere, the layer of the atmosphere closest to the Earth's surface, at an altitude of about 12,000 feet.",
6:"This map shows where tiny, floating plants live in the ocean. These plants, called <em>phytoplankton</em>, are an important part of the ocean's food chain because many animals (such as small fish and whales) feed on them. Scientists can learn a lot about the ocean by observing where and when phytoplankton grow in large numbers. Scientists use satellites to measure how much phytoplankton are growing in the ocean by observing the color of the light reflected from the shallow depths of the water. Phytoplankton contain a photosynthetic pigment called <em>chlorophyll</em> that lends them a greenish color. When phytoplankton grow in large numbers they make the ocean appear greenish. These maps made from satellite observations show where and how much phytoplankton were growing on a given day, or over a span of days. The black areas show where the satellite could not measure phytoplankton.",
7:"Have you ever flown in a plane over a forest, or seen a picture of a forest canopy taken from above? If so, you probably noticed the forest canopy was colored shades of dark green. The trees' and plants' leaves give the forest its lush green appearance. The more leaves there are in a forested area, the greener the tree canopy. Have you ever wondered how many leaves there are in a forest? Today, scientists use NASA satellites to map <em>leaf area index</em> &mdash; images processed to show how much of an area is covered by leaves. For example, a leaf area index of one means the area is entirely covered by one layer of leaves. Knowing the total area covered by leaves helps scientists monitor how much water, carbon, and energy the trees and plants are exchanging with the air above and the ground below",
8:"Nitrogen dioxide (NO<sub>2</sub>) is a gas that occurs naturally in our atmosphere. NO<sub>2</sub> plays an important role in the formation of ozone in the air we breathe. Ozone high in the atmosphere helps us. It is like sunscreen, and it protects us from harmful ultraviolet (UV) rays from the Sun. Near the ground though, ozone is a pollutant. It damages our lungs and harms plants, including the plants we eat. Ozone occurs naturally in the air we breathe, but there's not enough of it to hurt us. Unhealthy levels of ozone form when there is a lot of NO<sub>2</sub> in the air. NO<sub>2</sub>&mdash;and ozone&mdash;concentrations are usually highest in cities, since NO<sub>2</sub> is released into the atmosphere when we burn gas in our cars or coal in our power plants, both things that happen more in cities. Ozone pollution is worse in summer. NO<sub>2</sub> is also unhealthy to breathe in high concentrations, such as on busy streets and highways where there are lots of cars and trucks. When driving, it is typically a good idea to keep the car windows rolled up and the car&apos;s ventilation set to &ldquo;recirculate&rdquo; so as to keep pollution out of the interior of the car. It is also important to reduce outdoor activities like playing or jogging if government officials warn you that air quality will be bad on a certain day.",
9:"This map shows how many people live in different areas on Earth. The map is divided into numerous small boxes, called &quot;grids.&quot; Each grid box is about 1 kilometer long by one kilometer wide, and it is color coded to show how many people live there. Lighter areas have fewer people. The red dots scattered across most countries show cities, where many people live in a small area.",
10:"Rainfall is essential for life on Earth. Rain is a main source of fresh water for plants and animals. These maps show where and how much rain fell around the world on the dates shown. Notice that most rain falls near the equator. Notice also that more rain falls on the ocean than on land. The NASA instrument that made these rainfall measurements flies on a satellite orbiting our world near the equator, so it only measures rainfall near the equator and not at high latitudes, nor in Earth's polar regions.",
11:"Land topography allows us to make maps of the features of the surface of the Earth. Topographic maps show the location, height, and shape of features like mountains and valleys, rivers, even the craters on volcanoes. Another way to think of topographic maps is that they are a picture of the three-dimensional (3-D) structure of the surface of the Earth. Flat maps can create a 3-D effect by making some parts of the map dark and other parts light. This is called 'shading' because it makes features on the surface look like they are casting shadows. This topographic map is made from data collected from three sources: NASA's Space Shuttle, Canada's Radarsat satellite, and topographic maps made by the U.S. Geological Survey.",
12:"These images show the Earth's surface and clouds in true color, like a photograph. NASA uses satellites in space to gather images like these over the whole world every day. Scientists use these images to track changes on Earth's surface. Notice the shapes and patterns of the colors across the lands. Dark green areas show where there are many plants. Brown areas are where the satellite sensor sees more of the bare land surface because there are few plants. White areas are either snow or clouds. Where on Earth would you like to explore?",
13:"Our lives depend upon plants and trees. They feed us and give us clothes. They absorb carbon dioxide and give off oxygen we need to breathe. Plants even provide many of our medicines and building materials. So when the plants and trees around us change, these changes can affect our health, our environment, and our economy. For these reasons, and more, scientists monitor plant life around the world. Today, scientists use NASA satellites to map the greenness of all Earth's lands. These <em>vegetation index</em> maps show where and how much green leaf vegetation was growing for the time period shown.",
14:"These maps depict how much warmer or colder a region may be in a given month compared to the norm for that same month in the same region from 1951-1980. These maps do not depict absolute temperature but instead show temperature anomalies, or how much it has changed."}

key = "HkyaRKrAG08v0FLeSPwUp7JR6rAEKVA6FO5vqZ8o"

rev = requests.get("https://api.nasa.gov/planetary/apod?api_key="+key)
rev = rev.json()
image = ""
if 'url' in rev:
    image = rev['url']
i = "https://www.google.com/earth/assets/static/images/overview/overview__get-started__mobile-image.jpg"
if (image.find('youtube') !=-1 or not image):
    image=i
if 'explanation' in rev:
    ex = rev['explanation']
else:
    ex = "Welcome to AIDA."
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


@app.route("/about")
def about():
    return render_template("about.html")


    
if __name__ == '__main__':
    app.run(debug=True,use_reloader=True)