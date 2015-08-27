#Lesson 1 - Strings

![image](http://i.imgur.com/e0rn7sJ.jpg)

## Before Class

### Objective

Students will be able to create, initialize, access, manipulate, compare, and cast strings.

### Key Points

* Strings are made up of multiple characters. A set of characters "strung" together make a string.
* Existing functions can be used to manipulate strings.
* The first index of a string is 0. The last index is length-1.
* Strings can be cast to a number and vice versa.
* Strings can be compared to one another.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket.

### Vocabulary

* String
* Double quotes
* Index
* Sub-string
* Concatenate
* Whitespace
* Trim
* Cast

### References

* http://www.w3schools.com/js/js_strings.asp
* http://www.w3schools.com/js/js_string_methods.asp

## During Class

### Do Now

1. Volunteer takes attendance. [Procedure found here](https://docs.google.com/document/d/19IIhqykr70vj7wnqyJYuQNTkd9GX56Xgl3omD42IcMk/edit).
2. [Do Now](assessments/do_now.md) Activity

### Opening

Today we will learn about strings. This is important because strings store what we humans use everyday to communicate with each other: words and sentences. It connects to what we've previously learned because we will be able to create variables to store strings. Additionally, we will get to call pre-built functions to manipulate strings.

Lets take a look at the two lines in your Do Now:
```
var A = "3 + 2";
var B = 3 + 2;
```
One of these variables is a string and the other is a number. Can you tell which is the string?

Someone give me an example of a word. Any word. What is a word made up of? How can I change this word? How can I add more to the word?

### Introduction to New Material ("I Do")

####Create, Initialize, and Access a String

```
var buzz = "To infinity, and beyond!";
```

Let's break this down right to left. Notice the **double quotes** (`"`). All strings start and end with them. Inside the double quotes we find the actual contents of the string which is a sentence in this case. Your text editor will change the color of the contents of your string. It does this because it wants to visually assist you when you are reading your code.

This string is then stored in a variable called `buzz`. Now let's print it:

```
console.log(buzz);
```

This prints out `To infinity, and beyond!` to the console.

####String Manipulation

#####String Length

Suppose we want to find the length of our string. We can:

```
var blueFish = "Dory";
console.log(blueFish.length);
```

All strings have a length attribute. The above will print `4` to the console.

#####Replace

Suppose we want to replace a word in a string. We can:

```
var dory = "Hey, look! Sharks!";
var otherDory = dory.replace("Sharks", "Turtles");
console.log(otherDory);
```

The `replace()` function takes in two parameters: a string to replace and the string to replace with. It searches in the original string for the first parameter. It then replaces it with the second parameter. The above prints `Hey, look! Turtles!`.

#####Concatenate (Join)

Suppose you want to join two strings together. We can:


We can use the ``+`` operator:

```
console.log("You know what you gotta do? " + " Just keep swimming");
```

This prints `You know what you gotta do? Just keep swimming`


### Guided Practice ("We Do")

Now we're going to work with strings together. 

`var dory = "Hey, look, balloons. It is a party.";`

1. How do I print this string to the console?
2. How do I print out the length of the string?
3. How do I replace the word "balloons" with the word "sprinkles" and print it?
4. How do I add the sentence "Like it's 1999.    " to the end of the string and print it?



### Independent Practice ("You Do")

Learn your user:
In this activity you are going to use a `prompt` function to ask the user to type in information about themself.
![Imgur](http://i.imgur.com/p639sLYm.png)

You are going to prompt the user three times to ask for their name, age and gender. After which you are going to combine all of that information into a string. An example would be..

`Hi Crush! You are 150 years old male.` 

#### Exit Ticket

Give [exit ticket](assessments/exit_ticket.md).

### Closing

Today you learned about strings. This is important because strings are used to store words and sentences that humans use to talk. Next, we will learn about conditionals.

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/6-string/lessons/1-string/homework/solution_code)

Remind students when homework is due and how it will be collected.

## After Class

* Review student Do Now and Exit Tickets.
* Prepare for next lesson / hand off to next volunteer in rotation.
