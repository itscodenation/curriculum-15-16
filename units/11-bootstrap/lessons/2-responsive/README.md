#Lesson 1 - Responsive Webpages

![Imgur](http://i.imgur.com/hwLWyaBm.png)

## Before class

### Objective

Students will be able to design a website that is responsive to the device it is being viewed on.

### Key points

* Bootstrap makes it easier to create a simple and clean looking page across multiple devices.
* Websites today must be able to reach a large audience regardless of the device they use to access it.

### Assessment

1. Write exit-ticket based off [assessments from current lesson](assessments/exit_ticket.md).

Students will show progress toward reaching the objective based on their performance on the exit-ticket.

### Vocabulary

* Responsive
* Grid System


### References

* http://getbootstrap.com/css/
* https://en.wikipedia.org/wiki/Responsive_web_design

## During class

### Do-now

1. Attendance
2. Return graded exit ticket from previous class
3. [Do-now](assessments/do_now.md)

### Opening

Today we are going to learn how to make a responsive webpage using bootstrap. Can someone please tell me what a responsive webpage is and why it is important?


### Introduction of new material ("I do")

####Grid system

Did you know that webpages you make in Bootstrap have an invisible grid on them? This invisible grid is 12 cells wide regardless of the size of the screen. So if your screen is 12 inches wide each cell will be 1 inch. If your screen is 6 inches wide each cell with be .5 inches wide.

We can utilize this grid system to make your webpage viewable in different sizes such as on a smartphone.

Consider the following code:  


````
<div class="row">  
        <div class="col-xs-12 col-md-6">Hello</div>
        <div class="col-xs-12 col-md-6">World</div>
</div> 
````
  
### Guided practice ("We do")
####Text

Bootstrap has many styles for controlling the appearance of text. Let's Explore the "Alignment Classes" Bootstrap has to offer.  You'll notice by adding a specific type of class to a piece of text you change how the text will appear on the page.  

```
<html>
  <head>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <p class="text-left">Left aligned text.</p>
	<p class="text-center">Center aligned text.</p>
	<p class="text-right">Right aligned text.</p>
  </body>
</html>
```

### Independent practice ("You do")

Make your own webpage using Bootstrap. Your Webpage will be about four colleges you would like to apply to.  
Your page must include the following:
1. A table with each of the four colleges, the college's location, tuition and desired major.
2. Below the table is a button for each school that links directly to the college's website.
3. Text that descibes what the site is about. 

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about Twitter bootstrap. This is important because Bootstrap allows us to create clean and elegant HTML without writing additional CSS

#### Homework

There is no homework for this lesson.

## After class

* Grade exit-ticket.
* Prepare for next lesson / hand off to next volunteer in rotation.

