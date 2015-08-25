#Lesson 2 - Style and Script Pages

![Imgur](http://i.imgur.com/EwUGnTi.png)

## Before Class
The lead teacher should have a version of the GitHub repo found [here](https://github.com/ScriptEdcurriculum/unit9lesson1_startercode) in a Cloud 9 workspace.

### Daily Objective

Students will be able to link style and script sheets to their website.

### Key Points

* Linking a **style sheet** to your site allows for easy style changes across several sheets
* A script.js file will allow you to add interaction on your site.

### Assessment

1. Complete the Do Now activity, located in slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1Gmr5jvEr1HL0Nh4zy1JYdh244xz2W8o2c5uii_NATcI/edit?usp=sharing) 
2. Write an Exit Ticket based off [assessments from current lesson](exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the Exit Ticket.

### Vocabulary

* Style sheet
* Script sheet

### References


* [Presentation Slides](https://docs.google.com/presentation/d/1Gmr5jvEr1HL0Nh4zy1JYdh244xz2W8o2c5uii_NATcI/edit?usp=sharing) 
* http://www.w3schools.com/tags/att_script_src.asp
* http://www.w3schools.com/css/css_howto.asp

## During Class

### Do Now

1. Attendance
2. Return the reviewed Do Now and Exit Ticket from previous class.
3. Do Now (slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1Gmr5jvEr1HL0Nh4zy1JYdh244xz2W8o2c5uii_NATcI/edit?usp=sharing)) 

### Opening

Yesterday, you learned how to link several pages within your website. But what about adding CSS and JavaScript? JS Bin used to do this for you but that's not how professionals do it. Professionals link  pages using link and script tags.

### Introduction to New Material ("I Do")

#####External Style Sheet (slide 3)
 With an external **style sheet**, you can change the look of an entire website by changing just one file!

Each page must include a reference to the external **style sheet** file inside the <link> element. The <link> element goes inside the head section.

In this line of code, we are telling the page that we are linking a CSS **style sheet** and then we provide a relative link to the page.

![Imgur](http://i.imgur.com/2bKdRK9.png)

By using this link on all HTML pages you can make style changes to all pages at once.

#####External JavaScript Sheet (slide 4)
With an external **style sheet**, you can change the look of an entire website by changing just one file!
 
![Imgur](http://i.imgur.com/NOHkRXj.png) 


### Guided Practice ("We Do")

Now we're going to add the CSS and JS links together.

Students and teacher should add the links covered in the "I Do" section together in the Cloud 9 project. 

### Independent Practice ("You Do")

Students will complete the following during the remainder of class:

1. Create a link to the style.css and script.js file on each HTML page.
2. Add at least three CSS styles to each page.
3. Add a JavaScript Button that displays an alert box on each page. If you are having an issue with this, try googling the answer.

### Exit Ticket

Give the Exit Ticket.

### Closing

Today, you learned how to link external sheets. This is important, especially when we will be linking external libraries using the same technique.

###How to Submit
Students must push their code to their GitHub repo using the following commands in the Cloud 9 Terminal:

`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`

This project does not have to be share with the instructors yet.

#### Homework

There is no homework for this lesson.

## After class

* Check the Do Now & Exit Ticket. Record in the class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
