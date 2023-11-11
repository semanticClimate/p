---
title: The sources that SemanticClimate can use for Climate Justice
date: 2023-09-19
description: Berlin Barcamp on September 21, 2023 
author: The team
tags:
  - semanticclimate
  - hackathon
---


*A lightly edited transcript of a conversation between Waheb Mehdi and Peter Murray-Rust 2023-09-13 . Discussing what might happen and what resources might be used. However it's also a general overview of what #sC can offer any community or project*
*P:* Can you tell us about your ideas for extracting knowledge on climate justice particularly with reference to the Berlin Barcamp, which is in a weeks time.

*W:* What I'm aiming to do is I'm aiming to build a beginner friendly project which would take climate justice reports from different parts of the world and using semanticclimate tools such as `pyamihtml`, and `docanalysis`.

We could first of all, we could convert the PDF documents of climate justice reports into HTML and we could use `docanalysis` to section those HTML documents into different parts like the *introduction* , the conclusion as far as I know, do analysis also has the feature to extract keywords from the reports.

it could also generate some **summaries** and **summary statistics** like how many times a certain keyword is occurring in the report.
we could use that data and represent that as graphs, using Python, using Python libraries like `matplotlib`, maybe something else.

*P:* Well, that's a fantastic idea.
Let me add some **technical observations**.
First of all, for next week, we're probably going to be limited either to the open access literature or to the text of the IPCC projects that you've been looking at. and we won't know which is most tractable. The current toolkit `pygetpapers` will retrieve the open access literature.
We can look for say, **"climate justice in West Africa"** and that will retrieve a number of papers, maybe a few 100.
and we might then want to cut it down by date or or something of that sort.
When we've got those papers, they go into `docanalysis` which will analyze them for words.

There are two ways that it does this, *supervised learning* and *unsupervised learning*.
if we've got a list of words we're interested in, we can look for those. let's say that we have a vocabulary of climate justice terms we can see which of the papers contain those words because they won't always use the term "**climate justice**".
They might talk about "**loss and damage**" or "**climate inequity**".

A very good way of classifying papers is to find out what words they contain.
*unsupervised analysis* is when you ask the tool to cluster objects so you can categorize them.
`spacy` which is what `docanalysis` runs has got several methods.
One method is that it's pre trained on a number of concepts so we can look for things like countries or organizations and `spacy-docanalysis` will come up with those.
We couldn't, for example, look for "justice" using that.
An unsupervised method is to cluster the words in a text by a number of metrics, e.g. which words co-occur with other words.

*W:* are we going to use supervised approach or supervised approach?
*P:* I think I think we already use both. But if we have a climate dictionary, that will be very powerful in looking for the concepts we're interested in.
*W:*  Mhm So that means that we do unsupervised at the moment.
*P:* we can do supervised if we have dictionaries. one way to get dictionaries is actually to do a search of the literature.
and then use `docanalysis` to group the words we get out and then decide if we feel that those words are representative of climate justice.
at the same time, we can also link them to Wikipedia and Wikidata.
Does that make sense?
*W:* Sure.

*P:* we've got several different methods. All of these are what you might call research so that we don't know which of these is going to work. But I think I would be fairly confident in getting a word list which can be turned into a semantic dictionary.
We have tools for that and I'd be fairly optimistic that docanalysis could extract those sentences which had these which had these terms in so that you could find out how people were using the terms.
yeah.

*W:* what happens after we create these dictionaries?
Would that be our end goal or can we do something with the dictionaries?
*P:* First of all, what we do at barcamp depends on what we can offer. the people who turn up.
let's assume that we've got people interested in climate justice and people who are able to run Python programs and they get together in a group so that any question can be put into the system and we'll find out whether that method works or not during that.
We'll certainly come up with a list of terms and we'll look those up in wiki data because that gives us a link back into all the Wikimedia support of that.
if you've got something like climate justice, you can go to the wiki data page on it, the Wikimedia, the Wikipedia page on it, you can find diagrams which relate to it, you can find papers which are about it and so forth.
wikidata, for example, has got a list of open access papers.
and that's a very good way into the literature. what we want to do is describe this before the meeting, work on the tools and make sure that they run and then see what the barcampers want to do with them. 

*P:*
I'm hoping that this will persist after this.
the bar campers are a way of alpha testing whether this is a useful way forward.
currently, the focus is that we can get all of the three tools to work on the Climate Justice in the scholarly literature and IPCC reports.
we don't yet know which parts of the IPCC report contain information on climate justice. They have to be converted into html first of all.

*Discussion aboout where to find Climate Justice in IPCC is chopped*
...But the problem is those reports may not be very easy to read because they'll be in PDF and the PDF is still not very easy to convert.
*W: * if we can turn them into HTML, that would be really good.
*P:* Right.
*W:* we could also try to search for climate justice related concepts in the **IPCC AR6** reports.
*P:* I think it would be very valuable if you could manually browse the IPCC AR6 reports and find out where there's information on climate change.
There is an index created by IPCC.
It's not hyperlinked.
I would look in WG2 which is about adaptation because that I think may have climate justice.
It may also occur in WG3 which is about mitigation,
But does that cover roughly the your idea?
*W:* It does, we could find a climate justice related text in the IPCC AR6 reports and maybe we could just apply the tools on those specific sections and see what we can come up with.
*P:* That might well work.
