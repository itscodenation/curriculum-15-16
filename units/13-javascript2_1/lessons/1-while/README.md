#Lesson 1 - While Loops

![image](http://i.imgur.com/VxptVvS.jpg)

## Before class

### Objective

Students will be able to create ``while`` loops, take repeatable tasks and convert them to loops, and iterate through an array using loops.

### Key points

* Loops let you run the same operation over and over again.
* Typically, loops go over an array. This is useful when you want to do something with every element in a array.
* Usually, loops have an exit condition. That is, some criteria will be met that will end the running of the loop.
* A loop that does not terminate is called an infinite loop. As programmers, we seek to avoid these because they freeze our program.

### Assessment

1. Do-now activity 
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Iterate
* Initialization 
* Increment / Decrement
* Halt
* Off-by-one
* Exit condition

### References

* http://www.w3schools.com/js/js_loop_while.asp

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about loops. This is important because loops are a tool that programmers can use to run the same operation over and over again. They are also useful for iterating through an array and processing each element in it. It connects to what we've previously learned because we will be able to take advantage of what we know about arrays and conditions to create loops.

Someone give me an example of a loop in real life. When we take the bus and pay with change, the machine keeps counting every coin we deposit until we run out. The machine also calculates the total amount of money after each coin has been counted to check if we have deposited enough to pay the fare. Once we have, the machine stops counting and we hear a beep so that we know we can stop putting money in.

### Introduction of new material ("I do")

####Create a `while` loop

```
var i=0;

while(i < 2)
{
  console.log(i);
  i = i+1;
}

console.log("Loop terminated");
```

#####Explanation

Let's break this down line-by-line:

1. In line 1, we're creating a variable called `i` and setting it equal to 0. Because we're setting the value of `i` for the first time, we can say we're **initializing** `i` to 0. 
2. In line 3, we are checking if `i` is less than 2. This is our exit condition; if `i` is ever not less than 2, the loop's body will not run. 
3. However, if the condition is true, line 5 prints out `i` and line 6 increases, or **increments**, the value of `i` by 1. 
4. Line 9 only runs once the loop has terminated.

#####Output

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
4. `i` gets incremented. It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. `i` gets printed as 1.
7. `i` gets incremented. It is now equal to 2.
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

After the first iteration of the loop, `i` will not be change. In fact, `i` will never change! Thus, the `i<2` condition will always be true. This means the loop will run forever. Your program will freeze, or halt, and the `Loop terminated` statement will never run.

This is bad and we want to avoid these by making sure we are changing our index so that the exit condition is eventually true.


####Create a `for` loop
```
for (var i=0; i<2; i=i+1)
{
  console.log(i);
}

console.log("Loop terminated");
```

This `for` loop performs the same exact operations as the `while` loop above. The only difference is the syntax; `for` loops are more compact and thus require less line of codes. Because we're programmers and we like to do things with the least amount of effort as possible, we prefer to use `for` loops when we can.

Let's run through this code line-by-line too. [Repeat above exercise]

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

OK this is taking too much time. We programmers like to do things with the least amount of effort as possible. So let's do this in a loop instead:

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

In four lines, we accomplished with a loop something that would have taken 101 lines without a loop!


####`break` and `return`
What if we wanted to exit the loop before the exit condition was met? We could do this by doing the following:

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

#####Explanation

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
4. `i` gets incremented. It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. Is `i` equal to 1? Yes, so run the `break` statement. This exits the loop.
7. `Loop terminated` gets printed.

####`continue`
What if we wanted to skip to the next iteration of the loop without running the remaining code in our body? We could do this by doing the following:

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
4. `i` gets incremented. It is now equal to 1.
5. Is `i` less than 2? Yes, because 1 is less than 2. Therefore, the condition is true and proceed to execute the body of the loop.
6. Is `i` equal to 1? No, so skip the `if` statement and go to the next line in the body.
7. `i` gets printed as 1.
8. `i` gets incremented. It is now equal to 2.
9. Is `i` less than 2? No, because 2 is not less than 2. Therefore, the condition is false so we must terminate the loop and run the code after it.
10. `Loop terminated` gets printed.


####Use arrays with loops

We learned about arrays before. We know they act as lists and store multiple variables. Let's use loops to iterate through each element of an array:

```
var fruits=["banana", "watermelon", "apple"];

for (var i=0; i<fruits.length; i=i+1)
{
    console.log(fruits[i]);
}

console.log("Loop terminated");
```

#####Explanation

Notice that we use the `length` property of the `fruits` array which is 3 in this case. That means the loop will run through three iterations before it terminates. The 0, 1, and 2 index of `fruits` will be accessed.

#####Output

```
banana
watermelon
apple
Loop terminated
```

### Guided practice ("We do")

Now we're going to work with loops together. 

1. How do I write a `while` loop that prints "Justin Bieber" 10 times?
2. How do I write a `while` loop that iterates 5 times and prints out the sequence 0 to 4?
3. How do I take (2) and convert it to a `for` loop?
4. How do I take (3) and have it terminate after only 3 iterations using a `break` statement?
5. How do I take (3) and have it skip the third iteration using a `continue` statement?
6. Let's write an array full of 7 vegetables. How do I write a `for` loop that prints out each vegetable?

### Independent practice ("You do")

1. Write a `while` loop that prints "Lady GaGa" 15 times.
2. Write a `while` loop that iterates 8 times and prints out the sequence 0 to 7.
3. Take (2) and convert it to a `for` loop.
4. Take (3) and have it terminate after only 4 iterations using a `break` statement.
5. Take (3) and have it skip the fifth iteration using a `continue` statement.
6. Write an array full of 8 vegetables. Write a `for` loop that prints out each vegetable.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about loops. This is important because loops can be used to repeat an operation. They can also be used to iterate through an array. Next, we will work on a project that connects our knowledge of arrays and loops together.

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/8-array-loop/lessons/2-loop/homework/solution_code)


Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
