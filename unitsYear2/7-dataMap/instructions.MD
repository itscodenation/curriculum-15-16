#Heatmap project instructions

##Introduction

You are going to create a heatmap to represent 311 call data from Brooklyn. You will use the Google Maps API and an internally provided API to accomplish this.

##Preparation

1. Create an API key [here](http://clownfish.io/)
2. Open cloud9 or nitrous. Create a new project. 
3. Copy and paste the following commands in the terminal
``
git clone https://github.com/ScriptEdcurriculum/curriculum.git
``
4. A new folder on the left should have appeared. Navigate to `curriculum/unitsYear2/7-dataMap/starter_code/`. 
Preview index.html in its own window. On your address bar, click on the shield and click on "Load unsafe script" like so:
![image](http://i.imgur.com/ThIquJj.png)
5. Read the documentation for the API [here.](docs.MD)

##Requirements

1. The site shall show all complaint data when no filter is applied. This is the default case and should occur when the page first loads.
2. The user shall be able to filter by complaint type by using a dropdown menu.

##Starter guide

1. Wireframe the map page. Where do you plan to put the menu? What happens when the user clicks on the menu?
2. Use [this](http://jsonformatter.curiousconcept.com/) and submit sample requests through it. Make sure you understand how to specify parameters in your requests. Make sure you understand what the responses mean.
3. Open heatmap.js and start going through the tasks.

##Bonus

Put a text box and a search button on your page. When the user clicks the button, the system should take what's in the text box and search by complaint descriptor. Think about case insensitivity.

##Submission

Draw three conclusions from the heatmap. You will present them and the heatmap itself to the class.
