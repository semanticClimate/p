---
title: Workflow for semanticClimate
date: 2022-10-23
summary: Steps in processing a climate chapter
author: Peter Murray-Rust
tags:
  - oaweek
---

## Steps in processing a Chapter

We assume 

### PDF2HTML
The raw chapter is in PDF which requires messy heuristic processing into HTML. We have done this for a small 
number of chapters and will be automating it as soon as we can. Here's a typical chunk. 

<img src="{{ '/static/img/chap02.png' | url }}"/> <!-- check this -->

There are no words, lines, paragraphs in PDF. The tools usually guess right but here there's a problem of the 
top and left margins. We have to set clipping boxes. Sometimes these haven't worked. But generally we can get HTML
(although things like font styles, subscripts, etc. are often trashed.



