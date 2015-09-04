#Project 4 - Soundcloud API
![Imgur](http://i.imgur.com/2kSeDCY.png)

##Do Now 
Begin this session by completing the [Do Now](doNow.md) activity.

##Scope
You have just been hired by APIs R US inc. This company relies entirely on using API for the many webapps. As a first project they have asked you to make a simple site that calls on the SoundCloud API to test your skills.  
Since this is your first project, your manager has provided you with some helpful tools to get started. 

##Project Criteria
Your Manager has laid out the following requirements for the project: 

* The webapp will display the Track Title, Genre and URL for songs tagged with the genre the user inputs.
* CSS is not a necessary feature for this project 


##Learning Objectives
By the end of this project the employee will be able to...

* Obtain a Client ID by registering their application with SoundCloud
* Initialize their application using SC.initialize
* Get information from an API using SC.get
* Use jQuery to append text to an HTML page

##References/Tools
* [Script Tag](http://javascript.crockford.com/script.html)
* [SoundCloud Developers Guide](developers.soundcloud.com/docs/api/guide)
* [HTTP Method explained](http://www.w3schools.com/tags/ref_httpmethods.asp)

 
##Vocabulary

* Client
* Server
* API
* Get 
* Initialize
* Callback 

***
##Instructions

You are not given any Starter Code for this project. However, your manager has provided you with some useful direction to complete this project. Follow the step-by-step instructions below. 

Although these directions do not provide all the answers for this project, they do provide you with the guidance you will need to make this project.

###1) Create a GitHub repo and C9 workspace for this project
This should have already been completed during the [Do Now](doNow.md).

**Before moving on to step two, ensure your HTML is correct by having an instructor confirm you are ready to move on.** 

###2) Obtain a Client ID
In order to use a company's API you must request access and have them send you an API key. SoundCloud asks you to do this by registering your app on the [SoundCloud Developers Guide](developers.soundcloud.com/docs/api/guide) page.

Sign in or create a SoundCloud account to receive you Client ID. After your Client ID has been emailed to you use ```SC.initialize``` to begin using the SoundCloud API.


###3) Ready the Document
Now that you have initialized the yourwebapp it is time to "ready" the document. For information on how to do this, research the [jQuery ready function](learn.jquery.com/using-jquery-core/document-ready/).  
*Hint: all of the remaining code for this project will fall inside of this ready function.*


###4) Interpret User Input
Now that the document is ready you must store the user's response in a variable.  

In order to achieve this set a variable equal to the id of your button. Then use the ```.click``` function to set the **value**  of the user input to a new variable called ```userChoice```.     
*Hint: this can be accomplished in 3 lines of code. before moving on to step 5 check this code is working by logging userChoice to the console.*  

###5) SC.get
Now that you have stored the value of the user input it is time to use it with the SoundCloud API.  
Now that you have initialized the document and you are ready to interpret user input from the html file you are now ready to call the SoundCloud API to **get** data.  

Call on the SC.get function to get tracks by the genre selected by the userInput.  
If you are having an issue with this check out the [Basic Use](https://developers.soundcloud.com/docs/api/sdks#basic) section of the SoundCloud API Documentation. Also see the documentation on the SC.get method [here](https://developers.soundcloud.com/docs/api/sdks#methods).    


After the SC.get function has been created you must use the .each function of jQuery to then append text within the results id.


###6) Display content
You are finally ready to start placing text in the form of API references in your HTML page! Use the [SoundCloud API reference](https://developers.soundcloud.com/docs/api/reference#tracks) to do this. The example completed code uses track, genre and permalink_url but you may choose any three properties to display on your page for each song. 

####Bonus) 
Your Manager has offered a stipend of $500 for each of the bonus requirements listed below:  

* Display information about the user next to information about the track. Use the [SoundCloud Developers Guide](developers.soundcloud.com/docs/api/guide) for this documentation
* Stream a song matching the genre selected. Use the [SoundCloud Developers Guide](developers.soundcloud.com/docs/api/guide) for this documentation.  

***

##Grading Criteria
Your manager will be grading your capibility on this project based on [this rubric](/assessment.md)

##How to Submit
The final code for this project must be pushed back up to your repo on GitHub. **Then share the link to your repo at bit.ly/ScriptEdProjects**

To push to GitHub run the following commands in your terminal:  
`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`

##Homework
Instructor will assign homework based on progress in class.



