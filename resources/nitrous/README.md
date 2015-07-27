# Nitrous Setup Guide

This guide will explain how to (1) create a Github account, (2) create a Nitrous account, and (3) create a workspace in Nitrous that clones a Github repository.

## Background

### What is Nitrous?

Nitrous is an integrated development environment (IDE) in the cloud. More at their [home page](https://www.nitrous.io/).

### What is Github?

GitHub is a web based hosting platform. GitHub can be used as a publishing tool, a version control system or a way to collaborate on a project with several friends. GitHub allows you to have local and cloud based copies of your projects.

### Special note for instructors

Nitrous VMs provisioned on a free account get shut down after an idle period. This means you will not be able to access a student's work on Nitrous after the VM is down. ScriptEd has an arrangement with Nitrous to keep our students' VMs on all the time. Work with your program manager to find out more.

## Setup

### Create Github account

1. Go <a href = "https://github.com/join" target = "_blank">here</a> and fill out the form. For the email address, use your school email address. Write down your password so that you don't forget it.
2. You will see a screen telling you about the different plans Github offers. Make sure the free plan is selected and then click on the green "Finish sign up" button in the bottom of the page.

### Create Nitrous account

1. Go  <a href = "https://nitrous.io" target = "_blank">here</a> and click on the Github link below the green button:
<br/>![image](http://i.imgur.com/h8cOV0A.png)

2. Log into Github if you haven't already. Click on the green "Authorize application" button at the bottom of the page.

3. You'll be asked to create an account on Nitrous. The username box is already filled in; do not change this. Fill in the password box **with the same password you used for your Github account**. Then click the "Sign up" button at the bottom.

4. You'll be asked to create a box. Click on the "PHP" box on the far right like so: <br/>![image](http://i.imgur.com/sFgG9lY.png)<br/>Leave everything else the same and click on the orange "Create Box" button.

5. Wait a couple seconds for your box to be created. Click on the orange buttons until you are taken to a new screen. 

6. Click on the "View" menu and click on "Focus Console" like so:<br/>![image](http://i.imgur.com/ArLziXA.png)

7. Copy the following text and paste it into the black space at the very bottom of the screen: ``cd ~/workspace/www; git clone https://github.com/ScriptEdcurriculum/curriculum.git``. *(Note: for Windows & Linux users, Shift + Control + V is paste).* Your screen should look like:<br/>![image](http://i.imgur.com/ccCgV1t.png)<br/>Then press the enter/return key.

8. Within your `www` folder, you should see a `curriculum` folder. These contain lesson plans, homeworks, and projects. Work with your instruction to find the folder you should be in.

9. As a test, right click on the `www` folder, click on "New File", name your new file `index.html`, double click the new file on the left to open it on the right, enter in the text "Hello World", save the file, click on the "Preview" menu, and click on the second menu option like so:<br/>![image](http://i.imgur.com/g9fpw5D.png)<br/>You should see the text "Hello world" in a new tab.

### Keeping your workspace up-to-date

To make sure you have the latest files in your workspace, you will need to run a git command in the terminal. You will learn more about git and the terminal in the future. For now, follow these instructions verbatim. You will need to do this **everytime you start a new project**.

1. Click on the "View" menu and click on "Focus Console" like so:<br/>![image](http://i.imgur.com/ArLziXA.png)

2. Copy the following text and paste it into the black space at the very bottom of the screen: ``cd ~/workspace/www; git pull``. Press the enter/return key.

3. You might be prompted with a message like so: ``Are you sure you want to continue connecting (yes/no)?``. In this case, type in "yes" without the quotes. Then hit the enter/return key.

4. Your files are now up-to-date.



