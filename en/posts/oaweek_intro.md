---
title: Introduction to semanticClimate
date: 2022-10-22
summary: Overview of the range of tools, content and activities 
author: Peter Murray-Rust
tags:
  - pdf
  - xml
---

# OA Week 2022: Introduction to #semanticClimate

We are really excited to offer semanticClimate for OA week. It's a relatively new way of communicating complex topics and 
it's best understood by actually "learning by doing". Don't be frightened by "semantic"; it means using machines to help
with the bits machines are good at ([TimBl's semantic web](https://en.wikipedia.org/wiki/Semantic_Web)), freeing human brains to do what they are best at.

"Climate" is complex! No human understands everything, so it's critical to link different resources: data, text, simulations, etc. "semantic" means they can all talk to each other. Machine<->machine, human<->machine and human<->human. And anyone can be part of this; if you have resource that could be useful join us this week! There's so many levels of knowledge and so many subdisciplines

Our approach can be adjusted for any climate approach, but our examples here are:

- The "Mitigation" [section (WG3) of the IPCC AR6 report](https://www.ipcc.ch/report/ar6/wg3/)
- Novel searching of the OpanAccess literature (with `pygetpapers`)

## Example: "what does 'GHG' mean and why does it matter?"

Many of you will know this means "Greenhouse Gas" in a climate context, but do you know what these gases actually are?
To answer this we rely heavily on Wikimedia: Wikipedia and Wikidata. You can think of Wikidata as the "data items in Wikipedia articles" (though it's much more than that), and this week (2022-10-20) it passed 100*000_000 items! Here's the [wikidata item for "greenhouse gas"](https://www.wikidata.org/wiki/Q167336). It's multilingual ([ग्रीनहाउस गैस](https://hi.wikipedia.org/wiki/%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A8%E0%A4%B9%E0%A4%BE%E0%A4%89%E0%A4%B8*%E0%A4%97%E0%A5%88%E0%A4%B8) and we've already had contributions to our notebooks in 7 languages)

# How this week will work

This is an experiment! Think "us", not "I" and "you". We have working examples of search and analysis tools and also content (IPCC) with videos and text. The week is largely asynchronous; you can try these in your own timezone at your own pace. There are discussion tools so you can leave questions or offer content. We'll aim to have a time which most people can access (probably 1230 UTC, where we normally meet with India and Americas) for an hour or so on Zoom. We stress "learning by doing" and also constantly evolving software, documentation, content, examples. These work "most of the time" but may depend on experience and location ([Perpetual beta](https://en.wikipedia.org/wiki/Perpetual_beta)); if you have problems, then identify them, and if you can, help to fix them.

We expect that the content and approach will change a lot during the week.

Typical journeys might be:

## term extraction

- watch video on term extraction
- try the Colab/Jupyter notebook on Chapter02 (tutorial)
- have a question, so post on discussion list/Etherpad
- then try Notebook on Chapter11 (experiment!)

## creating dictionaries

- watch video on creating dictionaries
- watch video on markup using dictionaries
- try Colab/Jupyter Notebook on Chapter02 with prepared dictionaries
- try on Chapter02 with `country.xml` (experiment!)

## search OA literature

- search for `climate justice` in EuropePMC using `pygetpapers`
- automatically download (say) 50 papers.
- skim-read to determine the ones you might be interested in
- refine query (dates, Boolean queries, etc.)
- repeat
- analyse results with `docanalysis`

# Suggested reading of blog posts

## [Communication](oaweek_communication.md)

This outines how we work during OAWeek

## oaweek_intro.md

This file

## [Semantic](./oaweek_semantic.md)

Explains "semantic" and why we are doing this. Read early.

## [Search](./oaweek_search.md)

Explains what the most important tools do. Also watch the videos

