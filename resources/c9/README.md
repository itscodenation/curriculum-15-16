# Cloud9 Setup Guide

This guide will explain how to (1) create a Github account, (2) create a Cloud9 account, and (3) create a workspace in Cloud9 that clones a Github repository.

## Background

### What is Cloud9?

Cloud9 is an open source Integrated Development Environment (IDE) in the cloud. It is a software application that provides computer programmers with a place to create, edit and debug their source code.

### What is Github?

GitHub is a web based hosting platform. GitHub can be used as a publishing tool, a version control system or a way to collaborate on a project with several friends. GitHub allows you to have local and cloud based copies of your projects.

## Setup

### Create Github account

1. Go <a href = "https://github.com/join" target = "_blank">here</a> and fill out the form. Remember your password.
2. You may see a screen, telling you about the different plans Github offers. Ignore this and click on the green "Finish sign up" button in the bottom.

### Create Cloud9 account

1. Go  <a href = "https://c9.io" target = "_blank">here</a> and click on the Github icon in the upper left of the screen as seen below: ![image](http://i.imgur.com/95AGSAw.png)

2. Click on the green "Authorize application" button at the bottom of the screen.

3. You're now logged into Cloud9. Click the "Dashboard" link in the upper right.

4. You may see a pop-up telling you about the different plans Cloud9 offers. Ignore this and click on the green "Remind me later" button in the lower right.

5. In the upper left, click on the green "Create new workspace" button. Then click on "Clone from URL" like so: ![image](http://i.imgur.com/5fZCQNd.png)

6. A new pop-up window should appear. Copy the following text: ``git@github.com:ScriptEdcurriculum/curriculum.git`` and paste it into the "Source URL" box. Leave all the other settings the same. Click on the green "Create" button in the bottom right.

7. Cloud9 is creating your workspace. This may take up to 30 seconds. Once the workspace has been created, select it and click on the green "Start editing" button. 

8. You should see many green folders on the left. These contain lesson plans, homeworks, and projects. Work with your instruction to find the folder you should be in.

### Keeping your workspace up-to-date

To make sure you have the latest files in your workspace, you will need to run a git command in the terminal. You will learn more about git and the terminal in the future. For now, follow these instructions verbatim. You will need to do this **everytime you start a new project**.

1. Find the terminal in the bottom of your screen. If you cannot find it, go to the menu bar at the top and click on "Window->New Terminal". Your terminal should look something close to:
![image](http://i.imgur.com/EcpmCiX.png)

2. Copy the following command: ``git pull`` and paste it in the terminal. Hit the enter/return key. 

3. You might be prompted with a message like so: ``Are you sure you want to continue connecting (yes/no)?``. In this case, type in "yes" without the quotes. Then hit the enter/return key.

4. Your files are now up-to-date.



