---
title: A Climate Chatbot for Trusted and Transparent Climate Information
date: 2026-07-01
description: Making Climate Knowledge Accessible with Open-Source AI
author: Aleena Harold Peter and Renu Kumari
tags:
  - semanticclimate
  - outreach
---


## Building a Responsible Climate Chatbot

Chatbots serve as a useful tool for knowledge, answering questions within seconds. However, when the topic is about something as significant as climate change, accuracy and reliability matters as much as speed.

Motivated by this need of reliable information, we introduce the Climate Academy chatbot, which is a collaborative effort by Climate Academy, semanticClimate and Open Knowledge Foundation (OKFN), as a part of OKFN's AI Learning Labs initiative. The goal was to make climate knowledge more accessible to everyone, keeping information clear, factual, and credible.

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events2026/interface_p1.png" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### *Figure 1. The Climate Academy chatbot interface.*

## Objectives 

- Semantic Search
  - Understand meaning, not just keywords
- Retrieve Relevant Content
  - Find the most relevant sections from the Climate Academy book.
- Grounded Answers
  - Generate responses strictly from retrieved content — no hallucinations.
- Source Citations
  - Every answer includes a reference to the original book section
- Multi-User Support
  - Handle concurrent queries with a production-ready backend
- Production-Ready
  - Built for reliability, scalability, and real-world deployment

## The Knowledge Behind the Chatbot

The Climate Academy chatbot is based on *Climate Academy: The Student Guide, written by Matthew Pye*. Written for high school students, it introduces climate science in a way that is scientifically accurate and easy to understand.

## How the Climate Academy Chatbot Works

Climate knowledge is often difficult to navigate as it is scattered across a plethora of long reports. The Climate Academy chatbot makes learning easier by providing clear and reliable answers in simple language.

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/CABot_workflow.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### *Figure 2. Workflow of the Climate Academy chatbot system.*

- Knowledge resources (PDF/HTML)
- Section Parser
- Text Chunking
- Embedding
- Vector Store
- User Query
- Retriever and LLM
- Answers and Citations

## What Makes a Climate Chatbot Responsible

A chatbot is responsible when it is built on trusted sources, clear design choices and thorough testing, so that it can answer questions appropriately. The following factors describe what makes a chatbot responsible:

* Reliable Knowledge: The chatbot uses trusted climate resources to ensure accuracy and reduce misinformation.

* Transparency: The chatbot should show the sources of information from where they have constructed the answer, in order to verify its credibility to the users.

* Fairness: The chatbot should be able to express how climate change affects different communities from different geographical regions in a balanced and respectful way.

* Accessibility: The chatbot uses simple language to present climate knowledge in such a way that everyone understands.

## Conclusion

The Climate Academy Chatbot provides reliable information from Climate Academy: The Student Guide in clear and accessible way for an interactive learning experience.

#### Blog written by: 

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;text-align:center;">

  <div>
    <img src='{{ "/static/img/members/Aleena.jpeg" | url }}'
         alt="Ms. Aleena"
         style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
    <p><strong>Ms. Aleena Harold Peter</strong><br>Intern at semanticClimate and affiliated with Gopalan College of Engineering and Management</p>
  </div>

  <div>
    <img src='{{ "/static/img/events2026/renu_pic1.jpg" | url }}'
         alt="RK"
         style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
    <p><strong>Dr. Renu Kumari</strong><br>#semanticClimate; BRIC-National Institute of Plant Genome Research (BRIC-NIPGR), New Delhi, India</p>
  </div>
</div>  