#Lesson 1 - Linking Pages
![image](http://i.imgur.com/lQblSYV.jpg)

## Before class

### Daily Objective

Students will be able to create a website with multiple pages using the `<a>` tag. 

### Key Points

* An `<a>` tag links multiple pages of a website together

### Assessment

1. Give the students the Do Now. (Located in slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)). 
2. Write an Exit Ticket based off [assessments from current lesson](assessments/exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the Do Now and Exit Ticket.


### Vocabulary

* `<a>` tag (or anchor tag)
* Hierarchy
* Linking


###References

* [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)
* <http://www.w3schools.com/tags/tag_a.asp>

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Place the Do Now on the board. The starter question can be found in slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)


###Opening

Discuss the answers of the Do Now with the class (slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)). 

Explain that today they will be learning about the `<a>` tag. The `<a>` tag allows us to **link** multiple pages of a website together.

Until now, all of our websites have only been one page. Also, JS Bin has been **linking** the CSS and JS files together for us. We will learn how to solve these issues over the next 2 lessons. 

### Introduction to New Material (“I Do”)
#####What is the `<a>` Tag? (slide 4)

The `<a>` tag (anchor tag)** is used with a short term `href` (stands for hyper reference) to **link** pages together for the developer.

You will notice the line of code on page 4 will create hyperlink on the webpage with the text "Go to ScriptEd."

#####Linking Local Pages (slide 5)

You will notice the page structure here invovles a folder called "pages" with three files inside of it.

![Imgur](http://i.imgur.com/gZveY6I.png)

Let's say we are on the index.html page and would like to get to page1.html. How would we do that?

![Imgur](http://i.imgur.com/sdX22sI.png)


Let's say we are on the index.html page and would like to get to page1.html. How would we do that? It would require us to use `../` to tell the computer to go back a folder.

![Imgur](http://i.imgur.com/u4wsu1S.png)
## Guided Practice (“We Do”)
#####Setting Up Your Environment (slide 6)

We are going to **link** several pages together using the `<a>` tag. To do this, we must first clone a GitHub Repo and create a new Cloud 9 workspace from it. 

To get the starter code: 

1. Fork the repo found at `bit.ly/unit1starter`
2. Use the Clone URL to create a new Cloud 9 Workspace called `link-practice'

Once your environment is open, run `git status` to make sure everything is running corectly.

## Independent Practice ("You Do")

The workspace you now have has all the pages you need, but they are not linked together. To solve this you will need to do the following:

1. On index.html, create three links: one to each of the files in the pages folder.
2. On page1.html, create three links: one to the other 2 pages in the pages folder and one to index.html
3. On page2.html, create three links: one to the other 2 pages in the pages folder and one to index.html
4. On page3.html, create three links: one to the other 2 pages in the pages folder and one to index.html

## Closing

### Check for understanding
Leave time at the end of class for students to wrap up and ask teachers any questions they may have.  

###How to Submit
Students must push their code to their GitHub repo using the following commands in the Cloud 9 Terminal:

`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`

This project does not  have to be shared with the instructors yet.


#### Exit Ticket

Give the [Exit Ticket](assessments/exit_ticket.md).


##Homework
Students who are not finished with their site by the end of class should complete it at home for homework. 

## After Class

* Review the Exit Tickets.
* Prepare for next lesson / hand off to next volunteer in rotation.


