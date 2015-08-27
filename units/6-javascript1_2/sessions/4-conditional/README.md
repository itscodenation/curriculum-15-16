#Lesson 4 - Conditionals (Or/And) 

![Imgur](http://i.imgur.com/ooLA9O6.png)

## Before Class

### Daily Objective

Students will be able to use booleans, conditionals, and logical operators.

### Key Points

* Logical operators let us test for complex conditions.
* We can put conditionals inside other conditionals; this is called nesting.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket.

### Vocabulary

* Comparison operator
* Logical operator
* Nesting

### References

* http://www.w3schools.com/js/js_obj_boolean.asp
* http://www.w3schools.com/js/js_if_else.asp
* http://www.w3ctutorial.com/js-basic/js-comparisons

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. Students should complete the [Do Now](assessments/do_now.md) activity.

### Opening

Last class we discovered how to use operators to compare two things. But what if we want to compare things with multiple conditionals?

Example: **If** it is raining **and** you don't have an umbrella, then you will get wet.

What other sentances did you come up with in the do now?

### Introduction to New Material ("I Do")
To see the full list of comparison operators, go [here](http://www.w3schools.com/js/js_comparisons.asp).

#####Conditionals with Logical Operators

######Logical NOT (``!``)

Suppose we have two variables and we want to check that they do not equal each other. We can do this:

```
var x = 1;
var y = 2;

if (!(x == y))
{
  console.log("x does not equal y");
}

// OR

if (x != y)
{
  console.log("x does not equal y");
}
```

Both `if` statements are equivalent.

######Logical AND (``&&``)

What if we want to test for more complex conditions in our `if` statements? Consider the following example:

```
var tail = prompt("Do you have a tail?");
var color = prompt("What color are you?");

if (tail == "Yes" && color == "Green")
{
  console.log("You are Rex, the dinosaur.");
}

else if (tail == "Yes" && color == "Brown")
{
  console.log("You are Slinky, the dog.");
}

```

Let's start at line 5. Here, we are testing for both conditions to be true. The `&&` **logical operator** stands for "and." In order for the body of the `if` statement to run, both conditions must be true. That is, the user must have entered "Yes" and then "Green" in order for `You are Rex, the dinosaur` to print. If this doesn't happen, the same rules apply to the proceeding `else if` statement.

######Logical OR (``||``)

Similarly, we can use the ``||`` logical operator to act as an "or." Consider the following example:

```
var hat = prompt("Do you wear a hat?");
var boots = prompt("Do you wear boots?");


if (hat == "Yes" || boots == "Yes")
{
  console.log("You are Sheriff Woody. There's a snake in my boot!");
}

else
{
  console.log("I don't know who you are.");
}
```

Let's break this down line-by-line. On line four, if either `hat` is equal to "Yes" *or* `boots` is equal to "Yes", the body of the `if` statement will run. Suppose the user enters in "No" to both questions. In this case, the `if` condition is false. Therefore, we would see ``I don't know who you are`` get printed.

#### Nested Conditionals

We can put `if` statements inside other `if` statements. This is called **nesting**. Here's an example:

```
var gender = prompt("What gender are you?");

if (gender == "Male")
{
  var size = prompt("What size is your tuxedo?");
  
  if (size == "large")
  {
    console.log("Your waist size is a 38.");
  }
  
  else if (size == "medium")
  {
    console.log("Your waist size is a 34.");
  }
  
  else if (size == "small")
  {
    console.log("Your waist size is a 32.");
  }  
}

else if (gender == "Female")
{
  var dress = prompt("What color is your dress?");
  
  if (dress == "Orange")
  {
    console.log("It must be fall.");
  }
  
  else if (dress == "Green")
  {
    console.log("It must be spring.");
  }
}
```
Here, we first ask the user's gender. Based on the gender, we ask different questions. If the user is a male, we ask them about the size of their tuxedo because only men wear tuxedos. However, if they are female, we ask them about the color of their dress because only women wear dresses. 

### Guided Practice ("We Do")

Write two boolean variables and initialize them to `false`. Name the variables "woody" and "buzz."

1. Print out the values of both variables.
2. Change the value of the `woody` variable to `true`.
3. Print out "I am a Woody. There's a snake in my boot!" if the value of `woody` is `true`.
4. Print out "I am not a Buzz. Can't go to infinity and beyond!" if the value of `buzz` is `false`.
5. Print out "I might be Woody or Buzz" if either `woody` or `buzz` is true.
6. Change the value of `buzz` to true.
7. Print out "I am Andy's favorite" if both `woody` and `buzz` are true.
8. Suppose you're building a website for Ken, Barbie, & Big Baby. You want to find out who of those three is using your website. We first need to ask them whether they are an adult. If they are an adult, we need to ask them their gender. Write code that does this and prints out who they are.

### Independent Practice ("You Do")

1. Open a new JS Bin file.
2. Create a quick statement that prompts the user two separate questions. "How old are you?" and "Do you have a driver's license".
3. If the user is 16 or older and has a driver's license, then tell them to go drive a car. If not, tell them they better not drive a car.

Before leaving, remember to save snapshot and export as gist when you are done.


### Closing

Today you learned how to use the and, or, and nested functions of conditionals. Next, we are going to make a program that uses these properties. 

#### Homework

[Link to homework](homework)

Remind students when homework is due and how it will be collected.

## After Class

* Review Do Now and Homework. 
* Prepare for next lesson / hand off to next volunteer in rotation.
