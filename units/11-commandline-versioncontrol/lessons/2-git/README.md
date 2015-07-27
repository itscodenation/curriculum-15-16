#Lesson 2 - Git

![image](http://i.imgur.com/C2u8bun.jpg)

## Before class

### Objective

Students will understand the basics of version control. They will be able to setup an account on Github and perform the `clone`, `push`, and `pull` operations.

### Key points

* Version control software helps programmers collaborate on code together.
* Version control software tracks all changes to your code. This enables you to revert back to an older version of the code.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../11-commandline-versioncontrol/lessons/1-commandline/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Version control
* Git
* Github
* Repository
* Clone
* Push
* Pull
* Merge
* Stage
* Commit

### References

* http://gitref.org/basic/
* https://try.github.io/levels/1/challenges/1
* http://en.wikipedia.org/wiki/Revision_control
* http://en.wikipedia.org/wiki/Git_(software)
* http://git-scm.com/docs/git-merge

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about version control. This is important because version control enables us to work with others on code in an organized way.

Raise your hand if you've written an essay for English class. Walk me through the steps that happen before you submit your essay. You start with a first draft. You might get feedback from a classmate or teacher and start working on the next draft. You might realize that the next draft isn't going well and revert, or go back, to an older draft. Once you're done, you submit the final draft. To pull up a history of your work, you might find all your drafts and track the progress you made over time. 

**Version control** (also called source control) lets you save drafts of your code. This way, you and others around you can track your code. Suppose your latest draft of the code introduced a bug. With source control, you can revert the code to an older version (or draft) to eliminate the bug and then understand what caused it. 

Version control also lets groups of people collaborate on code together. Suppose you are working with a partner on the same HTML file. You are responsible for the ```<head>...</head>``` section and your partner is responsible for the ```<body>...</body>``` section. Once the both of you are done, you will need to combine each of your files together. This would involve pasting your code into your partner's code and making sure you don't accidentally break your partner's file. This doesn't seem like too much work until you start working on hundreds of files together. Using version control software, you could merge, or combine,  your work and your partner's work automatically.

### Introduction of new material ("I do")

#### Git

**Git** is an example of a version control software. It it the most widely used version control tool and supports performing the actions discussed above. For more information on Git, see the references section.

We will use Git in the command line.

#### Github

**Github** is a service that lets programmers use Git to store their work on cloud based servers. 

In the following exercise, we are going to create our own repository, copy other work into it, and then modify our copy. This lesson assumes knowledge of the command line. All commands must be performed in a command line terminal (*Window -> New Terminal* in Cloud9). 

##### (1) Sign up

If you haven't already, create an account on Github here: https://github.com/

##### (2) Create repository

A **repository** (or repo) is a place where we store our code.

Click [here](https://github.com/new) to create one. For repository name, enter "unit-10-walkthrough". Leave everything else blank and click on the green "Create Repository" button. Do not follow any of the instructions on the next page.

At this point, you have an empty repository on Github.

##### (3) Clone repository

Next, we **`clone`** (or copy) an existing repository onto our machine. We are going to clone a test repository. To do this, run:

```
git clone https://github.com/dopeboy/test-repo-scripted.git
git remote rename origin upstream
```
##### (4) Push to our own repository

A **`push`** is an action to upload our own work to a repository that we have control over. We are going to copy the contents of the cloned repository into our own repository. Replace "xxxxxx" with your Github username below:

```
git remote add origin https://github.com/xxxxxx/unit-10-walkthrough.git
git push origin master
```

After you run the second command, you will be asked for your Github username. Then you will be asked for your password. During this step, you will not be able to see what you are typing in. This is OK, the computer is still recording what you type. Once you're done, hit the enter key. 

If the commands ran successfully, you should see something like so:

```
Counting objects: 20, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (11/11), done.
Writing objects: 100% (20/20), 6.52 KiB | 0 bytes/s, done.
Total 20 (delta 2), reused 0 (delta 0)
To https://github.com/xxxxxx/unit-10-walkthrough.git
 * [new branch]      master -> master
```

Run the ``ls`` command and you will see a new folder in your directory. Open ``main.html`` in this directory and read it.

##### (5) Add

Suppose we want to change ``main.html`` in our repository. First, we make the changes using our text editor. Let's change "Pikachu I choose you!" to "Snorlax I choose you!". Then run:

```
git status
```

We should see something like:

```
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	modified:   main.html
#
no changes added to commit (use "git add" and/or "git commit -a")
```

Git has detected we have changed the file. But as it notes, we must add it to our list of files we want to update. We do this by:

```
git add main.html
```

##### (6) Commit

When we **`commit`** a file, we tell Git that we're about to make our change final. This gives Git a chance to record any changes made. We also need to provide a message saying what changed so that other programmers can understand what we did.

```
git commit -u -m "changed pikachu to snorlax"
```

##### (7) Push

We are now ready to `push` our modified code to Github's servers. We do this by:

```
git push origin master
```

You will again be asked for your username and password. Remember that your password will be invisible when you type it.

##### (8) Pull (optional)

Suppose the repository where we cloned our work from got new files added to it. We could update our own repository by running a **`pull`** operation on the first repository and a **push** to ours:

```
git pull upstream master
git push origin master
```

##### (9) Merge (optional)

If multiple people are working on the same file, we will need to **`merge`** everyone's work together. See the references section for more details.

### Guided practice ("We do")

1. Let's find an interesting repository on Github.
2. Let's go through steps (2) to (7) from above. In the step where we change the file, let's add something funny to the README.md.

### Independent practice ("You do")

1. Find the official jQuery repository on Github.
2. Repeat steps (2)-(7) from above. Use the jQuery repository during the cloning step. Instead of modifying a file, add a new one.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about Git. This is important because Git is an essential tool for working on code in a team setting.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
