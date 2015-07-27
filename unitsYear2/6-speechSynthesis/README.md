#Project 5 - Speech Synthesis
![Image](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtbSHwK2rQgGLr5dhkrRUyNWKlMT7Yjax5V4O5_BEd_6JTnBAD)

##Scope
This project will have students take text input in one language and use an API to translate it into another language of the user's choosing.  The output text must also be read out in the correct dialect using the Chrome speech synthesis API.  If completed quickly an extension project will involve the student getting input via the microphone and using the Web Speech API turn that into input for the translation service.

The main goal of this project is to have students interact with multiple, modern APIs both externally and on the browser.  Using the newest html5 standards they will create a novel app that can be used to recognize speech.  If time permits we will also go over responsive design with the speech app and attempt to get it working on their mobile phones in chrome.

#Before Class
Become familiar with the necessary APIs, listed below:

* Speech Synthesis API (browser)
* Azure Translation API (http)
* Web Speech API (browser)

Go over some basic techniques for responsive design and be sure to be able to trouble shoot mobile web issues.

A 'starter' folder will have beginning code for students while the 'final' folder will contain a worked out final solutions for all parts of the lesson.

##Vocabulary

* AI - Artificial Intelligence
* Machine Learning
* CORS - Cross-Origin Resource Sharing
* Form
* Http Headers
* Authorization
* HTML5
* Flash
* Responsive Design

##References

* http://msdn.microsoft.com/en-us/library/dd576287.aspx
* https://datamarket.azure.com/dataset/bing/microsofttranslator
* http://www.html5rocks.com/en/tutorials/getusermedia/intro/
* http://blog.teamtreehouse.com/getting-started-speech-synthesis-api
* http://api.microsofttranslator.com
* http://jsbin.com/sazuca/1/edit
* http://www.browserstack.com/responsive
* http://www.smashingmagazine.com/2014/12/05/enhancing-ux-with-the-web-speech-api/
* http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API
* http://stiltsoft.com/blog/2013/05/google-chrome-how-to-use-the-web-speech-api/

##Industry Skills
This project improves the student's industry skills in the following way. For a description of each skill please refer to the [Year 2 Rubric.](https://docs.google.com/a/scripted.org/spreadsheet/ccc?key=0AmfF2axUr9M_dDA0WEV0LWo2MnBUM0JaQnJTYy1sc0E&usp=drive_web#gid=0)

**Technical Vocabulary:**  
While completing this project the student will be introduced a number of new technical concepts and terms related to translation and the frontend.

**Paired Programming:**   
While completing this project the student will initially be in groups to colloborate on design and will be encourage to assit eachother when working individually on the project.

**Version Control:**   
While completing this project the student will be using a Github fork to manage their project.

**Code Review:**   
While completing this project the student will conduct a code review in groups at the end of their projects.

**Search Engine Skills:**  
While completing this project the student will use Google to look up documentation on APIs.

**Command Line:**  
While completing this project the student will manage git through the command line.

**Debugging**  
While completing this project the student will use Developer Tools to troubleshot issues as they complete different steps of the project.


##Web Programming Skills
This project improves the student's web programming skills in the following way. For a description of each skill please refer to the [Year 2 Rubric.](https://docs.google.com/a/scripted.org/spreadsheet/ccc?key=0AmfF2axUr9M_dDA0WEV0LWo2MnBUM0JaQnJTYy1sc0E&usp=drive_web#gid=0)

**Forms:**  
While completing this project the student will create a form with an input and output.  They will intercept the form submit and make their own backend calls.

**http methods:**   
While completing this project the student will have made two http calls, one to get an auth token and another to conduct the actual translation.

**Routing/ URLs:**   
While completing this project the student will have made the two calls under different routes, /token and /translate.  The backend code will be provided to them to see how it translates into the microsoft calls.

**API:**   
While completing this project the student will interact with the browser Web Speech APIs and external Microsoft translation APIs.

