#Lesson 1 - Hashes

![Imgur](http://i.imgur.com/Yugqw7pm.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, manipulate, and iterate through hashes.

### Key points

* Hashes, like arrays, are used to store data.
* Unlike arrays, hashes represent an unordered list through key-value pairs.


### Assessment

2. Exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Curly brace
* Key-value pair
* For-in loop

### References

* http://www.javascriptkata.com/2007/03/29/how-to-use-javascript-hashes/

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. [Do-now](do_now/) activity

### Opening

Today we will learn about hashes. This is important because hashes are a tool that programmers use to store a large set of unordered data. It connects to what we've previously learned because we will be able to perform array like operations with hashes. 

Lets say I want to specify the capital of each of the countries listed in the array you made for the Do Now. How can I do that? You can do that using a hash.

**Note: in JavaScript some people will refer to this as a hash and others will call it an object.**

### Introduction of new material ("I do")

####Create and initialize a hash

```
var animalSounds = {"cow": "Moo", "cat": "Meow", "dog": "Woof"};
```

Let's break this down right to left. Note the **open curly brace** (`{`) and **close curly brace** (`}`). These braces specify the beginning and end of the hash. This particular hash has three **key-value** pairs. Note that each key-value pair is separated by a comma. We then take this hash and store in a variable called `animalSounds`.

Let's talk about the key-value pairs more. In this hash, `cow`, `cat`, and `dog` represent keys. `"Moo"`, `"Meow"`, and `"Woof"` represent those keys' respective values. These values happen to be strings.

####Access and print an element of a hash

```
console.log(animalSounds["cat"]);
```

This prints out `Meow`. Here, `cat` is the key. Whereas with arrays we use indices to access elements, with hashes we use keys.

What if we want to access and print the value corresponding to the `dog` key of our hash?

```
console.log(animalSounds["dog"]);
``` 

This prints out `Woof`. 

And how about the value corresponding to the `cow` key?

```
console.log(console.log(animalSounds["cow"]);
```

This prints out `Moo`. 


####Change the value of a key-value pair in a hash

Let's change `cat`'s value:

```
animalSounds["cat"] = "Purr";
console.log(animalSounds["cat"]);
```

This prints out `Purr`.

####Add a key-value pair to the hash

What if we want to add another animal-sound pair to our hash? We can:

```
animalSounds["snake"] = "Hiss";
console.log(animalSounds["snake"]);
```

This prints out `Hiss`. 

####Iterate

What if we want to print every element in our hash? We can:

```
var animalSounds = {"cow": "Moo", "cat": "Meow", "dog": "Woof"};

for (key in animalSounds) 
{ 
  console.log("key: " + key + ", value: " + animalSounds[key]); 
}
```

This is an example of a **for-in** loop. It will print each key-value pair in the hash. The above prints:

```
key: cow, value: Moo
key: cat, value: Meow
key: dog, value: Woof
```

####Remove key-value pair

What if we want to remove a key-value pair from our cash? We can:

```
var animalSounds = {"cow": "Moo", "cat": "Meow", "dog": "Woof"};

delete animalSounds["dog"];

for (key in animalSounds) 
{ 
  console.log("key: " + key + ", value: " + animalSounds[key]); 
}
```

prints:

```
key: cow, value: Moo
key: cat, value: Meow
```


### Guided practice ("We do")

Now we're going to work with hashes together. Find the capitals to each of the countries you used in the Do Now. 

``var worldCapitals = {"United States" : "Washington D.C.", "United Kingdom": "London", "China" : "Beijing", "Bangladesh" : "Dhaka"}``

1. How do I print out China's capital?
2. How do I change the United States' capital?
3. How do I add one country-capital pair to the hash?
4. How do I remove Bangladesh's key-value pair?
5. How do I print each capital in our hash without having to access each one individually?

### Independent practice ("You do")

Create a new GitHub repo called Hash-unit and clone a Cloud9 repo with the same name.

Create a page that displays the capital of country typed in by the user on a simple HTML page. This can be done either through an alert box or a form on your HTML page.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about hashes. This is important because hashes are used to represent unordered list and connect items through key-value pairs. 

#### Homework

[Link to homework](homework/)

[Link to homework solution (private)]()

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. 
* Prepare for next lesson / hand off to next volunteer in rotation.
