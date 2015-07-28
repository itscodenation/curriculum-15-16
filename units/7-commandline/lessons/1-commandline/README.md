#Lesson 1 - Command line

![image](http://i.imgur.com/FJ5Hsq0.jpg)

## Before class

### Objective

Students will understand the basic CRUD (create, read, update, and delete) commands in the terminal. 

### Key points

* A terminal is a way to talk to a computer using commands.
* Commands specify the action you want the computer to do for you.
* Folders can contain folders and/or files. Taken in total, this forms a file hierarchy.
* Commands are like functions: they take in parameters as input and sometimes return something as output.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../10-jquery/lessons/1-jquery/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Terminal
* Command
* Path / directory
* Directory structure / hierarchy

### References

* http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything

## During class

### Do-now

1. Attendance: Teacher takes student attendance at www.kinvolved.com
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about the command line. This is important because the command line enables us to work in an environment without a visual interface. 

What are files? What are folders? How do I view them in Windows? How about Mac? How do I go about copying a file? How about a folder? When I copy a folder, what happens to everything inside of it? How about if I want to rename a file? And delete a file?

When we perform any of the above operations in Windows or Mac, the operating system is translating our actions into command lines. Let's take a deeper look.

### Introduction of new material ("I do")

#### Basics

The **terminal** is a place where we talk to a computer. In the terminal, we issue **commands** to the computer. These commands are instructions that we would like the computer to do for us. Typically, if the command was executed successfully, the computer will not respond with anything.

##### Directory

When I open Cloud9 and click on Window->New Terminal, I see something like:

![image](http://i.imgur.com/qDJZEpS.jpg)

Let's ignore the part in green and focus on the blue. It says:

```
/home/ubuntu/workspace
```
This is the current **directory** (or path) that I am in. A directory a way to locate a file or folder. In this case, I am in the "workspace" folder which is inside the "ubuntu" folder which is inside the "home" folder. 

##### Running a command

I'm going to go back to Cloud9 and type in the command ``pwd``. After this, I press the "Enter" key. 

```
dopeboy@demo:/home/ubuntu/workspace $ pwd
/home/ubuntu/workspace
dopeboy@demo:/home/ubuntu/workspace $ 
```
This command instructed the computer to print the directory that I am in (which is same thing as the text in green). After it finished printing it out, it made a new line in anticipation of my next command.

#### List files and folders

How do we find all the files and folders in the directory we are in?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `ls` command lists all the files and folders in the directory I am in. In my case, I have three files.

#### Copy a file

How do we copy a file?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ cp hello.js duplicate_hello.js
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  duplicate_hello.js  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `cp` command copies a file. Notice that two filenames were supplied to the command. We can think of these filenames as *parameters* to the command. In this case, the first parameter is the name of the file we want to copy. The second parameter is what we want the new file to be named. 

The second `ls` command was used to verify that the file was indeed copied.

#### Remove a file

How do we remove a file?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  duplicate_hello.js  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ rm duplicate_hello.js 
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `rm` command can take in one parameter: the name of the file you wish to remove.

#### Create a folder

How do we create a folder?

```
dopeboy@demo:/home/ubuntu/workspace $ mkdir pikachu
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js  pikachu/
dopeboy@demo:/home/ubuntu/workspace $ 
```
The `mkdir` command can take in one parameter: the name of the folder you wish to create.

Notice that when we run the `ls` command, "pikachu" has a forward slash (/) at the end of it. This is the terminal's way of telling us that "pikachu" is a folder, not a file.

#### Change directory (or folder)

How do we change the directory we are in to a different one?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js  pikachu/
dopeboy@demo:/home/ubuntu/workspace $ cd pikachu/
dopeboy@demo:/home/ubuntu/workspace/pikachu $ pwd
/home/ubuntu/workspace/pikachu
dopeboy@demo:/home/ubuntu/workspace/pikachu $ 
```
The `cd` command takes in one parameter: the name of the directory you wish to go in. The `pwd` command checks that we did indeed change to another directory.

#### Move a file

How do we move a file from one directory to another?

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js  hello_duplicate.js  pikachu/
dopeboy@demo:/home/ubuntu/workspace $ mv hello_duplicate.js pikachu/
dopeboy@demo:/home/ubuntu/workspace $ cd pikachu/
dopeboy@demo:/home/ubuntu/workspace/pikachu $ ls
hello_duplicate.js
dopeboy@demo:/home/ubuntu/workspace/pikachu $ 
```
The `mv` command can take in two parameters: the file you wish to move and the directory to which you wish to move it to. Here, we moved "hello_duplicate.js" to the "pikachu" folder.

#### Rename a file

How do we rename a file?

```
dopeboy@demo:/home/ubuntu/workspace/pikachu $ ls
hello_duplicate.js
dopeboy@demo:/home/ubuntu/workspace/pikachu $ mv hello_duplicate.js duplicate.js
dopeboy@demo:/home/ubuntu/workspace/pikachu $ ls
duplicate.js
dopeboy@demo:/home/ubuntu/workspace/pikachu $ 
```
Here, we reused the `mv` command. The first parameter is the file we wish to rename and the second is the new name we want it to have.

#### Tab completion

Suppose I have a file with a long name:

```
dopeboy@demo:/home/ubuntu/workspace $ ls
README.md*  hello-world.html  hello.js  pikachu/  supercalifragilisticexpialidocious.js
```
Then suppose I want to move "supercalifragilisticexpialidocious.js" to the "pikachu" folder. I'd begin typing:

```
mv supercali...
```
and realize that it'd take forever to type the filename. 

Luckily, the terminal gives us a keyboard shortcut to type long files easy. If I type in

```
mv s
```
and hit the Tab key, the terminal will auto-complete the rest of the filename for me to

```
mv supercalifragilisticexpialidocious.js
```
Then I can proceed with my `mv` command as usual. 

### Guided practice ("We do")

Let's login into our Cloud9 and go to the terminal. If there isn't atleast one file present in the workspace, let's create one by clicking on File->New file. Let's call this file "guinea_pig.js".

1. Let's print out the current directory.
2. Let's list all the files and folders.
3. Let's copy "guinea_pig.js". Let's call the new file "lab_rat.js".
4. Let's delete "lab_rat.js".
5. Let's create a new directory called "pen".
6. Let's move "guinea_pig.js" to the "pen" folder.

### Independent practice ("You do")

In Cloud9, open up a new workspace. If there isn't atleast one file present in the workspace, create one by clicking on File->New file. Let's call this file "tomato.js".

1. Let's print out the current directory.
2. Let's list all the files and folders.
3. Let's copy "tomato.js". Let's call the new file "strawberry.js".
5. Let's create two new directories: "fruits" and "vegetables".
6. Move "tomato.js" and "strawberry.js" to the appropriate folders.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about the command line. This is important because the command line lets us talk to the computer in a defined and quick way. Next, we'll look at version control and running `git` commands in the terminal.

#### Homework

There is no homework for this lesson.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
