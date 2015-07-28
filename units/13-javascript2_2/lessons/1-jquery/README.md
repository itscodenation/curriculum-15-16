#Lesson 1 - jQuery

![image](http://i.imgur.com/UNTTbXt.jpg)

## Before class

### Objective

Students will be able to create, read, update, and delete HTML elements using jQuery. Additionally, they will be able to write and attach click handlers to an HTML element.

### Key points

* A selector is used to find one or more HTML elements in your page.
* A handler is used to execute a body of code after an event has occured. A common kind of handler is a click handler. 

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../9-hash/lessons/1-hash/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

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

Today we will learn about jQuery. This is important because jQuery enables us to interact with our page in a dynamic way. It connects to what we've previously learned because we will able to access, add, remove, or change HTML and CSS. 

Let's review HTML & CSS first. What is HTML used for? What's a tag? Give me an example of some. What's an attribute? Give me an example. Let's review CSS now. What is it used for? Give me example of some CSS properties.

### Introduction of new material ("I do")

#### Getting started

##### Installation (1)

jQuery is a software library. It is a body of code that others have written so that we programmers could reuse it. 

Because it is a library, we need to import it into our own work before we can make use of it. jQuery is written in JavaScript and is contained in one file. To bring it into our own project, we have to use the same tag we would use when we want to bring in our own JavaScript file: the ``link`` tag.  

Copy the code below and paste it between the ``<head>...</head>`` tags in your HTML file: 

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

##### Installation (2)

To use jQuery, you must write JavaScript. Typically this JavaScript is stored in its own file. Suppose this file is called ``project.js``. We first create this file and then link it in our HTML page using the ``<script>`` tag. **This latter tag must be included after the jQuery ``<script>`` tag**. 

Thus, after the inclusion of both files, the ``<head>..</head>`` section of your page would have:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="project.js"></script>
```

The ``project.js`` inclusion must be done after the jQuery inclusion because the browser loads scripts in order. Because ``project.js`` makes use of jQuery, it must be loaded after it.

##### Starter template

Copy the code below and paste it into your own JavaScript file (``project.js`` if you are continuing from above):

```
$( document ).ready(function() 
{

});
```

Do not worry about understanding this code. Just know that (1) any code that you write using jQuery must be included between the braces above and (2) the code is executed when the page loads.

#### Selectors

A **selector** allows you to find and manipulate HTML elements. Sound familar? It's because we've already seen them in CSS. For example:

```
#box 
{
  background-color: red;
}
```

The above CSS code instructs the browser to find all elements that have an ID of "box" and then change their background color. 

jQuery has selectors too. To instruct it to find all elements that have an ID of "box", write:

```
$("#box");
```

Notice the syntax: a dollar sign followed by parentheses. Inside the parentheses is a string which contains the identifier. Remember that a pound sign (`#`) represents an ID and a period (`.`) represents a class.

Note that the above code doesn't do anything after it has selected all the found items. Let's look at a more interesting case.

##### Read `div`  

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

If we want to read the contents of the `div` with an ID `main` and then print it out to the console, we can call the `text()` function on the `div` element like so:

```
console.log($("#box").text());
```

##### Edit `div`

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

If we want to change the contents of the `div` above so that it contains different text, we can do so:

```
$("#box").text("Bulbasaur I choose you!");
```

This page will now show:

```
Bulbasaur I choose you!
```

##### Create `div`

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

##### Remove `div`

Suppose our HTML looks like:

```
<html>
  <head>...</head>
  <body>
    <div id="main">
      Pikachu I choose you!
    </div>
    <div id="other">
      Jigglypuff
    </div>
  </body>
</html>
```

If we want to remove the first `div` with an ID of `main`, we can use the ``remove()`` function:

```
$("#main").remove();
```

This page will now show:

```
Jigglypuff
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

Suppose we want to change the image. We could delete the `img` tag and make a new one with the right `src` URL. But we're lazy programmers so we try to do things that take the least amount of effort. Instead, we can edit the `src` attribute by using the ``attr()`` function:

```
$("img").attr("src", "http://i.imgur.com/fkKkNX5.png")
```

Note that this function takes two parameters: the name of the attribute you wish to change the value you want to set the attribute to.

In the browser, the page now looks like:

![image](http://i.imgur.com/fkKkNX5.png)

##### Edit CSS

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

If we want to change the background color of our div, we can use the ``css()`` function:

```
$("#main").css("background-color", "yellow");
```

Just like the ``attr()`` function above, the ``css()`` function takes two parameters: the property you wish to add (or change) and the value you want to set it to. The above code will change the background color of the `div` to yellow.

#### Handlers

A **handler** is a piece of code that runs after an event has occured. Example of events include a key press on a keyboard and the scroll on a mouse. 

##### Click handler

A common kind of handler is a mouse click handler which runs after the mouse has been clicked over a certain element. Let's suppose we had HTML code like so:

```
<html>
  <head>...</head>
  <body>
    <button class=".btn">Team rocket</button>
  </body>
</html>
```
Clicking on the button will not do anything. Let's add a click handler to change that:

```
$(".btn").click(function()
{
  alert("Prepare for trouble. Make it double.");
});
```

Clicking on the button will now trigger a pop-up window (or alert) with the following text: "Prepare for trouble. Make it double."

### Guided practice ("We do")

Now we're going to practice jQuery together. Suppose we have an HTML file with the following code:

```
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```
Suppose we do not have any other files.

1. How do I include jQuery into our project?
2. Let's create an empty JavaScript file. How do I include it in my HTML file?
3. What starter code do I put in the empty JavaScript file so that I can use jQuery?
4. How do I create two new empty ``div``'s with a class of "pokemon" and IDs of "first" and "second" respectively?
5. How do I put the text "Garchomp" in the first ``div`` and "Mew" in the second? 
6. How do I print the text in each ``div`` to the console?
7. How do I italicize the text in both ``div``'s using only one line?
8. How do I add borders to both ``div``'s?
9. How do I swap the IDs of the `div`'s?
10. How do I attach a click handler to both ``div``'s so that clicking on one prints out the text of the clicked ``div`` to the console?

### Independent practice ("You do")

Suppose we have an HTML file with the following code:

```
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```
Suppose we do not have any other files.

1. Include jQuery into our project.
2. Create an empty JavaScript file. Include it in your HTML file.
3. What starter code do you put in the empty JavaScript file so that you can use jQuery?
4. Create two new empty ``div``'s with a class of "animal" and IDs of "shark" and "turtle" respectively.
5. Put the text "Great white" in the first ``div`` and "Box turtle" in the second.
6. Print the text in each ``div`` to the console.
7. Bold the text in both ``div``'s using only one line.
8. Add dotted borders to both `div`'s.
9. Swap the IDs of the `div`'s.
10. Attach a click handler to both ``div``'s so that clicking on one prints out the text of the clicked ``div`` to the console.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about jQuery. This is important because jQuery enables us to dynamically interact with our HTML and CSS. Next, we will do a jQuery project.

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/10-jquery/lessons/1-jquery/homework/solution_code)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
