#Lesson 1 - jQuery Selectors

![Imgur](http://i.imgur.com/KwaFtIP.png)

## Before Class

### Daily Objective

Students will be able to create, read, update, and delete HTML elements using jQuery. Additionally, they will be able to write and attach click **handlers** to an HTML element.

### Key Points

* A **selector** is used to find one or more HTML elements in your page.
* A **handler** is used to execute a body of code after an event has occured. A common kind of **handler** is a click **handler**. 
* The append means to add another 

### Assessment

1. [Do Now](assessments/do_now.md)
2. [Exit Ticket](assessments/exit_ticket.md)
3. Students will show progress toward reaching the objective based on their performance on the Exit Ticket.

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

## During Class

### Do Now

1. Attendance
2. Return reviewed Do Now and Exit Ticket from previous class.
3. [Do Now](assessments/do_now.md) 

### Opening

Today, we will learn about jQuery. jQuery is one of the most popular JavaScript libraries avaible. jQuery enables us to interact with our page in a dynamic way. It connects to what we've previously learned because we will able to access, add, remove, or change HTML and CSS. It is also a quick and easy way to see our JavaScript code appear on our webpage.


### Introduction to New Material ("I Do")

#### Installation

jQuery is a software library. It is a body of code that others have written, so that programmers could reuse it. 

Because it is a library, we need to import it into our own work before we can make use of it. jQuery is written in JavaScript and is contained in one file.  To bring jQuery into our project we link the CDN in a``<script>`` tag in the ``<head>...</head>`` section of our page. Since I can't remember the jQuery CDN, I am going to do a Google search for jQuery CDN. 

Copy the code below and paste it between the ``<head>...</head>`` tags in your HTML file: 

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

**Note:** the jQuery script tag must be above the script tag the links to your .js file or else the jQuery won't load properly.


#### Ready the document.

In order to tell your website that it is ready, start using: 

```
$( document ).ready(function() 
{
	//All of your code gets put inside this function
});
```

Do not worry about understanding this code. Just know that (1) any code that you write using jQuery must be included between the braces above and (2) the code is executed when the page loads.

#### Calling jQuery.
In jquery there is a "magical" key. That symbol is $. Think of $ as a phone number for jQuery. You call jQuery by dialing $ and jQuery answers by allowing you to use the code in its library.

#### Use selectors.

A **selector** allows you to find and manipulate HTML elements. Sound familar? It's because we've already seen them in CSS. For example:

```
#box 
{
  background-color: red;
}
```

The above CSS code instructs the browser to find all elements that have an `id` of "box" and then change their background color. 

jQuery has **selectors** too. To instruct it to find all elements that have an `id` of "main", write:

```
$("#main");
```

Suppose our HTML looks like so:

```
<html>
  <head>...</head>
  <body>
    <div id="main">
      Concrete jungles where dreams are made of...
    </div>
  </body>
</html>
```

This will show the following in the browser:

```
Concrete jungles where dreams are made of...
```


#### Edit using jQuery.

If we want to change the contents of the `<div>` above so that it contains different text, we can do so by selcting the `id`:

```
$("#main").text("There's nothing you can't do...");
```

This page will now show:

```
There's nothing you can't do...
```

We have just altered the text of our page by using jQuery **NOT** with HTML.

#### Add with append.

Suppose our HTML looks like:

```
<html>
  <head>...</head>
  <body>
    <div id="main">
      These streets will make you feel brand new.
    </div>
  </body>
</html>
```

If we want to **append** or add another `<div>` below our existing one, we can by using the ``append()`` function and a string:

```
$("body").append("<div>Big lights will inspire you.</div>");
```

Note how we wrote a string that contains HTML code. Also notice that we **appended** this new `<div>` to the `body` element. This page will now show:

```
These streets will make you feel brand new.
Big lights will inspire you.
```

#### Edit attributes.

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

### Guided Practice ("We Do")

Now, we're going to practice jQuery together. Let's open the JS Bin page found at **http://jsbin.com/qehara/edit?html,js,output**

Complete the following tasks by using jQuery only:

1. Inside the first `<div>` add the text "Law and Order: SVU."
2. Add a new `<div>` using .append with the ID "tv2". Put any tv show of your choice in that div.
3. Using `.attr`, change the text in `id` "what" to a third tv show.

Export this JS Bin as a Gist so you can reference it for later.


### Independent Practice ("You Do")

Create a new GitHub repo called jQuery-practice and clone it to a new Cloud9 workspace with the same name.

1. Create an `index.html` and `script.js` file.
2. In the body of the `index.html` file create the following:
	A. Two empty `<div>` tags with the `id` ""div1" and "div2".
	B. One  empty `img`  
3. Create the rest of the webpage below using only jQuery.  
	**Note:** You may use any image you would like.
	
![Imgur](http://i.imgur.com/VWRFZa2.png)
### Exit Ticket

Give the [Exit Ticket](assessments/exit_ticket.md).

### Closing

Today you learned about jQuery. This is important because jQuery enables us to dynamically interact with our HTML and CSS. Next, we will learn about interacting with jQuery project.

### Homework

There is no homework for today's session.

## After Class

* Review Do Now & Exit Ticket. 
* Prepare for next lesson / hand off to next volunteer in rotation.
