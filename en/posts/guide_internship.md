---
title: Getting started with semantic Climate 
date: 2024-06-06
description: Internship with semanticClimate
author: Team 
summary: Introduction about the process
hide: true
tags:
  - hackathon
---

## **A beginner's guide to #semanticClimate**

Welcome to the beginner's guide to #semanticClimate.

Starting an internship with us is a great way to help fight climate change.

Interns are at the core of our work. They commit to work in our program and in return create great value for the world and also learn a great set of transferable skills.

The internship duration varies from 12 weeks to 6 months. It can be online as well as offline.

## The Program 
You will be required to install and alpha test the semanticClimate toolkits. These tools will be used to do analysis of climate reports.

The tools are the following:

- [amilib](https://github.com/petermr/amilib)
- [amiclimate](https://github.com/petermr/amiclimate)
- [pygetpapers](https://github.com/petermr/pygetpapers)
- [docanalysis](https://github.com/petermr/docanalysis)
  

Here’s a list of general **joining tasks for interns**:

### PHASE 0: ONBOARDING
* Install [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/)
* Install [git](https://git-scm.com/downloads) and get an ID on [GitHub](https://github.com/)
* install [pytest](https://docs.pytest.org/en/stable/getting-started.html)
* be able to use a text editor (Notepad++, TextMate, or many others NOT Word)
* have an IDE ([VSCode](https://code.visualstudio.com/), [PyCharm](https://www.jetbrains.com/pycharm/download/?section=windows#section=windows), etc.). Go for the freely accessible community editions.
* learn the basics of [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### PHASE 1: UNIT TESTING

#### Cloning **amilib** repository from `github` and running `pytest` from commandline/terminal

- Step 1: open the terminal.
- Step 2: Make directory where you want to save the repository. 
- Step 3: Go to that directory with **cd**
- Step 4: Clone the repository with this **git clone https://github.com/petermr/amilib.git**
- Step 5: Go to the specific directory with **cd amilib**
- Step 6: Check the branch for running the test and then checkout to that branch **git checkout [branch name]**
- Step 7: Do **git pull** for fetching all the changes made remotely to the local repository.
- Step 8: Run all the test with **pytest**
- Step 9: Report the errors if any to the [amilib](https://github.com/petermr/amilib) repository in the [issue section](https://github.com/petermr/amilib/issues). 

### PHASE 2: PROGRESSING
- Follow the similar steps mentioned for **amilib** for cloning and running `pytest` for **[amiclimate](https://github.com/petermr/amiclimate)** repository.
  
### PHASE 3: LEARNING `git` COMMANDS

Here are some essential `git` commands along with descriptions of their functionalities:

- **git clone** `repository URL`
  
    - Copies an existing repository from a remote server to your local machine. The repository URL can be an HTTP(s) URL or an SSH URL.
  
- **git status**
  
    - Displays the state of the working directory and the staging area. It shows which changes have been staged, which haven’t, and which files aren’t being tracked by Git.
  
- **git add** `file`

    - Adds the specified file to the staging area, making it ready to be committed. You can also use `git add .` to stage all changes in the current directory.

- **git commit -m "message"**
  
    - Records the changes in the staging area to the repository with a descriptive commit message.

- **git push** `remote` `branch`

    - Uploads local branch commits to the remote repository branch. For example, `git push origin main` pushes changes to the `main branch` of the remote repository named `origin`.

- **git pull** `remote` `branch`

    - Fetches and integrates changes from the remote repository to your local working directory. This command is a combination of `git fetch` and `git merge`.

- **git branch**
  
    - Lists all the branches in your repository. Adding an argument like `git branch [branch-name]` creates a new branch.

- **git checkout** `branch name`

    - Switches to the specified branch. 

- **git stash**

    - Temporarily shelves (or "stashes") changes in the working directory that are not ready to be committed. Use `git stash pop` to reapply the stashed changes later.

### PHASE 4: Climate Report Selection
* Go to [IPCC](https://www.ipcc.ch/) official website.
* Navigate through the different working groups from [here](https://semanticclimate.github.io/p/en/posts/ipcc_resources/).
* Watch the presentation **[video](https://www.youtube.com/watch?v=3DDhtrAmzsc&list=PLtKHReMoCMwmmlDDTbDQx2A3oHgQXw4mT&index=1)** for the overview of IPCC/AR6 report.
* Select a chapter from the IPCC/AR6 report that you find interesting.
* Download and convert it to semantic form using `amilib` and `amiclimate` tool.
* Create a **dictionary** specific to the selected chapter and annotating the chapter with dictionary terms.

### **HIGH-PRIORITY:**

* See the [resource page](https://semanticclimate.github.io/p/en/posts/resources/) of [#semanticClimate](https://semanticclimate.github.io/p/en/) website.
* Attend daily Zoom meetings.
* Report problems to the specific `github repositories` as an issue with full description.
* Update `daily progress sheet` (**what I DID, what I WILL do, What's BLOCKING me**)
* Share weekly reports on every Friday.
* Join our **Slack** workspace that’s where we coordinate with team members and others.
* Update your unavailability for meeting in #coordination channel of Slack.
* Email to **semanticclimate@gmail.com** for any query.



