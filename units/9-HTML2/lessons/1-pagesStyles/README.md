#Lesson 1 - Linking pages
![image](http://i.imgur.com/lQblSYV.jpg)

## Before class

### Objective

Students will be able to create a website with multiple pages using the a tag. 

### Key points

* Page hierarchy and organization
* linking a stylesheet to your site allows for easy style changes


### Assessment

1. Do-now activity. Located in slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing) 
2. Write exit-ticket based off [assessments from current lesson](assessments/exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the do now and exit-ticket quiz.


### Vocabulary

* A tag
* Hierarchy
* Linking


###References

* [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)
* <http://www.w3schools.com/tags/tag_a.asp>

## During class

### Do-now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Place the do now on the board. The starter question can be found in slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)


## Opening

Discuss the answers of the Do now with the class (slide 2 of the [Presentation Slides](https://docs.google.com/presentation/d/1UrFnBtRbk9eC1E2MLhRjkpvi4-4tREXmK3v2ps_kVqc/edit?usp=sharing)). 

Explain to the students that today they will be learning about the A tag. The A tag allows us to link multiple pages of a website together.

Until now all of our websites have only been one page. Also JS Bin has been linking the CSS and JS files together for us. We will learn how to solve these issues over the next 2 lessons. 

## Introduction of new material (“I Do”)
#####What is the A tag? (slide 4)

The A tag (anchor tag) is used with a short term `href` (stands for hyper reference) to link pages together for the developer.

You will notice the line of code on page 4 will create hyperlink on the webpage with the text "Go to ScriptEd".

#####Linking local pages (slide 5)

You will notice the page structure here invovles a folder called "pages" with three files inside of it.

![Imgur](http://i.imgur.com/JaYctqz.png)

Lets say we are on the index.html page and would like to get to page1.html. How would we do that?

![Imgur](http://i.imgur.com/sdX22sI.png)


Lets say we are on the index.html page and would like to get to page1.html. How would we do that? It would require us to use `../` to tell the computer to go back a folder.

![Imgur](http://i.imgur.com/u4wsu1S.png)
## Guided Practice (“We Do”)
**slide 6**
We are going to link several pages together using the A tag. to do this we must first clone a GitHub Repo and create a new Cloud 9 workspace from it. 

To get starter: 

1. Fork the repo found at `bit.ly/unit1starter`
2. Use the Clone URL to create a new Cloud 9 Workspace called `link-practice'

Pnce your environment is open run `git status` to make sure everything is running corectly.

## Independent practice ("You do")

The workspace you now have has all the pages you need but they are not linked together. To solve this you will need to do the following:

1. On index.html create three links. One to each of the files in the pages folder.
2. On page1.html create three links. One to the other 2 pages in the pages folder and one to index.html
3. On page2.html create three links. One to the other 2 pages in the pages folder and one to index.html
4. On page3.html create three links. One to the other 2 pages in the pages folder and one to index.html


#### Exit ticket

Give exit-ticket quiz.

# Closing

## Check for understanding
Leave time at the end of class for students to wrap up and ask teachers any questions they may have.  


##How to Submit
Students must push their code to their GitHub repo using the following commands in the Cloud 9 Terminal:

`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`


##Homework
Students who are not complete with their site by the end of class should complete it at home for homework. 

## After Class

*  Prepare for next lesson / hand off to next volunteer in rotation.


