#Lesson 1 - jQuery Selectors

![Imgur](http://i.imgur.com/KwaFtIP.png)

## Before class

### Objective

Students will be able to create, read, update, and delete HTML elements using jQuery. Additionally, they will be able to write and attach click handlers to an HTML element.

### Key points

* A selector is used to find one or more HTML elements in your page.
* A handler is used to execute a body of code after an event has occured. A common kind of handler is a click handler. 

### Assessment

1. Write do-now based off of [assessments from previous lesson](assessments/do_now.md).
2. Write exit-ticket based off [assessments from current lesson](assessments/exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Selector
* Append
* Handler

### References

* http://www.w3schools.com/jquery/jquery_selectors.asp
* http://www.w3schools.com/jquery/jquery_events.asp
* http://www.w3schools.com/jquery/jquery_dom_get.asp
* http://www.w3schools.com/jquery/jquery_dom_set.asp
* http://www.w3schools.com/jquery/jquery_dom_add.asp
* http://www.w3schools.com/jquery/jquery_dom_remove.asp
* http://www.w3schools.com/jquery/jquery_css_classes.asp
* http://www.w3schools.com/jquery/jquery_css.asp

## During class

### Do-now

1. Attendance: Teacher takes student attendance at www.kinvolved.com
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about jQuery. jQuery is one of the most popular javascript libraries avaible. jQuery enables us to interact with our page in a dynamic way. It connects to what we've previously learned because we will able to access, add, remove, or change HTML and CSS. It is also a quick and easy way to see our JavaScript code appear on our webpage.


### Introduction of new material ("I do")

#### Getting started

##### Installation (1)

jQuery is a software library. It is a body of code that others have written so that we programmers could reuse it. 

Because it is a library, we need to import it into our own work before we can make use of it. jQuery is written in JavaScript and is contained in one file.  To bring jQuery into our project we link the CDN in a``<script>`` tag in the ``<head>...</head>`` section of our page. Since I can't remember the jQuery CDN I am going to do a Google search for jQuery CDN. 

Copy the code below and paste it between the ``<head>...</head>`` tags in your HTML file: 

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```
**Note: the jQuery script tag must be above the script tag the links to your .js file or else the jQuery won't load properly**


##### Ready the document

In order to tell your website it is ready to start using 

```
$( document ).ready(function() 
{
	//All of your code gets put inside this function
});
```

Do not worry about understanding this code. Just know that (1) any code that you write using jQuery must be included between the braces above and (2) the code is executed when the page loads.

#### Calling jQuery
In jquery there is a "magical" that is key. that symbol is $. Think of $ as a phone number for jQuery. You call jQuery by dialing $ and jQuery answers by allowing you to use the code in its library.

#### Selectors

A **selector** allows you to find and manipulate HTML elements. Sound familar? It's because we've already seen them in CSS. For example:

```
#box 
{
  background-color: red;
}
```

The above CSS code instructs the browser to find all elements that have an ID of "box" and then change their background color. 

jQuery has selectors too. To instruct it to find all elements that have an ID of "main", write:

```
$("#main");
```

Suppose our HTML looks like so:

```
<html>
  <head>...</head>
  <body>
    <div id="main">
      Pikachu I choose you!
    </div>
  </body>
</html>
```

This will show the following in the browser:

```
Pikachu I choose you!
```


##### Edit using jQuery

If we want to change the contents of the `div` above so that it contains different text, we can do so by selcting the ID:

```
$("#main").text("Bulbasaur I choose you!");
```

This page will now show:

```
Bulbasaur I choose you!
```

We have just altered the text of our page by using jQuery **NOT** with HTML.

##### add with append

Suppose our HTML looks like:

```
<html>
  <head>...</head>
  <body>
    <div id="main">
      Pikachu I choose you!
    </div>
  </body>
</html>
```

If we want to **append** or add another `div` below our existing one, we can by using the ``append()`` function and a string:

```
$("body").append("<div>Gotta catch em all!</div>");
```

Note how we wrote a string that contains HTML code. Also notice that we appended this new `div` to the `body` element. This page will now show:

```
Pikachu I choose you!
Gotta catch em all!
```

##### Edit attribute

Suppose our HTML looks like:

```
<html>
  <head>...</head>
  <body>
    <img src="http://i.imgur.com/iWFGbVq.jpg" title="Hosted by imgur.com" />
  </body>
</html>
```

In the browser, this page looks like:

![image](http://i.imgur.com/iWFGbVq.jpg)

Suppose we want to change the image. We could delete the `img` tag and make a new one with the right `src` URL. But we don't want to delete anything. Instead, we can edit the `src` attribute by using the ``attr()`` function:

```
$("img").attr("src", "http://i.imgur.com/fkKkNX5.png")
```

Note that this function takes two parameters: the name of the attribute you wish to change the value you want to set the attribute to.

In the browser, the page now looks like:

![image](http://i.imgur.com/fkKkNX5.png)

### Guided practice ("We do")

Now we're going to practice jQuery together. Let's open the JS Bin page found at **http://jsbin.com/qehara/edit?html,js,output**

Complete the following tasks by using jQuery only:

1. Inside the first div add the text "Game of Thrones"
2. Add a new div using .append with the ID "tv2". Put any tv show of your choice in that div.
3. using .attr change the text in ID "what" to a third tv show.

Export this JS Bin as a Gist so you can reference it for later.


### Independent practice ("You do")

Create a new GitHub repo called jQuery-practice and clone it to a new Cloud9 workspace with the same name.

1. Create an index.html and script.js file
2. In the body of the index.html file Create two new empty div's with the IDs "div1" and "div2". 
2. Create the rest of the webpage below using only jquery.  
	Note: You may use any image you would like.
	
![Imgur](http://i.imgur.com/VWhVeyz.png)
#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about jQuery. This is important because jQuery enables us to dynamically interact with our HTML and CSS. Next, we will learn about interacting with jQuery project.

#### Homework

There is no homework for today's session.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
