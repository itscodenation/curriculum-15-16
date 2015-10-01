# Project #2: Grading App

![Imgur](http://i.imgur.com/NOJFDtBl.jpg)

##Scope

This project involves implementing the core functionality for a simple grading app. The objective of this project is for students to practice conditional logic using `if/else` statements.
 
##Before Class

### Prerequisites
Students should only start this project after they have completed the other lessons in the unit.

### Starter Code

See [here](http://jsbin.com/wutibe/edit?html,js,output) for code

### Solution Code

See [here](https://github.com/ScriptEdcurriculum/solutions2015/tree/master/year1/6-javascript1_2/5-project-grading) for code (private).

### Assessment

1. Students will be assessed based on their performance on this project.

##During Class

###Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Students should complete the [Do Now](do_now.md) activity.

###Opening

If I got a 74 on the last test, what is my letter grade?

What is the minumum value I must get on a test to pass?

How are you, the human, able to detect this? How can we create a program that does the same thing?

Answer: With conditionals!

###Introduction to New Material ("I Do")
You are going to create a program in which the user can type in a number grade and the program will tell them their grade. 

At this point the teacher should demonstrate a working model of the [solution code](https://github.com/ScriptEdcurriculum/solutions2015/tree/master/year1/6-javascript1_2/5-project-grading) (private repo) to the class. **Be sure to hide the URL of the solution code when displaying to class.**

##### 1. Clone the Starter Code

Open the Starter code link [here](http://jsbin.com/vucobo/edit?html,js,output).

Once you are looking at the code, go to File > Clone to create a new workspace for yourself.  
![Imgur](http://i.imgur.com/Wt5iMBpm.png)

**Clearly instruct students not to alter the starter code.**

##### 2. Pass Condition

Before telling the user the number grade that they received, lets start with simply letting them know if they passed or failed. 

In the JavaScript file, create an if/else statement that alerts a message to the user that reads:

`You got a [number > 65]. Therefore you passed!`
or
`You got a [number < 65]. Therefore you failed`

If the student is unable to create an alert box, they should be instructed to Google "javascript alert box"

![Imgur](http://i.imgur.com/lc6gBmWl.png)

##### 3. Letter Grades

After the pass condition is complete, the students must make a conditional statement that alerts the user with the letter grade they received. `A, B, C, D or F` in a string. 
 
Example: `You got a 94. Therefore you got an A!`

###Guided Practice ("We Do")
####Brainstorming
Before you start coding, identify the list of steps you need to do to finish this project. Here's a start:

1. What kind of conditional logic will you need? Write pseudo-code on paper using `if` and `else` statements.


###Independent Practice ("I Do")

It's build time! Students will work alone on this project. The teacher's role will be to walk around the room helping students with any questions they have. Students are encouraged to look at previous lessons for reference.

###Extension Activities
Students who complete the project early may attempt to improve their project by including the following:  

* Added CSS for visual customization
* Instead of alerting the user with their result, place the text below the input field.

Students who are eager for another project using conditionals are encouraged to create a [High-Low Game](http://www.funbrain.com/cgi-bin/gn.cgi?A1=s&A2=10&A3=1).


###Closing
Select students to present their work to the class.

###Check for Understanding
Teachers should keep track of student success while they are presenting to the class.


###How to Submit Project
* The students must export this project as a Gist: File > Export as Gist
* Students must submit their **Gist URL** at the project submission link found in the header of the Daily Session Document.
