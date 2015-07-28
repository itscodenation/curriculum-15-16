#Lesson 3 - Pseudo-code & comments

![image](http://i.imgur.com/p3Lk9UX.jpg)

## Before class

### Objective

Students will able to transform pseudo-code into actual JavaScript code. They will be able to appropriately comment their code.

### Key points

* When we're given a programming task, we first think about it in our heads and with paper and pencil. Only when this is complete can we move to the keyboard.
* Pseudo-code is like an outline for an essay; it communicates the gist of what you're going to write without specifying all the details.
* Comments are a way for programmers to document their code so that others can understand it.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../lessons/2-function/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Pseudo-code
* Algorithm
* Code comments
* Code conventions
* Camel case

### References

* http://www.w3schools.com/js/js_comments.asp
* http://en.wikipedia.org/wiki/Algorithm
* http://en.wikipedia.org/wiki/Pseudo_code
* http://javascript.crockford.com/code.html

## During class

### Do-now

1. Attendance: Teacher takes student attendance at www.kinvolved.com
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about how to approach a programming problem. We will also learn how to document our code so that others can understand it. The former is important because programming problems can be very complex. Having a certain approach can help break down the complexity. The latter is important because you will eventually be programming alongside others. They will need to be able to understand your code and vice versa.

Why should we think about something before we actually do it? When do we practice this procedure? How does it help in each case?

What's an architect? What do they do? What document do they use to capture their design? Why do they make this document?

### Introduction of new material ("I do")

####Design

When you're given a programming task, do not go to the keyboard. In fact, take a step away from the computer. Sit down at a desk and think about the task in your head. Here are some questions you should ask yourself:

1. What are the inputs and outputs to the program? 
2. Is there an **algorithm** or step-by-step procedure of calculations for your program? Are there any formulas involved?
3. What's the pseudo-code for the program?

Let's talk more about (3) in the next section.

#####Pseudo-code

Pseudo-code is a rough representation of what your code will look like. It is not runnable JavaScript code. It is written in plain english. 

Think about what you do before you write an essay. You brainstorm. You create an outline. You might create other diagrams to help you understand both the topic you're going to write about as well as the structure you plan to put your writing into. Similarly, programmers write pseudo-code before they write their actual code.

#####Example

Suppose you were given the task to write a program that converts human years to dog years. Let's go through each of the three questions above:

1. Inputs & outputs: the program will probably take in a number that represents human years and spit out a number that represents dog years.
2. Algorithm: is there a formula we can use? A quick google search returns [this](http://www.onlineconversion.com/dogyears.htm) page. The formula is: 10.5 dog years per human year for the first 2 years, then 4 dog years per human year for each year after.
3. Pseudo-code: let's take (1) & (2) and write, in basic english, what we expect our program to do.

```
create a variable called x
create a variable called y

ask user for the age of their dog in human years, store it in a variable x

if x is less than or equal to 2 then
  store x*10.5 in y
else if it's not less than or equal to 2 then
  store x*4 in y
  
print out y
```

Note the use of plain-english; there is no JavaScript above. This pseudo-code gives us a chance to focus just on the logic of the problem. We do not have to worry about syntax errors, bad input/output, or any program language specific problems. Let's now convert the above into real JavaScript code:

```
var dogAgeInHumansYears = 0;
var dogAgeInDogYears = 0;

dogAgeInHumansYears = prompt("How old is your dog in human years?");

if (dogAgeInHumansYears <= 2)
  dogAgeInDogYears = x*10.5;
  
else
  dogAgeInDogYears = dogAgeInHumansYears*4;
  
console.log(dogAgeInDogYears);
```

This is code we can run and use. Note the similarities and differences between it and the pseudo-code. Also note the use of the `if` and `else` statements. We will explore them in more detail later but for now, know that they can be used to test a condition.

####Documentation

Programmers do not typically work by themselves. They work in teams. They collaborate with others by dividing up a task. In this environment, it's very important for each programmer to communicate what their code does to the rest of the group. There are many ways this is done but we will just look at code conventions and code comments.

#####Code convention

A code convention is a agreed upon rule that programmers follow when writing their code. Code conventions specify the style your code should adopt. They do not impact the logic your code performs. 

Let's take the previous code involving dog years and analyze it.

```
var dogAgeInHumansYears = 0;
var dogAgeInDogYears = 0;

dogAgeInHumansYears = prompt("How old is your dog in human years?");

if (dogAgeInHumansYears <= 2)
  dogAgeInDogYears = x*10.5;
  
else
  dogAgeInDogYears = dogAgeInHumansYears*4;
  
console.log(dogAgeInDogYears);
```

Notice that the variable names all start with a lower case letter. Then each word following the first has an upper-case. This is called **camel case**. It is an example of a code convention. 

There are many more code conventions. See the references section for a complete guide.

#####Code comments

Code comments enable a programmer to put text alongside their code. This text is ignored by the computer. It is only meant for humans to read.

As an example, let's comment the dog years code:


```
var dogAgeInHumansYears = 0; // This variable stores the dog's age in human years
var dogAgeInDogYears = 0;    // This variable stores the dog's age in dog years

dogAgeInHumansYears = prompt("How old is your dog in human years?");

// If the dog's age in human years is less than or equal to 2, multiply it by 10.5. Else, multiply it by 4.
// Formula taken from http://www.onlineconversion.com/dogyears.htm
if (dogAgeInHumansYears <= 2)
  dogAgeInDogYears = x*10.5;
  
else
  dogAgeInDogYears = dogAgeInHumansYears*4;
  
console.log(dogAgeInDogYears); // Print out the dog's age in dog years
```

Notice that each comment starts with `//`. This signals to the computer that it is a comment.

### Guided practice ("We do")

Let's write a function that calculates the area of a circle given a radius.

1. Let's think out loud before we start typing. What are the inputs and outputs to the function?
2. What's the formula to calculate the area of a circle?
3. What's the pseudo-code look like?
4. We've completed the prep work. Let's write the function together.

### Independent practice ("You do")

Write a function that calculates the volume and area of a sphere.

1. Think out loud before you start typing. What are the inputs and outputs to the function?
2. What are the formulas for the volume and area of a sphere?
3. What's the pseudo-code look like?
4. You've completed the prep work. Write the function in JavaScript. Call it a couple times to ensure it works correctly.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned how to approach a programming task. You learned to plan and design the task in your head and on paper before writing code. This is important because programming tasks can be complex. You now have the skills to break down a complex task into manageable pieces. You also learned how to document your code using code comments. This is important because you will eventually work in teams where you need to be able to share your code and have others understand it easily. 

Next, we will learn about string manipulation.

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/5-javascript/lessons/3-pseudocode/homework/solution_code)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.



