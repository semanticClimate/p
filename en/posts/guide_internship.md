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

## 🌍 A Beginner’s Guide to #semanticClimate

Welcome to the **#semanticClimate Internship Program** — a hands-on opportunity to contribute to climate knowledge while building valuable technical skills.

This internship allows you to work at the intersection of **climate science, data analysis, and semantic technologies**, helping transform complex climate reports into structured, accessible knowledge.

---

## 🚀 Why Join?

Interns are at the core of our work. By contributing to real-world climate data projects, you will:

- Support efforts to make climate knowledge more accessible  
- Work with real scientific reports (e.g., IPCC)  
- Gain practical experience in tools, data analysis, and research workflows  
- Develop transferable skills in **NLP, data processing, and web-based systems**

---

## ⏳ Internship Duration

- **Duration:** 12 weeks to 6 months  
- **Mode:** Online or Offline (flexible)  

---

## 🛠️ The Program

As an intern, you will install, test, and work with **semanticClimate toolkits** designed for analyzing and structuring climate reports.

These tools help convert unstructured documents into meaningful, machine-readable knowledge.

The tools are the following:

- [txt2phrases](https://github.com/semanticClimate/txt2phrases) : Extract key terms and phrases
- [encyclopedia](https://github.com/semanticClimate/encyclopedia) : Build structured knowledge resources  
- [amilib](https://github.com/petermr/amilib) : Process and annotate scientific documents
- [pygetpapers](https://github.com/petermr/pygetpapers) : Retrieve research papers
- [docanalysis](https://github.com/petermr/docanalysis) : Analyze and explore document content 

### [Explore more about these tools](https://semanticclimate.github.io/p/en/tools/) 

## 📋 Getting Started

Here’s a list of **general tasks to begin your internship**:

- Set up the development environment  
- Install required tools and dependencies  
- Run initial tests on sample climate documents  
- Explore tool functionalities and outputs  
- Document your observations and progress  

---

## 🌱 What You’ll Gain

- Experience working with **real climate data**  
- Skills in **text mining, NLP, and knowledge extraction**  
- Exposure to **semantic web and knowledge graph concepts**  
- Hands-on experience with collaborative and research workflows  

## 🧭 Internship Workflow

## 🟢 PHASE 0: ONBOARDING

Set up your basic development environment:

* Install [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/)
* Install [git](https://git-scm.com/downloads) and get an ID on [GitHub](https://github.com/)
* install [pytest](https://docs.pytest.org/en/stable/getting-started.html)
* be able to use a text editor (Notepad++, TextMate, or many others NOT Word)
* have an IDE ([VSCode](https://code.visualstudio.com/), [PyCharm](https://www.jetbrains.com/pycharm/download/?section=windows#section=windows), etc.). Go for the freely accessible community editions.
* learn the basics of [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 🧪 PHASE 1: UNIT TESTING (amilib)

Learn to run tests on a real project.

#### Cloning **amilib** repository from `github` and running `pytest` from commandline/terminal

1. Open your terminal  
2. Create a working directory:
   ```bash
   mkdir myproject
   cd myproject

3. Clone the repository 
   ```bash
   git clone https://github.com/petermr/amilib.git

4. Navigate into the folder:
   
   ```bash
   cd amilib

5. Check available branches:
   ```bash
   git branch -a

6. Switch to the required branch:
   ```bash
   git checkout [branch-name]

7. Pull latest updates:
   ```bash
   git pull

8. Run all the test:
   ```bash
   pytest

9. Report any issues on the GitHub repository [issue section](https://github.com/petermr/amilib/issues).

## 🔄 PHASE 2: PROGRESSING

- Apply the same workflow used in Phase 1 to other repositories  
- Clone → Setup → Run tests → Analyze results  
- Explore different tools and understand their functionalities  
- Document errors, observations, and learning outcomes  
- Gradually work independently with minimal guidance

## 🔧 PHASE 3: LEARNING GIT COMMANDS

### Essential Git Commands

| Command | Description |
|--------|-------------|
| `git clone <url>` | Copy a remote repository to your local machine. The repository URL can be an HTTP(s) URL or an SSH URL. |
| `git status` | Check current changes and file states |
| `git add <file>` | Adds the specified file to the staging area, making it ready to be committed. |
| `git commit -m "message"` | Save changes with a message |
| `git push origin <branch>` | Uploads local branch commits to the remote repository branch. |
| `git pull origin <branch>` | Fetches and integrates changes from the remote repository to your local working directory. |
| `git branch` | List or create branches |
| `git checkout <branch>` | Switches to the specified branch.  |
| `git stash` | Temporarily save changes |

👉 Learn how to create a new branch

- **[CLICK HERE](https://github.com/petermr/amilib/blob/parijat_test/Creating_a_new_branch_on_github.md) to Read the steps**

👉 Learn Regular Expressions (Regex):

- **[CLICK HERE](https://semanticclimate.github.io/p/en/posts/tut_regex/)**

---

## 🌍 PHASE 4: CLIMATE REPORT SELECTION 
- [Click Here to read the structure of IPCC/AR6 reports](https://semanticclimate.github.io/p/en/posts/ipcc_resources/)
  
* Go to either [IPCC](https://www.ipcc.ch/) official website or see the **structure of the IPCC Reports** from [HERE](https://semanticclimate.github.io/p/en/posts/ipcc_resources/)
* Navigate through the different working groups.
* Watch the presentation **[video](https://www.youtube.com/watch?v=3DDhtrAmzsc&list=PLtKHReMoCMwmmlDDTbDQx2A3oHgQXw4mT&index=1)** for the overview of IPCC/AR6 report.
* Select a chapter from the IPCC/AR6 report that you find interesting.
* Download and convert it to semantic form using `amilib` and `amiclimate` tool.
* Create a **dictionary** specific to the selected chapter and annotating the chapter with dictionary terms.

### How to use `graphviz` tool to make flowcharts, diagram etc.

- #### [Colab Notebook to learn the tool](https://colab.research.google.com/drive/1WxD8-RK5zTBOMIJLH3UDNQ8CvTDzH9q7?usp=sharing)

### Read about the projects done by Interns

- #### [Click Here](https://semanticclimate.github.io/p/en/posts/Interns_project/)

### Resources for climate knowledge

- #### [Click Here](https://semanticclimate.github.io/p/en/posts/resources/)

### **HIGH-PRIORITY:**

* See the [resource page](https://semanticclimate.github.io/p/en/posts/resources/) of [#semanticClimate](https://semanticclimate.github.io/p/en/) website.
* Attend daily Zoom meetings.
* Report problems to the specific `github repositories` as an issue with full description.
* Update `daily progress sheet` (**what I DID, what I WILL do, What's BLOCKING me**): [CLICK HERE](https://docs.google.com/spreadsheets/d/1q7LCvplWFlZERCv791IGcEEwjJzmy7fp/edit?usp=sharing&ouid=103728494708026978305&rtpof=true&sd=true)
* Share weekly reports on every Friday.
* Join our **Slack** workspace that’s where we coordinate with team members and others.
* Update your unavailability for meeting in #coordination channel of Slack.
* Email to **semanticclimate@gmail.com** for any query.



