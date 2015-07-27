#Lesson 1 - Strings

![image](http://i.imgur.com/e0rn7sJ.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, manipulate, compare, and cast strings.

### Key points

* Strings are made up of multiple characters. A set of characters "strung" together make a string.
* Existing functions can be used to manipulate strings.
* The first index of a string is 0. The last index is length-1.
* Strings can be cast to a number and vice versa.
* Strings can be compared to one another.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../5-javascript/lessons/3-pseudocode/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

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

## During class

### Do-now

1. Attendance: Teacher takes student attendance at www.kinvolved.com
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about strings. This is important because strings store what we humans use everyday to communicate with each other: words and sentences. It connects to what we've previously learned because we will be able to create variables to store strings. Additionally, we will get to call pre-built functions to manipulate strings.

Someone give me an example of a word. Any word. What is a word made up of? How can I change this word? How can I add more to the word?

### Introduction of new material ("I do")

####Create, initialize, and access a string

```
var buzz = "To infinity, and beyond!";
```

Let's break this down right to left. Notice the **double quotes** (`"`). All strings start and end with them. Inside the double quotes we find the actual contents of the string which is a sentence in this case. Your text editor will change the color of the contents of your string. It does this because it wants to visually assist you when you are reading your code.

This string is then stored in a variable called `buzz`. Now let's print it:

```
console.log(buzz);
```

This prints out `To infinity, and beyond!` to the console.

####String manipulation

#####String length

Suppose we want to find the length of our string. We can:

```
var blueFish = "Dory";
console.log(blueFish.length);
```

All strings have a length attribute. The above will print `4` to the console.

#####Access character

Suppose we want to find the first character of a string. We can:

```
var blueFish = "Dory";
console.log(blueFish.charAt(0));
```

`charAt` is a function that takes in one parameter. This parameter is the **index** or position of the character inside the string. Notice how the first character of a string is always at the 0 index. (This has to do with computers starting count at 0 instead of 1. We'll learn more about this in the arrays section.) The function returns the character at the position of the index. The above prints `D` out to the console.

What if we want to print the last character? We can:

```
var blueFish = "Dory";
console.log(blueFish.charAt(blueFish.length-1));
```

Let's first think about what `blueFish.length-1` means. We know the length is 4 from above. 4-1 results in 3. So we are asking for the character at the 3rd index in our string. Note that the last character in a string will always be one less than its length.

#####Index of a character

Suppose we want to find the index of the letter 'r' in our string. We can:

```
var blueFish = "Dory";
console.log(blueFish.indexOf("r"));
```

`indexOf` is a function that takes in one parameter. This parameter is the character that you wish to the find the index of. The function finds the first occurrence of the character and returns the index of it. The above prints `2` to the console. Why doesn't it print 3?

#####Split a string

Suppose we have a string that contains a sentence with two words. Suppose we want to split the sentence into two parts. We can:

```
var rex = "I roar!";
console.log(rex.slice(0,1));
console.log(rex.slice(2,6));
```

`slice` is a function that takes two parameters: a starting index and an ending index. The function then extracts the mini-string inside the original based on the two indices. This resulting string is called a **sub-string**.

The above prints:

```
I
roar
```

#####Upper case & lower case

Suppose we have a string and want to make it all upper case. We can:

```
var potatoHead = "Hey, a laser! How come you don't have a laser, Woody?";
var angryPotatoHead = potatoHead.toUpperCase();
console.log(angryPotatoHead);
```

This prints `HEY, A LASER! HOW COME YOU DON'T HAVE A LASER, WOODY?`.

Suppose we want to make our new string all lower case. We can:

```
var nicePotatoHead = angryPotatoHead.toLowerCase();
console.log(nicePotatoHead);
```

This prints `hey, a laser! how come you don't have a laser, woody?`.

#####Replace

Suppose we want to replace a word in a string. We can:

```
var dory = "Hey, look! Sharks!";
var otherDory = dory.replace("Sharks", "Turtles");
console.log(otherDory);
```

The `replace()` function takes in two parameters: a string to replace and the string to replace with. It searches in the original string for the first parameter. It then replaces it with the second parameter. The above prints `Hey, look! Turtles!`.

#####Concatenate

Suppose you want to join two strings together. We can:

```
var marlinOne = "No, no more whale!";
var marlinTwo = "You can't speak whale!";
var marlinJoined = marlinOne.concat(marlinTwo);
console.log(marlinJoined);
```

The `concat` function takes in one parameter: the string that is to be added to the end of the original string. It returns a joined or **concatenated** string. 

The above prints `No, no more whale!You can't speak whale!`. Notice that there's no whitespace between the first `whale` and the exclamation mark.

We can also use the ``+`` operator:

```
console.log("Maybe a different dialect." + " Mmmmoooooowaaaaah...");
```

This prints `Maybe a different dialect. Mmmmoooooowaaaaah...`.


#####Trim

The invisible character that gets created when you tap the space bar on your keyboard is called **whitespace**. Consider the following string:

```
var dory = "Your son Chico?";
```

This string has two white spaces in it. One at index 4 between `Your` and `son`. Another at index 8 between `son` and `Chico`. 

Sometimes strings have unnecessary whitespaces at the end of them like so:

```
var marlin = "Nemo   ";
```

If we print the length of this string, we will get 7. Let's eliminate the whitespace at the end of the string:


```
var cleanMarlin = marlin.trim();
console.log(cleanMarlin.length);
```

`trim()` is a function that removes whitespace both at the beginning and end of the string it is operating on. The above will print `4` to the console.

####Cast

Suppose the following:

```
var x = 42;
```

Suppose we want to concatenate a string to the end of that number. Based off what we've learned above, we can:

```
x.concat(" is the best number ever!");
```

If we try the above code, it will fail. JavaScript will give us an error message. This is because the variable `x` is a number. Numbers cannot be concatenated with. Only strings can. So we must convert or **cast** the variable to a string. We do this by:

```
var xString = parseInt(x);
var newString = xString.concat(" is the best number ever!");
console.log(newString);
```

`parseInt()` is a function that takes in one parameter: an integer. It returns the string form of the integer. 

The above code prints `42 is the best number ever!`.

####Comparison

To compare two strings, we can use the `==` operator:

```
var w = "Hello";
var x = "Hello";
var y = "hello";
var z = "hello  ";

console.log(w==x);
console.log(w==y);
console.log(y==z);
console.log(y==z.trim());
```

prints the following boolean values:

```
true
false
false
true
```

### Guided practice ("We do")

Now we're going to work with strings together. 

`var dory = "Hey, look, balloons. It is a party.";`

1. How do I print out the length of the string?
2. How do I print out the first and last character of the string?
3. How do I print out the index of the letter "b"?
4. How do I separate the first sentence from the second? I want each sentence in its own variable and then I want to print each of those two variables.
5. How do I print the sentence in upper case form? In lower case?
6. How do I replace the word "balloons" with the word "sprinkles" and print it?
7. How do I add the sentence "Like it's 1999.    " to the end of the string and print it?
8. How do I remove the white space at the end of the sentence and print it?


### Independent practice ("You do")

Consider the following string:

``var buzz = "This is an intergalactic emergency. I need to commandeer your vessel to Sector 12.";``

1. Print out the length of the string.
2. Print out the first and last character of the string.
3. Print out the index of the letter "g".
4. Separate the first sentence from the second. Put each sentence in its own variable and then print each of those two variables.
5. Print the sentence in upper case form. Again in lower case.
6. Replace the word "vessel" with the word "pixie" and print it.
7. Add the sentence "Who's in charge here?    " to the end of the string and print it.
8. Remove the white space at the end of the sentence and print it.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about strings. This is important because strings are used to store words and sentences that humans use to talk. Next, we will learn about conditionals.

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)](https://github.com/ScriptEdcurriculum/solutions/tree/master/units/6-string/lessons/1-string/homework/solution_code)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
