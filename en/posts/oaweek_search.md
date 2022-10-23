---
title: Searching for climate knowledge
date: 2022-10-22
summary: Approaches to search 
author: Peter Murray-Rust
tags:
  - pdf
  - xml
---

# OA Week 2022: searching for climate knowledge

There several ways of searching for knowledge. Prepared navigation (e.g. book, movie) is one but is reader-dependent; we concentrate on:

## natural language processing (NLP)

This uses mixtures of sets of words (dictionaries), linguistic rules and machine learning to analyse 
documents. NLP is increasingly multilanguage and has rules for parts of speech, compound words, 
diacritics, inflexions sentence structure and much more. 

## keyword (supervised) search

The commonest way of searching (Google, Bing, etc.). It usually relies on the content being text, or indexed into text. For specific terms (e.g. names, 
scientific objects) it can be precise but for general terms (e.g. "justice") it can be very broad. Often the precise term doesn't occur in the 
article and we need synonyms (e.g. "nitrous oxide" is a synonym for "N2O"). 
We tackle this by creating a large expandable set of **dictionaries** with precise terms, synonyms and translations which are used for **supervised** search. We use NLP tools and Wikidata to help precision (e.g. *stemming* and *lexemes*)

## unsupervised search

When we don't know what the content is like or what we should search for, we use **unsupervised** 
search. "Tell me the most important terms in this document", "which documents are most similar to 
each other". We use NLP tools to identify tokens (words, phrases and sentences) and parse them (e.g. finding parts
of speech (PoS tagging)). A common ML approach is to measure the lexical or linguistic distance (similarity) between
tokens and create clusters of tokens. (To understand clustering create an [OpenKnowledgeMap](https://openknowledgemaps.org) which 
analyses Open Access documents).

## Toolkits and material

Over the last 10-20 yeards there has been a huge increase in cutting-edge Open NLP tools: wordlists, parsers, ML tools. 
These exist in most common languages (Java, C++, R); here we use Python which is very comprehensive (and often 
wraps the C++ or Java tools). Most of the functionality is in `nltk` or `spaCy` and these can be automatically 
called from our tool `docanalysis` (created by Shweata N Hegde). (Think of `nltk` , `spaCy` as components (gearbox, wheels) and 
`docanalysis` as a finished vehicle). There are more than 50 components in our tools all of which are automatically 
loaded/installed into your machine or Colab. These components provide different ways of searching; an example is abbreviations

## abbreviations

(more later)
