#Lesson 2 - Functions

![image](http://i.imgur.com/hd7SiOs.jpg)

## Before Class

### Daily Objective

Students will able to call and create functions in JavaScript.

### Key Points

* A function is a block of code that performs a task. To use a function, you must call it. 
* A parameter is a value or variable that is passed into a function. The function uses this variable to help perform its task.
* We use functions so that we do not have to rewrite code over again.
* Other programmers write functions for us to make our lives easier. These functions together form a library.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Function
* Call
* Body
* Open/close parentheses
* Open/close curly braces
* Parameter
* Prompt
* Input
* Output
* Console
* Debug
* Scope
* Library

### References

* [Variable Slides](https://docs.google.com/presentation/d/1CAMz_T9qWWL6GSNx70ZtxwLm-AAN0sBgPaQMDtJ3ZD0/edit#slide=id.g11014a258_073)
* Other Resources: http://www.w3schools.com/js/js_functions.asp, https://developer.chrome.com/devtools/docs/console, http://www.w3schools.com/jsref/jsref_obj_math.asp

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Return exit tickets from previous class.
3. Recap learning regarding variables from previous lesson.

### Opening

Today we will learn about functions in JavaScript. This is important because functions let us package code into blocks that we can reuse. It connects to what we've previously learned because we can take the code we've written before and package it into functions. This will prevent us from writing the same code over and over again. We've also been using a handful functions already and this lesson will explain how and why we've been doing that.

What's a function in math? Why do we use them? 

What's a washing machine? Why do we use one? Couldn't we just wash our clothes manually everytime they got dirty? What do we have to give to a washing machine in order for it to performs its task? What do we get when it is done?

### Introduction to New Material ("I Do")

Use the Google slides (see references above) to introduce the following material:

#####Call an Existing Function & Alert

A **function** is a block of code that performs a task. To use a function, you must **call** it. Let's call the `alert` function:

```
alert("Squirrel!");
```

Here, the name of the function is "alert". Notice the **open** and **closed parentheses**; every call to a function must have both. In this case, we also specified a **parameter** to the function: the string "Squirrel!". A parameter is a variable or value that is passed to a function to help perform its job. The `alert` function takes the parameter and displays a pop-up box with the contents of what was passed to it. We can also call this parameter the **input** to the function because it is going *in* to the function. The pop-up box is the **output** to the function because it is the result of it.

The `alert` function was written by someone else. We don't know how it works and we don't need to. This makes our life easier because everytime we want to make a pop-up box with text in it, we don't have to recreate the wheel. Someone else did the hard work for us. 

#####Prompt

The **`prompt`** function lets us (1) ask the user a question and (2) store the answer to the question in a variable. Let's look at an example:

```
var name = prompt("What is your name?");
alert(name);
```

Here, the user is asked for their name in the form of a pop-up box. Then, that name is printed in another pop-up box. This is also a function that someone else wrote for us.

#####Console

A **console** is a tool that lets you investigate or **debug** your code. We can use the `log` function to print statements to the console:

```
console.log("Wingardium leviosa!");
```

Here, the function's name is `log`. The parameter is a string `Wingardium leviosa!`. And the output is the text printed in the console window. We can also print variables too:

```
var dozen = 6+6;
console.log(dozen);
```

Here, the input to the function is a variable. The variable has a number type. This will print out `12` to the console.

#####Random Number

JavaScript comes with a library of math related functions. One important one is the `random()` function. It enables us to generate a random number. 

Anytime we use a function that someone else wrote, it's important to look at the documentation for it so we can understand the inputs and outputs. See [here](http://www.w3schools.com/jsref/jsref_random.asp) for details about the `random()` function.

To generate a random number between 0 and 1, we:

```
var randomNumber = Math.random();
console.log(randomNumber);
```

Suppose we wanted to simulate a game die. This means we have to generate a random number between 1 and 6:

```
var randomDecimalBetweenZeroOne = Math.random();
var randomDecimalBetweenZeroFive = randomDecimalBetweenZeroOne * 6;
var randomDecimalBetweenOneSix = randomDecimalBetweenZeroFive + 1;
var randomIntegerBetweenOneSix = Math.floor(randomDecimalBetweenOneSix);
console.log(randomIntegerBetweenOneSix);
```

Let's break this down line-by-line.

1. On line 1, we call the `random()` function and do not pass in any parameters. It gives us a decimal number between 0 and 1. 
2. On line 2, we then take this number and multiply it by 6. This gives us a decimal number between 0 and 5.
3. One line 3, we take this number and add 1 to it. The resulting decimal number is now between 1 and 6.
4. One line 4, we take this number and run the `floor()` function on it. This turns it into an integer.

To save code, we can actually represent those five lines in one:

```
console.log(Math.floor((Math.random() * 6) + 1));
```

#####Create A Function

We know how to call functions that other people wrote. Now we will learn how to write our own functions.Let's look at a simple one:

#####Without Parameters

```
function sayHi()
{
  return "Hello!";
}
```

This function has a name `sayHi`. It does not take in any parameters because there is nothing between the parentheses. Note the **open curly brace** `{` and the **closed curly brace** `}`. Everything between those two braces form the **body** of the function. The body is where the code for the function resides. The `return` statement specifies what the function will output. To run the function, we must call it like any other function:

```
console.log(sayHi());
```

Here, we would see `"Hello!"` print in the console. 

#####With Parameters

Let's look at a function with a parameter:

```
function incrementByOne(number)
{
  return number+1;
}

```

This function takes in one parameter. It then adds 1 to the number and returns the sum. So if we called:

```
console.log(incrementByOne(10));
```

We would see `11` printed out to the console.

#####Scope

**Scope** refers to where a variable is usable. Let's look at three different scenarios.

#####Global Scope

```
var x = "Avada Kadavra";

function castSpell()
{
  console.log(x);
}
```

Here, the `x` variable is in the global scope. Therefore, a call to the `castSpell` function will print `Avada Kadavra` to the console.

#####Local Scope (1)

```
var x = "Avada Kadavra";

function castSpell()
{
  var x = "Expecto Patronum";
  console.log(x);
}
```

Here, the `x` variable on line 5 is in the local scope. Therefore, a call to the `castSpell` function will print `Expecto Patronum` to the console.

#####Local Scope (2)

```
var x = "Avada Kadavra";

function castSpell(x)
{
  console.log(x);
}

castSpell("Expelliarmus");
```

Here, the `x` variable on line 3 is a parameter and thus, in the local scope. Therefore, a call to the `castSpell` function will print `Expelliarmus` to the console.

### Guided Practice ("We Do")

I want to write a function that converts meters to feet.

1. Let's think out loud before we start typing. What are the inputs and outputs to the function?
2. What's the formula to convert a meter to a foot?
3. What's an appropriate name for our function?
4. We've completed the prep work. Let's write the function together.

### Independent Practice ("You Do")

Write a function that simulates the rolling of a 9 sided die.

1. Think out loud before you start typing. What are the inputs and outputs to the function?
2. What's the formula to get a random number between 1 and 9?
3. What's an appropriate name for your function?
4. You've completed the prep work. Write the function in JavaScript. Call it a couple times to ensure it works correctly.

### Exit Ticket

Give [exit-ticket quiz](assessments/2/question.md).

### Closing

Today you learned about how to call and create functions in JavaScript. This is important because functions let us package code that we can reuse over and over again. Others have written functions that we can use in our programs. We can also create functions to reuse in our own programs. Next, we will learn about pseudo-code and code commenting.


## After Class

* Review student exit tickets. 
* Prepare for next lesson / hand off to next volunteer in rotation.
