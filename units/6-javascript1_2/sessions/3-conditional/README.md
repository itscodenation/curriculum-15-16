#Lesson 3 - Conditionals (If/Else)

![image](http://i.imgur.com/ZRo5Z6j.jpg)

## Before Class

### Daily Objective

Students will be able to use booleans, conditionals, and logical operators.

### Key Points

* Boolean values are either true or false.
* `If`/`Else` statements let us set a condition and execute different code based on whether the condition is met.
* Comparison operators let us test for equality or difference..

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket.

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

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
3. [Do Now](assessments/do_now.md) Riddle

### Opening

Today, we will learn about boolean values, `if`/`else` statements, comparison operators, and logical operators. This is important because these concepts will allow us to write sophiscated programs that will run in different ways based upon what we input. It connects to what we've previously learned because we will be able to test the values of variables we've created in the past and derive a boolean value.

Can someone give me an example of a use of if/else logic in the real world? 
EX1: If there is milk left in the carton, then you will drink milk. Or else, you will need to go to the store to get milk. EX2: If you take a shower, then you will smell good. Or else, you will smell bad.

Let's talk about an example involving a machine. How does a metro station work? If the remaining amount of money on your metro card is less than the fare, then you will see "INSUFFICIENT FARE" printed on the display and the turnstile will stay locked. Or else, the machine will subtract the fare amount from your balance, display it, and unlock the turnstile.

### Introduction of New Material ("I Do")

#####Create, Initialize, and Change a Boolean Variable

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

#####Conditionals with Comparison Operators

###### <i>True</i> `if`

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

###### <i>False</i> `if`

What if the condition in the `if` statement were false? Something like:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}
```

In this case, 1 is not equal to 2. The condition in the `if` statement is false. Therefore, the body of the `if` statement is never executed and **we see nothing printed!**

##### `if else`

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

### Guided Practice ("We Do")

Write two boolean variables and initialize them to `false`. Name the variables "elephant" and "mouse."

1. How do I print out the values of both variables?
2. How do I change the value of the `elephant` variable to `true`?
3. How do I print out "I am an elephant" if the value of `elephant` is `true`?
4. How do I print out "I am not a mouse" if the value of `mouse` is `false`?
5. How do I print out "I might be an elephant or a mouse" if either `elephant` or `mouse` is true?
6. How do I change the value of `mouse` to true?


### Independent Practice ("You Do")

1. Open a new JS Bin file.
2. Create a quick statement that prompts the user the question "What is your favorite ice cream flavor?"
3. If the user responds "chocolate" respond "Yay! I love chocolate too".
4. If the user responds "vanilla" respond "Boo! Chocolate is better".
5. If the user responds with any other flavor respond "Eww! Try a real flavor, like chocolate".

Before leaving, remember to save snapshot and export as gist when you are done.

#### Exit Ticket

Give [exit ticket](assessments/exit_ticket.md).

### Closing

Today you learned about booleans, conditionals, logical, and comparison operators. This is important because these tools enable us to write sophiscated code that can run in different ways based upon the criteria we set. Next, we will learn about more in-depth conditionals. 


## After Class

* Review Do Now & Exit Ticket.
* Prepare for next lesson / hand off to next volunteer in rotation.
