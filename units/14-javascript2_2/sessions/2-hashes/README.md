#Lesson 2 - Hash-ception (hashes inside of hashes)

![image](http://i.imgur.com/FWOuXvf.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, manipulate, and iterate through hashes.

### Key points

* Hashes, like arrays, are used to store data.
* Unlike arrays, hashes represent an unordered list through key-value pairs.


### Assessment

2. Exit-ticket based off [assessments from current lesson](assessments/exit_ticket).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Hash hierarchy

### References

* http://www.javascriptkata.com/2007/03/29/how-to-use-javascript-hashes/

## During class

### Do-now

1. Attendance
2. Return graded do-now and exit ticket from previous class
3. [Do-now](do_now/) activity

### Opening

Last time we met we learned about hashes. Can someone tell me what a hash is and what they do?

**Note: in JavaScript some people will refer to this as a hash and others will call it an object.**

### Introduction of new material ("I do")

Let's refresh our memories here a bit. If I have the hash below How can I print the sound a dog makes to the console?

```
var animalSounds = {"cow": "Moo", "cat": "Meow", "dog": "Woof"};
```
Correct! To print the **value** of the **key** dog you can use...

```
console.log(animalSounds["dog"]);
``` 
Let's add another key-value pair to this hash. The new Pair will be bird and chirp. Your code should now look like this:

```
var animalSounds = {"cow": "Moo", "cat": "Meow", "dog": "Woof" "Bird", "chirp"};
```

####Hash in a hash

But wait! Not all birds make the same noise. Is there a way we can specify the type of bird?
 
Like Matryoshka dolls (see picture at top), we can store hashes inside of other hashes:

```
var animalSounds = 
{
  "cow": "Moo", 
  "cat": "Meow", 
  "dog": "Woof",
  "bird": {robin: "Chirp", swan: "Cry"}
};

var birdSounds = animalSounds["bird"]

console.log(birdSounds["swan"]); 
```

Here, the `bird` key has a value that is a hash. So we first unload that hash into its own variable. Then we access it like any other hash.

Think about why we used a hash inside a hash here. We could have just added two more key-value pairs to the `animalSounds` hash. But we didn't because we want to use the keys in that hash to represent *types* of animals, not specific kinds.

### Guided practice ("We do")

Now lets take a look at your project from last session. Right now the user can type in a country and see the capital.

Lets make this more interesting by adding the following information to each country using hashes inside the hash you have made.

Along with the capital also list:

* National Animal
* National Language
* Population 

### Independent practice ("You do")

Use jQuery to display all the data of a country of the user's choice on your HTML page the same way you did this with the capital. 

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about placing hashes inside of hashes. This is especially useful when it is necessary to display multiple points about a single item.

#### Homework

Students are encouraged to improve their project by adding more features to their site. 

## After class

* Grade do-now & exit-ticket. 
* Prepare for next lesson / hand off to next volunteer in rotation.
