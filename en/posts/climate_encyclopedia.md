---
title: semantic Encyclopedia
date: 2025-09-25
description: Structured Collection of informations 
author: Team
tags:
  - semanticclimate
  - outreach
  - notebook
---

#### **What is an Encyclopedia?**

An **Encyclopedia** is a comprehensive reference work that gives us informations about wide range of subjects or on a particular field of knowledge.

It’s a book or a website where you can look up almost any topic and get a clear, summarized explanation.

**For example:**

If you open a dictionary and search for *Climate Change*, it might simply say: “Climate change: a long-term alteration in the average weather patterns of a place.

That’s it, just a short definition.

But if you check an encyclopedia, it will go much deeper. It might explain: What climate change is, causes, effects, examples, and visuals.

#### *This is why encyclopedias are more useful when you want to understand a topic instead of just knowing what it means.*

### Why Use a semantic Encyclopedia?

A semantic encyclopedia helps you *quickly understand concepts*, *summarize research*, and find related information. It can be used for academic analysis, literature review, content search, and even smart PDF annotations, making research and learning faster and more efficient.

### Subprojects

This includes two main subprojects that work together to process climate reports, scientific reports and extract meaningful informations.

1. Keyword extraction 
2. Creating Encyclopedia 

### Workflow

This diagram illustrates how raw documents are processed using semantic tools to extract key terms, define them, and organize the information into structured encyclopedia entries.

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/dict_sC.png" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

### Keyword_extraction

A Python-based tool that uses state-of-the-art Natural Language Processing (NLP) models to extract the most important keywords and keyphrases from the climate reports and scientific text documents.

#### Tool: 

- *keyword extractor has been used to get the list of words and phrases from the document.*

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/words_p1.png" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

### Encyclopedia

- A structured storage system for organizing extracted keywords, document content, and metadata.

- This is enriched with the information from wikipedia. 

- It enables quick access to key concepts and terminology from scientific literatures, climate reports and any text documents.

#### Tool: 

- *amilib is used to create wikimedia enhanced encyclopedia.*

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/dict_p1.png" | url }}' width="500" height="100">
    </td>
  </tr>
</table>
