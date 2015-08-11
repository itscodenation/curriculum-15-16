#Lesson 1 - What is Bootstrap?

![image](http://i.imgur.com/RpE7nCs.jpg)

## Before class
The lead teacher must create a new Cloud 9 workspace cloned from a GitHub Repo called "first-bootstrap-site"

### Objective

Students will be able to use the basics of Bootstrap's CSS offerings.

### Key points

* Bootstrap is a CSS and JavaScript library.
* Bootstrap contains a collection of styles that we can apply to our own HTML elements.
* Bootstrap makes it easier to create a simple and clean looking page.

### Assessment

1. Write exit-ticket based off [assessments from current lesson](assessments/exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Library
* Bootstrap
* CDN (Content Delivery Network)

### References

* http://getbootstrap.com/css/
* http://www.bootply.com/new#
* http://www.sitepoint.com/understanding-twitter-bootstrap-3/

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about Bootstrap. This is important because bootstrap lets us create simple and clean looking web pages without spending a lot of time. It connects to what we've previously learned because we will able to use CSS classes written by others to style our pages.

What's CSS? How is it different than HTML? What's a CSS class? How about ID? When do we use one versus the other?

### Introduction of new material ("I do")

####Getting started

**Bootstrap** is a CSS and JavaScript library written by former Twitter employees. A **library** is a body of code that others have written to make our lives easier. Rather than writing our own CSS which takes time, we can use Bootstrap's styles in our HTML pages. 

Think of Bootstrap, or all coding libraries, as a reference table. Someone has already written the code or provided a formula but it is up to you to use the information properly.

For this unit, we will only look at the CSS aspects of Bootstrap.

#####Installation

We first need to bring Bootstrap into our project. We do this by bringing the CDN to a link tag in the head ``<link>`` tag in the ``<head>...</head>`` section of our page. Since I can't remember the Bootstrap CDN I am going to do a Google search for Bootstrap CDN.

![Imgur](http://i.imgur.com/MgMIGZz.png)

Our HTML code should look something like this:

```
<html>
  <head>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <title>My first bootstrap page!</title>
  </head>
  <body>
    Hello world!
  </body>
</html>
```
Note the link where the Bootstrap CSS file is located. Another website is hosting this file for us. This is convenient because we don't have to download the file and store it in our own project.

####Adding a button

Let's take a look at adding a single element to our page using bootstrap. We would like to add a button.  
To add the button we need to find the class name Bootstrap has given it. So if we navigate to the button section of getbootstrap.com/css we will notice Bootstrap has provided me with a line of code we can put in my HTML page to have a stylish button. 

Our HTML code should look something like this:

```
<html>
  <head>
  	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <button type="button" class="btn btn-default">Click me</button>
  </body>
</html>
```

The button is just one example to what bootstrap can do. There are many other things bootstrap can do that are all time-saving and have a modern look.


Click [here](http://jsbin.com/quxeg/1/) to see what this code looks like. Using the Chrome browser, right click on the button and click on "Inspect element". Look at the right side of the new screen. It should look something like:

![image](http://i.imgur.com/Aq8CQOp.jpg)

These are all the styles being applied to that button. But wait. We don't have a CSS file in our project. We haven't written any styles for our button so where are these styles coming from? These styles are coming from the browser. Every browser has its default styles. 

Let's now insert bootstrap into our code above. Consider the following code:

```
<html>
  <head>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <button type="button" class="btn btn-default">Click me</button>
  </body>
</html>
```
### Guided practice ("We do")
####Text

Bootstrap has many styles for controlling the appearance of text. Let's Explore the "Alignment Classes" Bootstrap has to offer.  You'll notice by adding a specific type of class to a piece of text you change how the text will appear on the page.  

```
<html>
  <head>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <p class="text-left">Left aligned text.</p>
	<p class="text-center">Center aligned text.</p>
	<p class="text-right">Right aligned text.</p>
  </body>
</html>
```

### Independent practice ("You do")

Make your own webpage using Bootstrap. Your Webpage will be about four colleges you would like to apply to.  
Your page must include the following:
1. A table with each of the four colleges, the college's location, tuition and desired major.
2. Below the table is a button for each school that links directly to the college's website.
3. Text that descibes what the site is about. 

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about Twitter bootstrap. This is important because Bootstrap allows us to create clean and elegant HTML without writing additional CSS>

#### Homework

There is no homework for this lesson. Point students to the project instead.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.

