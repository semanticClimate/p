---
title: What we are doing?
date: 2024-12-16
description: Describing the process and workflow layout at semanticClimate
author: Taken from meeting transcript (PMR, SW, RK, PB)
tags:
  - semanticclimate
  - outreach
  - notebook
---

## Our Approach

We work by creating, distributing and using software.
We are involved in making climate knowledge semantic and by semantic we mean there's a 
formal structure to the documents or other informations in which specific terms are linked to definitions particularly in Wikimedia such as Wikidata or Wikipedia. These documents are described as a [five-star document](https://en.wikipedia.org/wiki/Linked_data) in [Tim Berners-Lee's approach](https://en.wikipedia.org/wiki/Tim_Berners-Lee). That is it's open, it's semantic, and it can be embedded in the linked open data graph of the world of which Wikidata is the epitome with about 100 million nodes in that. 

## The tools we utilize and are actively working on developing.

Our work at semanticClimate is mainly around the tool set for the content retrieval, creating what we call a corpus or mini corpus of IPCC reports and then some amplification of that. 

Here are three programs called: 
- [pygetpapers](https://github.com/petermr/pygetpapers) which reads the scientific literature automatically. 
  
- [docanalysis](https://github.com/petermr/docanalysis) which analyzes it

And these were written by two of our earliest interns. 
[pygetpapers](https://github.com/petermr/pygetpapers) from Ayush Garg when he's still at school. 
[docanalysis](https://github.com/petermr/docanalysis) from Shweata Hegde who did this while an undergraduate. 

and the third tool a library of utilities called 
- [amilib](https://github.com/petermr/amilib) is written by Peter Murray-Rust, which deals with a lot of the integrase 
and conversion and so on. 

## Objectives

- The ultimate goal is to take the IPCC material and automatically convert it into a standard normalized semantic form. 

- We use HTML as final product and then label it, build dictionaries which are term base on this and label as much as we can. 

- We build knowledge graphs out of that, start to find patterns in the knowledge graphs using machine learning methods. 