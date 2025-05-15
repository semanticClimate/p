---
title: Analysis of Climate Reports 
date: 2024-12-10
description: All the projects with semanticClimate
author: RK 
summary: What we do at semanticClimate
hide: true
tags:
  - hackathon
---

## Introduction

This is the summary of the projects semanticClimate is doing. 

This will give the idea about how to start with any climate report published in pdf that is not machine readable and also not in semantic form.

### Structure of the IPCC/AR6 Report 

### [CLICK HERE](https://semanticclimate.github.io/p/en/posts/ipcc_resources/)

### Selecting/Choosing a chapter of IPCC report

- [All the chapters in semantic HTML](https://github.com/petermr/amilib/tree/main/test/resources/ipcc/cleaned_content)
  
- Use `html_with_ids.html` for all the chapters in different working groups. 

### Extracting Keywords from the Chapter

- The wordlist is created for all the words/phrases which are not easy to understand. This can be created manually or with some keyword extractor.
  - [AR6/WG1/Chapter10_Linking Global to Regional Climate Change](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/wg1ch10.txt)
  - [AR6/WG1/Chapter02_Changing State of the Climate System](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/wgIchap02.txt)
  - [AR6/WG2/Chapter05_Food, Fibre and Other Ecosystem Product](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/foodfibre_wordlist.txt)
  - [AR6/WG2/Cross-ChapterPaper07_Tropical Forests](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/forest_wordlist.txt)
  - [AR6/WG2/Cross-ChapterPaper06_Polar regions](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/wordlist_polar.txt)
  - [AR6/WG2/Chapter04_Water](https://github.com/semanticClimate/internship_sC/blob/Madhan/IPCC_AR6_WG2_Chap04_Specific)
  - [AR6/WG2/Chapter07_Health, wellbeing and the changing structure of communities](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/wordlist/wg02chapt07_wordlist.txt)

### Creating Wikimedia enhanced dictionary from the wordlist

- Dictionary created from the wordlists extracted from different chapters of the IPCC report
  - [AR6/WG1/Chapter10_Linking Global to Regional Climate Change](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/wg1chap10_dictionary.html)
  - [AR6/WG1/Chapter02_Changing State of the Climate System](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/wg1chap02_dict.html)
  - [AR6/WG2/Chapter05_Food, Fibre and Other Ecosystem Product](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/foodfibre_dict.html)
  - [AR6/WG2/Cross-ChapterPaper07_Tropical Forests](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/ccpforest_dict.html)
  - [AR6/WG2/Cross-ChapterPaper06_Polar regions](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/polar_dict.html)
  - AR6/WG2/Chapter04_Water
  - [AR6/WG2/Chapter07_Health, wellbeing and the changing structure of communities](https://github.com/semanticClimate/internship_sC/blob/main/ipcc/dictionary/wg02chapt07_dict.html)



### Here are the steps to create dictionary from the words.

- Step 1: Use the code **pip install amilib** to install amilib in the terminal.

```pip install amilib```

- Step 2: Use the following code for creating dictionary.

```amilib DICT --words list_of_words.txt --description wikipedia --dict output_dict.html --figures --operation create```

- input file : list_of_words.txt
- output file : output_dict.html

This will create dictionary in html enriched with information from Wikipedia with figures related to the term.

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/dict_pic1.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

### Colab notebook for creating dictionary

- [CLICK HERE](https://colab.research.google.com/drive/1mDJcNLGcsP8XM-fzGP6n6A7ozLlq09bE#scrollTo=IijmJ5rgF0jF)

In the Colab notebook, the wordlist in txt file is uploaded from the local system and then the dictionary is created from code mentioned in the code cell of the note book. All the steps were given in the Colab notebook for easy usage of the tool `amilib`

### Climate Report Annotated with Dictionary

The different chapters from the IPCC contains many words that are difficult to understand while reading the report. So, the dictionary has been created for those words that are enriched with Wikipedia information alongwith the figures. This dictionary has been used to annotate chapters. Annotated report makes it easily understandable to any group of the people.

The steps has been demonstrated in the **colab notebook**. 

- #### [CLICK HERE](https://colab.research.google.com/drive/1Rsf7BtGM5v9LAkKvEcEWbK7fHFDiB0Pd#scrollTo=roxFApmqb4E9)

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/markup_chap03.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>


 