##Year One Review
This project will improve upon the following skills from the [Year 1 Rubric.](https://docs.google.com/a/scripted.org/spreadsheet/ccc?key=0AobNdyExPHV5dGRWMVI0QVpnSWYtczZZT2ZyV01kcmc&usp=drive_web#gid=0)  

HTML/CSS | JavaScript | Work Readiness
------------ | ------------- | ------------
Structure	| Variables		| Debugging
Content		| Types  		| Team Work
			|	Boolean		| 
			| 	Loops		|
			|	Functions	|
		   

#During Class

##Do Now
As the students walk into class they are told to go to http://translate.google.com and do any test translations they like.  Tell them to do a few in different langauges and playback the prononuciation of each to notice the different voices.  Have them visit the Google Translate site on their mobile phones (have a student look at another's phone if they don't have a smartphone) and notice the difference between the two versions of the site. 

##Opening
Discuss the Google Translate app, talk about how humans do translations and how this is a difficult problem for computers.  Discuss how doing translations "locally" (i.e. in the browser) is currently not very feasilbe, i.e. because it's computationally hard, translation services use a lot of data you don't have, etc.  Briefly bring up AI and Machine Learning, define the terms and discuss how they are used in the context of translation.  Finally, for fun have the students look at the [World Lens video](https://www.youtube.com/watch?v=h2OfQdYrHRs), mention how this would work with Google Glass (I think there is an app already?). Mention how it was made by a company with just two people and was acquired by Google.

##Lecture
Before students begin work on this project they must be introduced to the following concepts. The lecturer may decide the best way to deliver these topics.
* Review making http calls with JQuery ($.get, $.post, $.ajax), describe why you would use each.  Give toy examples.
* This will be only the second lesson calling out to APIs, so kids might still be rusty.  Leave it to the lecturers discretion how much time is needed.
* Bring up [Translator API Documentation](http://msdn.microsoft.com/en-us/library/dd576287.aspx).  Most important things to go over are sections on
Obtaining an Access Token and Using the AJAX Interface.
* Look at the backend code and briefly discuss how they will be using this "passthrough" layer instead of the Microsoft API directly.  Discuss why this is necessary because of CORS limitations. Do not go into too much detail about this, just a brief explanation so students have the idea of *why* we can't call some APIs directly from browser because of security issues.
* Talk about the [Speech Synthesis API](http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API).  Highlight the difference of the local, browser API vs the external http based API.  
* Discuss HTML5 and web standards and how they have rapidly evolved over the years.  Discuss how HTML5 is designed to eliminate Flash and what that means for the web.
* Explain Responsive Design to the students at a high level.  Then give examples witht he basic CSS you would need to change the look and feel on mobile vs desktop.  Talk about Mobile First designs and why this would be good.

##Project Creation Time
Students should break into small groups (3-4) and create a storyboard of the mobile version first.  Briefly discuss the different components they will need (i.e. text areas, drop down lists for languages, translate button)  Then have the groups storyboard the desktop version.  It's important to timebox this, probably around a half hour.  While the storyboarding is occuring check progress on groups and give hints.  If many groups are struggling or making the same mistakes bring the groups together and storyboard as a class.  Even though they are in groups ensure each student is drawing out the storyboard on their own piece of paper, they will be doing the projects on their own, the storyboarding is meant to foster the initial creative environment for the design.

Once storyboarding is completed have students breakout of their groups and begin the translate project.  They should each have a design from their groups, but also emphasize they don't *have* to follow it exactly.  Have them fork the starter repo in github and open it up in their IDEs.  Students should work on the site in the following order, go around and ensure students are progressing with these tasks:

* Layout html and css, mention targeting mobile first but don't make it a requirement.
* Create a form and then write the javascript to pull out input textarea data on submit.  Make sure default action on submit is disabled.
* Write functions to get the access token and then hit the translate API endpoint.
* Have output from translate request display on the final textarea.
* Hook into the update of final textarea to the speech synthesis module.  Students can either have it speak automatically on translation or have a seperate button to speak, allow them to choose what they think is the best way to use the module.
* Time permitting, have students look at their sites on a smartphone.  See if they can do a Responsive Design.
* Extra Credit: Any students who finish, have them use Web Speech API to speak directly into a microphone and capture initial data for translation.  Point them along on an individual by individual basis.

##Closing
Have the original groups come back together and share their results.  Make note of any differences from their original design. Have the students discuss difficulties they had and where they got stuck, ideally students who got further along should be providing input to those who didn't get as far.  Have the group go through each individual's code and find any improvements that can be made.  Briefly have a final review with the entire class and make note of any common issues/themes you say while they were workingo on the projects.

##Check for Understanding
The group final discussions should be the time to learn which students were struggling and which were not.  The goal should be *all* students complete the project up to the final Speech Synthesis level.  Responseive Design aspects and using the microphone are secondary.  Make sure all students push all their code before they leave so a better post assessment can be made.

##How to Submit
The teacher must ask students to share the link to their project on your school's [Project Submission Form.](https://docs.google.com/a/scripted.org/spreadsheets/d/1kaVH9hmkDCbBul19583UMPxl6IJ3-4pHgBQ2BU6TKDk/edit#gid=0)

##Homework
Have all students attempt the Extra Credit for homework if they didn't get to it in class.
