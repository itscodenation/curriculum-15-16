#Lesson 4 - HTML Layout
![image](http://i.imgur.com/D2pR6x1.png)


## Before class
---
###Teacher Preperation
* Review what was covered last lesson to understand the level of skill students have with HTML. 


### Daily Objective

* Students will be able to create a page using semantic HTML5 elements. 


### Key points

* There are some special HTML elements used for organizing content (this is called layout).
* By themselves, these elements don't do much. They need CSS for styling and positioning.

### Assessment

1. Review each student’s webpage after class 

### Vocabulary

* Layout
* Header
* Footer
* Main
* Aside

###References
* <https://c9.io/>
* <http://learnlayout.com/>


## During class

### Do-now

1. Attendance: Teacher takes student attendance at www.kinvolved.com
2. Ask students to complete the following **on paper**:
  * Draw a simple layout for a webpage about yourself. This drawing should made exactly as you would see it on a desktop browser.

## Opening

"We have asked everyone to draw their website layout on a piece of paper. Now let's compare what everyone came up with." Ask some of the following questions to see how content structure and positioning compared between students.

* Is the content all in one area, or is it separated into sections?
* Does your website have a header? A footer?
* Where is the main content located?

## Introduction of new material (“I Do”)

"Layout means organizing the content on your website into different areas. Many websites use the same sections on their websites: a header, a footer, a main content area, and sometimes a sidebar. HTML has some tags that are used just for these sections."

**Header**
A Header tag `<header>` is used for the important information at the top of your website. Usually the name of your website will go here, and it will look the same on every page of your website.

**Footer**
The Footer tag `<footer>` is used for information that goes at the bottom of your website. Usually this will include information on how to contact you, and the date the website was made.

**Main**
The Main tag `<main>` is used for the main content on your website. What is your website for? What do you want people to see when they go to it? All of this should be in the main tag!

**Aside**
The Aside tag `<aside>` is used for your website's sidebar (if you have one). This might have some additional information that isn't as important as what goes in the Main tag, like fun facts or links to other sites. 

## Guided practice ("We do")

"Now that we've gone over the main HTML tags that you can use to make your webpage layout, let's try making a webpage using these tags." 

Ask students to open a new file in their IDE. They can follow along as you demo on the board.

First create a header tag and put your name or your webpage's name in it using the h1-h6 tags.
```
<header><h1>My Website</h1></header>
```

Then create a main tag and an aside tag, and add some content inside them.
```
<main>
  <p>Here is some content.</p>
</main>
<aside>
  <h3>My Favorite Hobbies</h3>
  <ul>
    <li>Coding</li>
    <li>Playing Sports</li>
    <li>More Coding</li>
  </ul>
</aside>
```

Finally create a footer tag and put the date in it.
```
<footer>© 2014</footer>
```

Now when everyone looks at their webpage, point out that even though we used these tags, they don't have any style or layout. They just appear right on top of each other. That's because we need to add some CSS/styling in order to put these sections where we want them to go, and to make them look like how we want.

## Independent Practice (“You Do”)
At this point the teacher may decide to do one of two things.

**Option A**: If students still need some more practice with nesting tags and page organization, choose option A.   

IN option A students are now tasked to add tags and manipulate the page created in the "We Do" for the rest of class. The focus should be challenging the students to use tags learned in previous lessons.


**Option B** If students are comfortable with HTML and the teacher is confident the students are ready for a challenge choose option B.  
   
In option B the teacher now introduces the students to [Project 2- Creating a Social Media Webpage](5-project). Where the student can begin work on their project by obtaining the starter code.

## Closing/ Homework
“Today we learned about layout and started planning what our webpages will look like. What is layout and why is it important? What are some HTML tags that help us create a layout?”

## Check for understanding
Students must share their site with the teacher for your review.

##Homework
Encourage students to log into their Cloud9 account at home and use w3schools to learn anything they can outside of class.
 
## After Class
* Take a quick look at each webpage project from today. Students who were not able to create the page should be asked to recreate it, with teacher’s help, next class.
* Prepare for next lesson / hand off to next volunteer in rotation.

