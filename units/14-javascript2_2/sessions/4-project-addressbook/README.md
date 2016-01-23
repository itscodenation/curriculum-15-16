# Address book

![image](http://i.imgur.com/HHyng59.jpg)

##Scope

This project inolves implementing the core functionality of a simple client side address book. The objective of this project is for students to practice their skills with objects and strings.
 
##Before Class

### Prerequisites
Students should only start this project after they have completed the other lessons in the unit.

### Starter code

See [here](starter_code/) for code and [here](https://rawgit.com/ScriptEdcurriculum/curriculum/master/units/9-hash/lessons/2-project/starter_code/index.html) to view.

### Solution code

See [here](https://github.com/ScriptEdcurriculum/solutions2015/tree/master/year1/14-javascript2_2/project-addressBook) for code (private).


##During Class

###Do Now

1. Attendance: 
2. Return graded do-now and exit ticket from previous class

###Opening

What is an address book? What do we use address books for? What kind of information does an address book store?

###Lecture

You are going to build the guts of a basic address book. This address book will contain your contacts. Here are your instructions:

#### 1. `addContacts()`

Modify `js/guts.js` and create a function called `addContacts()`. This function will not take in any parameters. It will return an object. The object shall be structed as follows:

* The key of the object must be your contact's name in string form.
* The value of the object must be another object. 
	* This second object must contain three properties. The properties must be called: location, picture, and email. The values for each of these properties will be a string.

Populate this object with 5 contacts. For the picture value, supply a link to the picture in the form of a string. Use image hosting services such as [imgur](http://imgur.com) if you need to.

#### 2. `searchContacts(contacts, query)`

Modify `js/guts.js` and create a function called `searchContacts(contacts, query)`. This function will take in two parameters: `contacts` which is an object containing the contacts from `addContacts()` and `query` which is the search query of the user. Use `console.log()` to verify that these statements are true.

This function should return an object containing all the contacts that match the user's search query. You should check the query against every property. In other words, the user should be able to search for a contact by name, location, or email.

###Brainstorming
Before you start coding, identify the list of steps you need to do to finish this project. Here's a start:

1. Write down your contacts in a separate file. Get their names, locations, emails, and pictures ready.
2. Think about the structure of the object for `addContacts()`. Review what an object in an object looks like from the previous lesson if you need to.
3. Think about how to scan through an object for `searchContacts()`. 
4. Bring the starter code into your own environment.

###Build Time
Students will work alone on this project. The teacher's role will be to walk around the room helping students with any questions they have. Students are encouraged to look at previous lessons for reference.

##Closing
Select students to present their work to the class.

###Check for Understanding
Teachers should keep track of student success while they are presenting to the class.

###How to Submit
Students must push all final code to their GitHub repository. To push changes in Cloud 9 the following commands must be ran in the terminal:

`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`  

Students will then share the link to their repo at the project submission link found in the header of the Daily Session Document.
