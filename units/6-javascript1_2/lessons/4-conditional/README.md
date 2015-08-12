#Lesson 1 - Conditionals

![image](http://i.imgur.com/ZRo5Z6j.jpg)

## Before class

### Objective

Students will be able to use booleans, conditionals, and logical operators.

### Key points

* Boolean values are either true or false.
* `if`/`else` statements let us set a condition and execute different code based on whether the condition is met.
* Comparison operators let us test for equality or difference..
* Logical operators let us test for complex conditions.
* We can put conditionals inside other conditionals; this is called nesting.

### Assessment

1. [Do now](assessments/do_now) riddle
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Boolean
* Condition
* Comparison operator
* Logical operator
* Nesting

### References

* http://www.w3schools.com/js/js_obj_boolean.asp
* http://www.w3schools.com/js/js_if_else.asp
* http://www.w3ctutorial.com/js-basic/js-comparisons

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. [Do now](assessments/do_now) riddle

### Opening

Today we will learn about boolean values, `if`/`else` statements, comparison operators, and logical operators. This is important because these concepts will allow us to write sophiscated programs that will run in different ways based upon what we input. It connects to what we've previously learned because we will be able test the values of variables we've created in the past and derive a boolean value.

Someone give me an example of a use of if/else logic in the real world. If there is milk left in the carton, then you will drink milk. Or else, you will need to go to the store to get milk. If you take a shower, then you will smell good. Or else, you will smell bad.

Let's talk about an example involving a machine.How does a metro station work? If the remaining amount of money on your metro card is less than the fare, then you will see "INSUFFICIENT FARE" printed on the display and the turnstile will stay locked. Or else, the machine will subtract the fare amount from your balance, display it, and unlock the turnstile.

### Introduction of new material ("I do")

####Create, initialize, and change a boolean variable

```
var hungry = true;
var full = false;
```

This is an example of two boolean typed variables. **Boolean** variables can only be set to one of two values: true or false. Let's print these variables:

```
console.log(hungry);
console.log(full);
```

prints:

```
true
false
```

####Conditionals with comparison operators

##### True `if`

**Conditionals** let us set a criteria and run different code based upon whether the criteria is met or not. Let's look at an example:

```
if (1 == 1)
{
  console.log("1 equals 1!");
}
```

Let's break this down line-by-line. On the first line, we check for equality by using the ``==`` **comparison operator**. This operator checks if the left side is equal to the right side. Because 1 is equal to 1, this condition is true. Therefore, the body of the `if` statement is executed. 

Thus, we see the following printed:

```
1 equals 1!
```

##### False `if`

What if the condition in the `if` statement were false? Something like:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}
```

In this case, 1 is not equal to 2. The condition in the `if` statement is false. Therefore, the body of the `if` statement is never executed and **we see nothing printed!**

##### `if` `else`

What if we want to do one thing if our condition is true or another thing if our condition is false? We could:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}

else
{
  console.log("1 does not equal 2!");
}
```

In this case, 1 is not equal to 2. The condition in the `if` statement is false. Therefore, the body of the `else` statement runs.

Thus, we see the following printed:

```
1 does not equal 2!
```

##### `else if`

What if we wanted to do one thing if it met a certain condition or another thing if it met a separate condition? We could:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}

else if (3 == 3)
{
  console.log("3 equals 3!");
}
```

In this case, the `if` statement's condition is false. Therefore, we check the `else if` condition. Because 3 does equal 3, we see the following printed:

```
3 equals 3!
```

##### More comparison operators

To see the full list of comparison operators, go [here](http://www.w3schools.com/js/js_comparisons.asp).

####Conditionals with logical operators

#####Logical NOT (``!``)

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

#####Logical AND (``&&``)

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

#####Logical OR (``||``)

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

#### Nested conditionals

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

### Guided practice ("We do")

Write two boolean variables and initialize them to `false`. Name the variables "elephant" and "mouse."

1. How do I print out the values of both variables?
2. How do I change the value of the `elephant` variable to `true`?
3. How do I print out "I am an elephant" if the value of `elephant` is `true`?
4. How do I print out "I am not a mouse" if the value of `mouse` is `false`?
5. How do I print out "I might be an elephant or a mouse" if either `elephant` or `mouse` is true?
6. How do I change the value of `mouse` to true?
7. How do I print out "I have a tail" if both `elephant` and `mouse` are true?
8. Suppose we're building a website for Nemo, Dory, (both fishes) and Bruce (shark). We want to find out who of those three is using our website. We first need to ask them whether they are a fish. If they are a fish, we need to ask them what color they are. How do I write code that does this and prints out who they are?

### Independent practice ("You do")

Write two boolean variables and initialize them to `false`. Name the variables "woody" and "buzz."

1. Print out the values of both variables.
2. Change the value of the `woody` variable to `true`.
3. Print out "I am a Woody. There's a snake in my boot!" if the value of `woody` is `true`.
4. Print out "I am not a Buzz. Can't go to infinity and beyond!" if the value of `buzz` is `false`.
5. Print out "I might be Woody or Buzz" if either `woody` or `buzz` is true.
6. Change the value of `buzz` to true.
7. Print out "I am Andy's favorite" if both `woody` and `buzz` are true.
8. Suppose you're building a website for Ken, Barbie, & Big Baby. You want to find out who of those three is using your website. We first need to ask them whether they are an adult. If they are an adult, we need to ask them their gender. Write code that does this and prints out who they are.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about booleans, conditionals, logical, and comparison operators. This is important because these tools enable us to write sophiscated code that can run in different ways based upon the criteria we set. Next, we will learn about hashes and functions. 

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/7-conditional/lessons/1-conditional/homework/solution_code)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
