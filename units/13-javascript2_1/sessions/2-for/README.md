#Lesson 2 - For Loops

![Imgur](http://i.imgur.com/gDQRQmUm.png)

## Before Class

### Daily Objective

Students will be able to create **`for` loops**, take repeatable tasks and convert them to loops, and iterate through an **array** using **loops**.

### Key Points

* **Loops** let you run the same operation over and over again.
* A **`for` loop** completes the same actions as a **`while` loop** but does so using less code, so it is preferred. 

### Assessment

1. [Do Now](assessments/do_now.md)  
2. [Exit Ticket](assessments/exit_ticket.md)
3. Students will show progress toward reaching the objective based on their performance on the Exit Ticket.

### Vocabulary

* Iterate
* `for` loop
* `while` loop
* `break` statement
* `return`
* `continue` statement

### References

* http://www.w3schools.com/js/js_loop_for.asp

## During Class

### Do Now

1. Attendance
2. Return reviewed Do Now and Exit Ticket from previous class.
3. [Do-now](assessments/do_now.md) 

### Opening

Today, we will learn about **`for` loops**. **`for` loops** are similar to **`while` loops** in that they will complete the same action. However, **`for` loops** are completed with less code. 

**NOTE:** For this reason, you should use **`for` loops** moving forward on all projects.


### Introduction to New Material ("I Do")

####Create a `for` loop.
```
for (var i=0; i<2; i=i+1)
{
  console.log(i);
}

console.log("Loop terminated");
```

This **`for` loop** performs the same exact operations as the **`while` loop** in the last lesson. The only difference is the syntax; **`for` loops** are more compact and thus require less line of codes. Because we're programmers and we like to do things with the least amount of effort as possible, we prefer to use **`for` loops** when we can.

Let's run through this code line-by-line too. [Repeat above exercise.]

#####Repeat operations

Suppose I want to print the sequence 0 to 100, I could do that using:

```
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
...
```

OK, this is taking too much time. We programmers like to do things with the least amount of effort as possible. So let's do this in a **loop** instead:

```
for (var i=0; i<101; i=i+1)
{
  console.log(i);
}
```

This prints:

```
0
1
2
3
...
100
```

In four lines, we accomplished with a **loop** something that would have taken 101 lines without a **loop**!


####Exiting the loop using `break` and `return.`
What if we wanted to exit the loop before the **exit condition** was met? We could do this by doing the following:

```
for (var i=0; i<2; i=i+1)
{
  if (i == 1)
    break; // OR return
  else
    console.log(i);
}

console.log("Loop terminated");
```



This will cause the loop to run only one iteration. 

#####Output

```
0
Loop terminated.
```

Let's break this down line-by-line:

1. `i` is set to 0.
2. Is `i` less than 2? Yes, because 0 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
3. Is `i` equal to 1? No, so run the `else` statement. 
3. `i` gets printed as 0.
4. `i` gets **incremented**. It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. Is `i` equal to 1? Yes, so run the **`break` statement**. This exits the loop.
7. `Loop terminated` gets printed.

####Skipping to the next iteration using `continue`
What if we wanted to skip to the next **iteration** of the loop without running the remaining code in our body? We could do this by doing the following:

```
for (var i=0; i<2; i=i+1)
{
  if (i == 0)
    continue;
    
  console.log(i);
}

console.log("Loop terminated");
```

#####Explanation

This will cause the loop to skip printing `i` on the first iteration.

#####Output

```
1
Loop terminated.
```

Let's break this down line-by-line:

1. `i` is set to 0.
2. Is `i` less than 2? Yes, because 0 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
3. Is `i` equal to 0? Yes, so skip running the rest of the body and proceed to the next iteration of the loop.
4. Then, `i` gets **incremented**. It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. Is `i` equal to 1? No, so skip the `if` statement and go to the next line in the body.
7. `i` gets printed as 1.
8. `i` gets incremented. It is now equal to 2.
9. Is `i` less than 2? No, because 2 is not less than 2. Therefore, the condition is false so we must terminate the loop and run the code after it.
10. `Loop terminated` gets printed.


### Guided Practice ("We Do")

Now we're going to work with loops together. 

1. How do I write a `for` loop that prints "Taylor Swift" 10 times?
2. How do I write a `for` loop that iterates 5 times and prints out the sequence 0 to 4?
3. How do I create a `for` loop that counts down from 10 to 1? 

### Independent Practice ("You do")
In your "loops" workspace from last lesson complete the following:

1. Create a new file called `for.html`.
2. Add the jQuery CDN and have a single image in the html file with [this image](http://imgur.com/GPRGZBB) in it. (The image can also be found at http://imgur.com/GPRGZBB).
3. In the `script.js` file create a **`for` loop** that adds another image of a bottle of milk until the page reaches 100 bottles.  

**Bonus:** After the page counts up to 100 bottles have it count back down to 0 bottles.

### Exit Ticket

Give the [Exit Ticket](assessments/exit_ticket.md).

### Closing

Today, you learned about **`for loops**. This is important because **loops** can be used to repeat an operation. They can also be used to iterate through an **array**. Next, we will work on a project that connects our knowledge of **arrays** and **loops** together.

#### Homework

Homework can be found [here](homework/). 

## After class

* Review the Do Now & Exit Ticket. 
* Prepare for next lesson / hand off to next volunteer in rotation.
