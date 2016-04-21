#Lesson 1 - Values and Expressions

## Before Class

### Objective

Students will understand the concepts of JavaScript **values** and
**expressions**.

### Key Points

* JavaScript is a programming language that we can run in our browser.
* JavaScript is basically used to manipulate information; think of it like a
  really powerful calculator.
* Different kinds of information have different *types*; two of the most
  important are Strings and Numbers.
* A **value** is a *piece of data*.
* An **expression** is a *piece of code that produces a value*.
* Many different expressions can produce the same value.
* You can write expressions that produce the exact value you have written.
  These are called **literals**.
* You can combine several expressions to produce a new, more complex
  expression. One way to do this is using JavaScript operators like `+`.
* Values can have different **types**. A value's type tells us the *role it
  plays in the program*.
* To quickly try out new techniques, we can use the JavaScript console in
  JSBin. We can type an **expression** into the console, and JSBin will print
  out that expression’s **value**.

### Assessment

Students will show progress toward reaching the objective based on their performance on the exit ticket quiz.

### Vocabulary

* JavaScript
* Value
* Expression
* Type
* Literal
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

On the board, write an empty [T
Chart](http://mathhelpwithpatternsinbivariatedata.weebly.com/uploads/4/4/6/6/44667841/9265818_orig.jpg). Label the left column **Value** and the right column
**Expression**.

In the left column, write the number **4**. Point at what you just wrote and
ask a student to tell you what it is.

When the student responds correctly, write **4** in the right column as well.
Explain to the class that in the left column, you actually wrote a little bit
of JavaScript code. That code just happens to be the number 4.

Now in the left column, write down **2 + 2**. Ask another student what you just
wrote down. If the student answers "two plus two", ask them to do the math.
When you recieve the answer "four", write down **4** again in the right column.

Explain that, once again, the left column contains a little bit of JavaScript
code, and that the right column contains its value. Just like [student name]
did the work of turning **2+2** into **4**, JavaScript will do the work of
turning an **expression** into a **value** for us.

At this point, write down the definitions of these key vocabulary terms:

* A **value** is a *a single piece of information, like a number, word, or
  sentence*.
* An **expression** is *a piece of code that produces a value*.

Point out that you just wrote down two *different* expressions that produced
the *same* value, 4. Emphasize that for any value, there are many possible
expressions that can produce that value.

Write down two or three more expressions that produce **4**, e.g. **5 - 1**,
**8 / 2**, or **2 + 1 + 1**.

Point out that the more complex expressions you wrote are composed of simpler
expressions, glued together by **operators**. For instance, in the expression
**5 - 1**, there are also the smaller expressions **5** and **1**, which are
combined into a new, more complex expression using the subtraction operator.

Open a new JSBin session, and point out the **Console**. Explain that the
console used to try out small amounts of JavaScript and see how they work. When
we want to write more complicated JavaScript, we’ll use the **JavaScript** tab.
But for now, it’s the console.

### Guided Practice ("We Do")

Instruct students to take out a piece of paper, and write a T-chart with
headers **Expression** and **Value**, like you just did on the board.

On their workstations, have students to open up a fresh JSBin console at
http://jsbin.com/?console

This part of the lesson will follow a pattern: you type an expression into the
console, and the students follow along on their workstations. Once everyone is
ready, you all press **Enter** to see the result. The students write down the
expression-value pair in their T-chart in their notes.

Below is a good series of expressions, with accompanying instruction where
relevant:

* `225`
* `215 + 10`
* `550 / 2`
* `5 * 2 + 4`
* `5 * (2 + 4)`
  Point out that parentheses can be used for order of operations in JavaScript,
  just like the students learned in math class. Provide a quick refresher on
  PEMDAS if needed.
* `"ScriptEd"`
  Point out the quotation marks, and explain that quotation marks allow us to
  write an expression that produces a **string**.
  Give the definition of a **string** as a *sequence of letters, numbers, and
  symbols*, like a word or a sentence. Write this on the board.
  Contrast this with the other values we have been working with, which are
  **numbers**. (Note that JavaScript does not make a distinction between
  integer and floating-point types, so there is no need to bring that up).
* `"Script" + "Ed"`
  Point out that the `+` sign works differently for strings than it did for
  integers. Explain that values with different **types** behave differently.
  Give the definition of **type** as *the role that a value plays in the
  program*.
* `"Sc" + "ri" + "ptE" + "d"`
  Give the definition of **concatenation** as *combining several strings into
  one long string*.
* `"215" + "10"`
  Give the students a moment to absorb the fact that this did not produce the
  value they might have expected! Emphasize that any expression that is
  surrounded in quotes produces a string value; remember, a string is a
  sequence of letters, **numbers**, and symbols. Have the students try the
  non-quoted version again to drive the point home.
* `"215 + 10"`
  Point out that anything that’s surrounded in quotes is part of a **string
  literal**; JavaScript won’t try to **evaluate** it further.

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
