#Project #1: Tiny Turtle

![image](http://i.imgur.com/dFYyMbH.png)

## Before Class
The teacher should become familiar with the Tiny Turtle library and how to create functions within it.


### Objective

Students will able to call and create functions in JavaScript.

### Key Points

* We use functions so that we do not have to rewrite code over again.
* A function is a block of code that performs a task. To use a function, you must call it. 
* A parameter is a value or variable that is passed into a function. The function uses this variable to help perform its task.

### Assessment

Students will show progress toward reaching the objective based on their ability to manipulate the Tiny Turtle about the console.

### Vocabulary

* Function
* Algorithm
* Library
* Call
* Open/close curly braces
* Parameter
* Console
* Debug
* Canvas Tag 

### Resources

* [API documentation](https://github.com/toolness/tiny-turtle#api)  
* [Tiny Turtle Tutorial](http://toolness.github.io/tiny-turtle/tutorial/)  
* [Global Objects Reference:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* [Tiny Turtle Library .js file](http://toolness.github.io/tiny-turtle/tiny-turtle.js)

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. On paper: Write step by step directions for how to walk in a square. Remember to be very specific.

### Opening

Today, we will use Javascript to create functions. Functions are used to package large amounts of code into a simple line.  

JavaScript functions are similar to the functions you us in math class in that they save time by storing a lot of information.

### Introduction to New Material ("I Do")
Tiny Turtle is a library which allows us to quickly visualize JavaScript functions. Our code will be written in a .js file, while the visualizations will appear in the console. The teacher should show a finished model of Tiny Turtle moving about the console without allowing students enough time to fully study the code.

Tiny Turtle is a **library**, so we will need to link to the file in our HTML. Let's create that script tag now.

```
<body>  
  <script src="http://toolness.github.io/tiny-turtle/tiny-turtle.js">
  </script>
</body>
```

We are also going to need to give our Tiny Turtle a stage to move around on. We are going to do this using the canvas tag.

```
<body>  
    <canvas width="300px" length="300px" style="border:1px solid">
    </canvas>
  <script src="http://toolness.github.io/tiny-turtle/tiny-turtle.js">
  </script>
</body>
```
Can someone please tell me what the purpose of the canvas tag is? Can someone else tell was the purpose of the script tag is?

### Guided Practice ("We Do")
The first line of JavaScript we need to write will tell the Tiny Turtle to move inside the canvas:

```
	TinyTurtle.apply(window); 
```

The next thing we will write is our first function which will move the Tiny Turtle 30 steps.

```
	forward(30);
```
You will now see the line in your canvas. In this line of code, the function is called forward and the parameter, or the value which is passed through the function is 30. 

Next we are going to show which direction the turtle is pointing and turn it 90 degrees. This can be done by doing the following:      
1. write a function called right with a parameter of 90  
2. write a function called stamp with no parameter (this function will show the arrow head)

```
	forward(30);
	right(90);
	
	stamp();
```
![Image](http://i.imgur.com/cvzfj9c.png)

Now that you have moved the Tiny Turtle, Let's try and make it move in a square. From here the teacher may work with the students on creating this square or the teacher may elect to allow students to solve on their own. 

### Independent Practice ("You Do")
Great! The Tiny Turtle can now move in a square but there is only one problem. This code is too long. In order to clean this code up we are going to create a **function.** 

1. On line two create the function`function square (length);{}`
2. Within the curly brackets place the code used earlier to move tiny turtle in a square.
3. After the curly brackets are closed call on the square function like so `square(40);{}`
4. Now that you have one square written, create art by using various rotations and creating functions for all sorts of shapes. you may use the [Tiny Turtle Tutorial](http://toolness.github.io/tiny-turtle/tutorial/) as a reference.

Extention: Encourage students to open the library link in a separate tab to explore the 50 line library. Students can copy and make edits to the library.

### Closing

A function stores information. In the example of the square function, how were we able to save time and confusion by using the function?

### How to Submit
Students must share their **Gist URL** at bit.ly/ScriptEdProjects

For directions on how to create a Gist, students may follow [this presentation](https://docs.google.com/presentation/d/1uBzV_Ai6KtdSYoNc4izqnihwMvqzSp8sXmX6uF5PNGY/edit?usp=sharing).

### Homework
Students are encouraged to take a close look at the Tiny Turtle Library and see if they can manipulate any part of it.


## After Class

* Prepare for next lesson / hand off to next teacher in rotation.



---
---
---
### More Information on Tiny Turtle

**TinyTurtle** is a minimalist [Turtle Graphics][] implementation using
the [Canvas element][], consisting of about 60 lines of JavaScript code.

The library is intended for use in teaching scenarios where learners
have access to a simple HTML editing environment such as [Thimble][] or
[jsbin][]. Learners should have a basic knowledge of HTML, but do
not need any JavaScript experience.

The implementation is kept as minimal as possible so that learners are
encouraged to view its source, understand it, and build upon it.

##### Basic Usage

For absolute beginners, the `TinyTurtle` constructor can be applied to
the `window` object so that learners don't need to worry about lots
of typing, dot notation, inheritance, and so forth. Here's a trivial
example of a few squares being drawn:

```html
<!DOCTYPE html>
<meta charset="utf-8">
<title>TinyTurtle Box Example</title>
<canvas width="300" height="300"></canvas>
<script src="tiny-turtle.js"></script>
<script>
// Without any arguments, TinyTurtle uses the first canvas on the page.
TinyTurtle.apply(window);

function box(length) {
  for (var i = 0; i < 4; i++) {
    forward(length);
    right(90);
  }
}

penStyle = 'purple';
box(90);
left(10);
box(80);
left(10);
box(70);
</script>
```

##### Instantiation and Chaining

The constructor can also be instantiated to allow for
multiple turtles to co-exist on a page, while also avoiding pollution
of the global namespace. Most methods also return `this` to
support chaining. Here's an equivalent replacement for the JavaScript
in the previous snippet which uses these more advanced techniques:

```javascript
var t = new TinyTurtle();

t.box = function box(length) {
  for (var i = 0; i < 4; i++) this.forward(length).right(90);
  return this;
};

t.penStyle = 'purple';
t.box(90).left(10).box(80).left(10).box(70);
```

This hopefully allows learners to start doing interesting things in an
incremental way.

##### CoffeeScript

The `TinyTurtle` class can also be extended in [CoffeeScript][], if one
wishes to teach (or learn) it as an alternative to JavaScript. For 
example:

```coffeescript
class MyTurtle extends TinyTurtle
  box: (length) ->
    for i in [1..4]
      this.forward length
      this.right 90

t = new MyTurtle

t.penStyle = 'purple'
t.box 90
t.left 10
t.box 80
t.left 10
t.box 70
```

##### API

The `TinyTurtle` constructor takes only one optional argument, which is
the [HTMLCanvasElement][] to draw on. If not present, the first canvas
element on the page is used.

### Methods

**forward(amount)**

Move the turtle forward by the given number of pixels. If the pen is
down, a line is drawn from its previous position to its new position.

The `fd` method can be used as shorthand for this.

**left(degrees)**

Rotate the turtle to its left by the given number of degrees.

The `lt` method can be used as shorthand for this.

**right(degrees)**

Rotate the turtle to its right by the given number of degrees.

The `rt` method can be used as shorthand for this.

**stamp()**

Draw the turtle as a triangle that represents its current state in the
following ways:

* The triangle is drawn at the turtle's current position.
* The triangle is pointing in the direction that the turtle is currently
  oriented towards.
* If the pen is up, the triangle is drawn as an outline; otherwise, it's
  filled.
* The color and outline of the triangle is drawn using the current pen
  style and pen width.

**penUp()**

Put the pen up, so that movements by the turtle don't draw anything on
the canvas.

**penDown()**

Put the pen down, so that movements by the turtle draw a path on the canvas.

##### Properties

**penStyle** (read/write)

A string describing the style that the turtle's path is drawn in. This
can be represented as any one of:

* A hexadecimal color like `#00FF00`
* A [RGBA][] quad like `rgba(0, 255, 0, 0.5)`
* A [HSLA][] quad like `hsla(50, 100%, 50%, 0.5)`
* A [CSS color name][] like `red`.

**penWidth** (read/write)

The width of the turtle's path, in pixels.

**canvas** (read-only)

The [HTMLCanvasElement][] the turtle is drawing on.

**rotation** (read-only)

The current rotation of the turtle, in degrees.

**position** (read-only)

The current position of the turtle, as an object with `x` and `y` 
properties.

**pen** (read-only)

The string `up` or `down` indicating the current state of the turtle's
pen.

##### Supported Browsers

This code has been tested on Internet Explorer 10,
Safari 6 (desktop and iOS), Chrome 30, Opera 17, and Firefox 24.

##### License

Public Domain [CC0 1.0 Universal][cczero].

  [Turtle Graphics]: http://en.wikipedia.org/wiki/Turtle_graphics
  [Canvas element]: http://en.wikipedia.org/wiki/Canvas_element
  [Thimble]: https://thimble.webmaker.org/
  [jsbin]: http://jsbin.com/
  [CoffeeScript]: http://coffeescript.org/
  [HTMLCanvasElement]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  [RGBA]: http://www.w3.org/TR/css3-color/#rgba-color
  [HSLA]: http://www.w3.org/TR/css3-color/#hsla-color
  [CSS color name]: http://www.w3.org/TR/css3-color/#svg-color
  [cczero]: http://creativecommons.org/publicdomain/zero/1.0/



