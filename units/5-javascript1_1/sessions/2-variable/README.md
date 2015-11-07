#Lesson 2 - Variables

![image](http://i.imgur.com/xwrZiJd.jpg)

## Before Class

### Objective

Students will able to create variables, assign values to them, and use them in
expressions.

### Key Points

* Variables allow us to remember a **value** by giving it a name.
* Variables have a name and a value.
* The name of a variable, *without quotes*, is an **expression** whose
  **value** is the value of the variable.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket quiz.

### Vocabulary

* Variable
* Declare
* Assign
* Increment / Decrement

### References

* [Homework](homework/), Should be printed out before class
* Other Resources: http://www.mathsisfun.com/operation-order-pemdas.html, http://www.w3schools.com/js/js_variables.asp, http://www.w3schools.com/js/js_datatypes.asp, http://www.w3schools.com/js/js_functions.asp, http://www.w3schools.com/js/js_comments.asp

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Do a recall activity to remind students about what variables are and how they are used.

### Opening

Cold call a student volunteer. Tell the volunteer, “I need you to help me
remember something. The password is ‘wombat’”.

After pausing for a moment, ask the student, “what is the password?”. The
baffled student should reply, “wombat”.

Thank the student, then tell them, “the secret code is 2468”. Again, after a
pause, ask them to recite the secret code. Thank them for answering correctly.

Then ask again for the password, and again for the secret code. Point out that
you gave the volunteer two different pieces of information, and you’re able to
recall the right one by invoking the *name* you gave to that information:
“password” or “secret code”.

We can do this when we’re programming, too. In JavaScript, we can create
*variables* to remember a piece of information, which we can later refer to by
name.

### Introduction to New Material ("I Do")

#### Declaring and assigning variables

Tell the students you’re going to tell them how to create a new variable in
JavaScript, and to get ready to take notes. Then, on the board, write a
variable declaration, one step at a time:

* **The `var` keyword**: Explain that, any time we are *creating* a new
  variable, we start by writing the word `var`. This is a special word that
  JavaScript knows means we want to create a new variable.
* **The name of the variable**: Write down “password” to tie the lesson back
  in to the intro. Explain that every variable has a name, and we can use that
  name to retrieve the piece of information that the variable is remembering
  for us.
* **The `=` sign**: Explain that, after the variable name, we always write an
  equals sign.
* **The value of the variable**: Explain that, after the equals sign, we can
  write *any expression*. The value of that expression will become the value
  remembered by the variable.

Take a moment to give some definitions:

* A **variable** is a name given to a value, so that it can be stored for
  later use.
* To **declare** a variable is to make a new variable.
* We **assign** a value to a variable.

Go back to your example and point out that we are both **declaring** the
variable and **assigning** it a value, all at the same time. Emphasize that we
only have to **declare** the variable once, but we can **assign** it different
values at different times.

Write an example where we assign a different value to the variable; point out
that this time, we don’t use the `var` keyword.

#### Using a variable

Write a value-expression T-Chart on the board, like the one from the previous
lesson.

In the left column, write `password`, without quotes. Ask a student to guess what the right value is.

Explain that once we declare a variable, the name of that variable *is an
expression* that produces the value stored in the variable.

Write a few more complex expressions that use the `password` variable, e.g.
`password + "!"`, `password + password`, etc. Have the students help you fill
in the values.

### Guided Practice ("We Do")

This takes the same form as the We Do from the previous lesson, with the
instructor leading the students in typing expressions into the JSBin console,
observing the value they produce, and then writing down each one in a T-chart.

* `var artist = "Drake"`
  Point out that the JSBin console prints `undefined`, which just means “no
  value here”. Compare that to the beginning of class when you asked the
  student to remember the password; the student had no particular *answer* to
  that request; they simply did as you asked.
  Prompt the students for the **name** of the variable and the **value** of the
  variable.
* `var age = 27`
  Ask the students for the name and value of this variable. As a refresher, ask
  what **type** the value has.
* `artist`
  Emphasize that the name of the `artist` variable **is an expression**. Point
  out that it produces the value that we assigned to the `artist` variable.
* `age`
  Emphasize that each variable remembers the value we assigned it.
* `"age"`
  Ask the students why this produced a different value. If necessary, reinforce
  the effect of quotation marks and the difference between string literals and
  variable names.
* `"Hotline Bling is a song by " + artist`
  Reinforce that you can use a variable name as part of a larger expression.
* `age + 2`
* `age`
  Point out that even though we typed `age + 2` in the previous step, we
  haven’t changed the value of the `age` variable. It’s still 27.
* `age = 40`
  Emphasize that there is no `var` here! Since we’re assigning a *new* value to
  an *old* variable, we don’t write `var`.
* `age`
  Point out that the expression `age` produces the *last* value that we
  assigned to that variable. The previous value, 27, has now been forgotten.
* `var currentYear = 2015`
  Point out that variable names can’t contain spaces, so when we want to make a
  variable whose name is more than one word, we capitalize all the words but
  the first one. Write a couple of other examples on the board.
* `currentYear - age`
  Point out that we are now using two different variables in one expression
* `age = age + 1`
  Emphasize that, after the equals sign, we can write *any expression we want*.
  We can even write an expression that includes the name of the variable we’re
  assigning a new value to!
* `age`
  Point out that, since we have now **assigned** a new value to `age`, that
  value has replaced the previous value.

### Independent Practice ("You Do")

* Write an expression that produces **half the value of age**.
* Write a statement that assigns `age` a value **one less** than it was before.
  * There are actually three ways to do this in JavaScript. Can you use Google
    to figure out all three?

### Exit Ticket

Give [exit-ticket quiz](assessments/1/question.md).


#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/5-javascript/lessons/2-function/homework/solution_code)

Remind students when homework is due and how it will be collected.


### Closing

Today you learned about variables in JavaScript and JavaScript itself. This is important because JavaScript is a programming language that we will eventually use to interact with HTML & CSS. Variables are important because they let us store values that we can manipulate later on. Next lesson, we will learn about functions.


## After Class

* Review student exit tickets.
* Prepare for next lesson / hand off to next volunteer in rotation.
