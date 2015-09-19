#Lesson 1 - Types and Operators

## Before Class

### Objective

Students will be able to manipulate strings and numbers in the console using
built-in JavaScript operators.

### Key Points

* JavaScript is a programming language that we can run in our browser.
* JavaScript is basically used to manipulate information; think of it like a
  really powerful calculator.
* Different kinds of information have different *types*; two of the most
  important are Strings and Numbers.
* You can write strings and numbers in a way that JavaScript understands
* You can manipulate strings and integers using built-in JavaScript operators
  like `+`.
* To quickly try out new techniques, we can use the JavaScript console in
  JSBin.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket quiz.

### Vocabulary

* JavaScript
* Type
* Console
* Arithmetic operation
* String concatenation

## During Class

### Do Now

What is the difference between a word and a number? What can you do with
words that you can't do with numbers? What can you do with numbers that you
can't do with words?

### Opening

What is a programming language? Can someone give me some examples? Remind me what a browser is.

JavaScript is a programming language and we can run it in our browser.

So far, we’ve learned HTML and CSS. These languages are useful for making web
pages, but we can’t use them to make our pages *do* anything. JavaScript allows
us to make our page do more than just display information: it can change and
react to us.

### Introduction to New Material ("I Do")

Open a new JSBin session, and point out the **Console**. Explain that the
console used to try out small amounts of JavaScript and see how they work. When
we want to write more complicated JavaScript, we’ll use the **JavaScript** tab.
But for now, it’s the console.

##### Console Demonstration

Demonstrate typing a number and pressing return.

```
2
```

Show how the console repeats
the number back to you. Explain that you just gave JavaScript a little bit of
work to do, and it did the work and gave you the result. In this case, the work
was just “show me the number 2”.

##### Basic Arithmetic

Do some basic math in the console. Demonstrate adding, subtracting, multiplying
numbers. Point out to the students that everyone in the room knows how to use a
calculator, so now everbody in the room knows some JavaScript as well.

```
2 + 2
10 - 2
4 * 4
```

##### Strings

Now type a string, in quotation marks, into the console. Point out that
JavaScript understands this string as well. Try a few other strings to
demonstrate that there’s nothing special about the first string you typed.

```
"ScriptEd"
"Coding is fun"
"I am a programmer"
```

Point out the quotation marks. Explain that when we want to give JavaScript a
number, we can just type the number. But when we want to give it a word or
words, we have to put them in quotation marks. Otherwise, JavaScript won’t know
what we mean.

######Types

Everything in JavaScript has a type. So far, we have seen two types: strings (which have quotes around them) and numbers. We can use the ``typeof`` function to print the type.

```
typeof("Justin Bieber")
typeof(22)
```

prints out

```
string
number
```

What will happen if I type this into the console?

```
typeof("22")
```

prints out ``string`` because we put quotes around 22. This tells JavaScript to treat the value as a string.

### Guided Practice ("We Do")

Open up the console and experiment with the `+` sign.

Try typing:

```
10 + 10
```

Note that this makes JavaScript do math.

Now try:

```
"Script" + "Ed"
```

Observe that this makes JavaScript stick the two strings together. We call this
**concatenation**.

### Independent Practice ("You Do")

In the console, find the answer to this math problem:

```
1103819 / 907
```

What happens if you put the numbers in quotes?

### Exit Ticket

What result will JavaScript give you for this?

```
10 + 2
```

How about for this?

```
"10" + "2"
```
