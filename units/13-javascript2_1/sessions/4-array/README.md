#Lesson 4 - Arrays

![image](http://i.imgur.com/64dLS3B.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, and manipulate arrays.

### Key points

* Lists in real life are arrays in the programming world.
* Arrays are made up of elements. These are like buckets that store something.
* Each element in an array has an index. We access elements by using these indicies.
* Arrays have a size.
* Computers start counting at 0.

### Assessment

1. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Element
* Bracket
* Index
* Length
* Access
* Datastructure

### References

* http://www.w3schools.com/jsref/jsref_obj_array.asp

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. [Do Now](assessments/do_now.md) activity

### Opening

Today we will learn about arrays. This is important because arrays are a tool that programmers can use to store a large set of data. It connects to what we've previously learned because we will be able to access and manipulate variables that are stored in an array.

Someone give go up to the whiteboard and write out the list they created for the Do now. 

After the student has written their list on the whiteboard numbereach item on the list as a human would and as a computer would. **Key concept** computers start counting at zero.

### Introduction of new material ("I do")

####Create and initialize an array

```
var fruits=["banana", "watermelon", "apple"];
```

Let's break this down right to left. I've created a variable called fruits and set it to my array. This particular array has three **elements** each of which are strings. Note that each element is separated by a comma. 

####Access and print an element of an array

```
console.log(fruits[0]);
```

This prints out `banana`. Here, `0` is the index. Wait. If we're accessing the first element of an array, why is our index `1` and not `0`? This is because computers start counting at 0, not 1. 

What if we wanted to access and print the second element of our array?

```
console.log(fruits[1]);
``` 

This prints out `watermelon`. 

And how about the third and last element of our array?

```
console.log(console.log(fruits[2]);
```

This prints out `apple`. 


####Find and print the length of an array

Let's talk about the size of an array. How big is our array? Let's use JavaScript to find out:

``console.log(fruits.length);``

This prints out `3`. What's the index of the last element in our array? How is connected to the length of it? What can we always conclude about the two?  

Notice how the last index in the array is 2 but the length is 3. This is just how computers work. It is an important concept to remember.


### Guided practice ("We do")

Now we're going to work with arrays together in JS Bin. 
Write an array containing your four favorite songs.


1. How do I print out the second song?
3. How do I find the length of our array?



### Independent practice ("You do")
Open a new JS Bin file.

1. Write an array containing 6 colors.
2. Write a for loop that prints the each color in the array in a row to the console.
3. The loop must terminate after each color in the array has printed.

Bonus. Print these colors to an HTML output as the background color of a webpage.

**Be sure to export this JS Bin as a Gist for reference**
#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about arrays. This is important because arrays are used to represent lists. We can store multiple variables in one array.

#### Homework

There is no homework for this session.
## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
