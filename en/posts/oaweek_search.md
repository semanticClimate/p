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

This uses mixtures of sets of words (dictionaries), linguistic rules and machine learning to analyse documents. NLP is increasingly multilanguage and has rules for parts of speech, compound words, diacritics, inflexions sentence structure and much more. 

## keyword (supervised) search

The commonest way of searching (Google, Bing, etc.). It usually relies on the content being text, or indexed into text. For specific terms (e.g. names, 
scientific objects) it can be precise but for general terms (e.g. "justice") it can be very broad. Often the precise term doesn't occur in the 
article and we need synonyms (e.g. "nitrous oxide" is a synonym for "N2O"). 
We tackle this by creating a large expandable set of **dictionaries** with precise terms, synonyms and translations which are used for **supervised** search. We use NLP tools and Wikidata to help precision (e.g. *stemming* and *lexemes*)

## unsupervised search

When we don't know what the content is like or what we should search for, we use **unsupervised** search. "Tell me the most important terms in this document", "which documents are most similar to each other". We use Natura
