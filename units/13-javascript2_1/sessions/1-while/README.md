#Lesson 1 - While Loops

![image](http://i.imgur.com/VxptVvS.jpg)

## Before Class

### Daily Objective

Students will be able to create **``while`` loops**, take repeatable tasks and convert them to loops, and iterate through an **array** using **loops**.

### Key Points

* **Loops** let you run the same operation over and over again.
* Typically, **loops** go over an array. This is useful when you want to do something with every element in an array.
* Usually, **loops** have an **exit condition.** That is, some criteria must be met in order to end the running of the loop.
* A **loop** that does not terminate is called an **infinite loop**. As programmers, we seek to avoid these because they freeze our program.

### Assessment

1. [Do Now](assessments/do_now.md)
2. Exit Ticket based off [assessments from current lesson](assessments/exit_ticket.md).
3. Students will show progress toward reaching the objective based on their performance on the Exit Ticket.

### Vocabulary

* Iterate
* Initialization 
* Increment / Decrement
* Halt
* Exit condition
* Loops
* While Loops
* Arrays

### References

* http://www.w3schools.com/js/js_loop_while.asp

## During Class

### Do Now

1. Attendance
2. Return reviewed Do Now and Exit Ticket from previous class.
3. Do Now 

### Opening

Today, we will learn about **while loops**. This is important because **loops** are a tool that programmers can use to run the same operation over and over again. They are also useful for **iterating** through an **array** (which we will learn next) and processing each element in it. 

When we take the bus and pay with change, the machine keeps counting every coin we deposit until we run out. The machine also calculates the total amount of money after each coin has been counted to check if we have deposited enough to pay the fare. Once we have, the machine stops counting and we hear a beep so that we know we can stop putting money in. Someone give me another example of a **loop** in real life. 

### Introduction to New Material ("I Do")

####Create a `while` loop.

```
var i=0;

while(i < 2)
{
  console.log(i);
  i = i+1;
}

console.log("Loop terminated");
```



Let's break this down line-by-line:

1. In line 1, we're creating a variable called `i` and setting it equal to 0. Because we're setting the value of `i` for the first time, we can say we're **initializing** `i` to 0. 
2. In line 3, we are checking if `i` is less than 2. This is our **exit condition**; if `i` is ever not less than 2, the loop's body will not run. An **exit condition** means that some criteria must be met in order to end the running of the loop.
3. However, if the condition is true, line 5 prints out `i` and line 6 increases, or **increments**, the value of `i` by 1. If **increments** mean to increase, a **decrement** means _________? 
4. Line 9 only runs once the **loop** has terminated.

####Output

Let's look at the output:

```
0
1
Loop terminated.
```

Let's also break this down line-by-line:

1. `i` is set to 0.
2. Is `i` less than 2? Yes, because 0 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
3. `i` gets printed as 0.
4. `i` gets **incremented.** It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. `i` gets printed as 1.
7. `i` gets **incremented.** It is now equal to 2.
8. Is `i` less than 2? No, because 2 is not less than 2. Therefore, the condition is false so we must terminate the loop and run the code after it.
9. `Loop terminated` gets printed.

Based off this, we can say the loop's body ran two times or went through two **iterations**. Notice that the value of the last printed `i` is one less than the number in the condition.

####Infinite `while` loop

What happens if we do not include the `i=i+1` line? Something like: 

```
var i=0;

while(i < 2)
{
  console.log(i);
}

console.log("Loop terminated");
```

After the first **iteration** of the loop, `i` will not change. In fact, `i` will never change! Thus, the `i<2` condition will always be true. This means the loop will run forever. Your program will freeze, or **halt**, and the `Loop terminated` statement will never run.

This is bad and we want to avoid this mistake by making sure we are changing our index so that the **exit condition** is eventually true.

### Guided Practice ("We Do")

Now we're going to work with loops together. We can prototype this in JS Bin.

1. How do I write a **`while` loop** that prints "Justin Bieber" 10 times?
2. How do I write a **`while` loop** that iterates 5 times and prints out the sequence 0 to 4?
3. How do I write a **`while` loop** that prints "Can't get enough of the Biebs" forever?


### Independent Practice ("You Do")
Create a GitHub repository called "loops" and clone it to a new Cloud9 workspace with the same name.

1. Create two files, `while.html` and `script.js`
2. Add the jQuery CDN and have a single empty `<div>` in the HTML file.
3. In the `script.js` file create a **while loop** that counts from 1 to 100.
4. Apend the number to the blank HTML `<div>` so that the number can show up on the HTML page.

### Exit Ticket

Give the [Exit Ticket](assessments/exit_ticket.md).

### Closing

Today, you learned about **while loops**. What does a **while loop** do? Why is this useful? [Possible student answer: This is important because loops can be used to repeat an operation. They can also be used to iterate through an array which we learn about soon.]  Next session, we will learn about **for loops**.

#### Homework
There is no homework for this session.

## After Class

* Review the Do Now & Exit Ticket. 
* Prepare for next lesson / hand off to next volunteer in rotation.
