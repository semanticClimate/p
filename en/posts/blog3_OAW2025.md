---
title:  What Semantic Climate Brings to Open Access in 2025
date: 2025-10-18
description: Personal blogpost from Peter Murray-Rust
author: Peter Murray-Rust 
tags:
  - semanticclimate
---

(Personal blog from Peter Murray-Rust)

## Introduction

semanticClimate is about 5 years old as an organization. We'll deal with the history later. It's committed to making public knowledge available in a frictionless form for everybody. So it's a new, or fairly new, approach to take the current scientific literature, make it semantic, and then republish it in forms which anyone can read and understand.

The technology that we are going to present is available to most subjects, so it's not just on climate. But our examples are going to be on climate, because our major mission is to make climate information available to everybody.

## What We Do

We take the current scientific publications to which we have access and which we can reuse without friction. That means that we can take a paper, we can edit it, we can add bits to it, we can take bits away from it. We can merge papers together, we can build indexes, we can create images and data tables—many, many things which are not done at the moment, which enhance the use of the literature.

The current open access approach is based on individual papers. Find this paper, download it and read it with human eyes. So we're looking at an approach which takes this and makes it semantically available, which means it's available to people without eyes because we can turn it into sound or other types of information, and also to machines, who can search it and build new knowledge products out of it.

## Our Repository Sources

We have built tools which are able to access a number of open access repositories. We'll deal with those in detail later, but just to give a list of them:

We started with Europe PubMed Central, which is a sort of mirror of PubMed Central with additional things in it. It's very high quality publication, and we can get a large number of articles in that. Technically, it's bioscience only, but there are a lot of articles which are included by PubMed Central because they happen to be in an issue of a journal with a common theme and things like that. It's a large and significant amount of the literature, and it's got a high proportion on climate because climate touches bioscience, bioscience touches climate, and it's of general interest.

The other repositories are:

OpenAlex, a wonderful creation of Heather Piwowar and Jason Priem, which is probably the largest metadata source at the moment. OpenAlex has metadata for over 100 million publications and leads to full text for many of them.

Then we have bioRxiv and medRxiv, which look at the biological and medical literature. There's a lot of overlap with PubMed Central and OpenAlex, but one of the key things of bioRxiv and medRxiv is that they post the preprints as soon as they come in, so that you can read them literally on the day they are submitted.

And then, we want to promote the use of Global South repositories, and we are able to extract publications from Redalyc, which is a Latin American collection of publications run by Arianna Becerril-Garcia—a wonderful initiative from her and colleagues.

So we have a lot of input. And our tools can, in principle, be extended to other repositories. Some countries have repositories—the Netherlands was one of the first with DARE, and the French with HAL. Unfortunately, in my view, the UK does not have a national repository, and rather, every university has its own repository, which makes it much more difficult to reuse the open literature. The same is true in the US, and even worse there, because some of their repositories are not owned by the universities, but by commercial providers and getting frictionless material out of that is a lot of work.

## Our Process

We use a subset of the literature which we can use as frictionless without fear. We've built tools which allow our users—and that's anyone in the world—to query these repositories using text-based queries. So you can put in the words and phrases that you're interested in, and download the papers which the repositories provide. These are normally many more than you want because I believe it indexes any occurrence of those words in the papers. We have tools later on to filter out those which are most useful for particular queries.

You put your query in, it retrieves thousands of papers, and we select a subset, perhaps the most recent ones, or ones from particular sources. And then, having downloaded those—and this is a slight bottleneck, because downloading, particularly in the Global South, it's a time-consuming process - it may take several seconds or even minutes to download a paper. But once downloaded, it's there for good in your filestore, because you don't have to update it, because these papers and preprints are hardly ever updated.

Now you've got your own personal repository, which we call a corpus. You build your corpus on your machine. This corpus can be hundreds of articles, or thousands, or even more. Although it takes quite a long time to download 10,000 articles—I've done it, but you need to have a good reason for doing it beforehand.

## Publisher Considerations

And unfortunately, many publishers will react negatively to large downloads of their material, not because it's a problem on their servers, which it isn't—any modern server should be able to cope with it—but because it destroys their control of the readership. if you download from certain publishers, which I will not name, you may get severe pushback even if you've done nothing wrong.

However, if you download from the repositories I mentioned, and you alert them to the fact that you are likely to have bulk downloads (that's very important). We say to EuropePMC, "we're likely to download a lot of papers, please make sure that we're doing it okay, and we're honoring your rate limits", then they're very positive about it.

## Semantic Analysis and Annotation

You download your papers. You've now got, let's say, a few hundred papers (I use the word paper for article because that's my generation). You've now got a few hundred articles, and want to make some sense of them. Our team is going to show you later what they've done, but here's a sneak preview.

The next step after downloading the papers, which is automatic, is then to find the keywords and keyphrases in them. That's particularly useful because let's say you have an article which discusses "Climate Justice".
It might only mention it once because it might be about something completely different and just mention that in passing. Or it might mention it 20 times.

We've published a paper in the Journal of Electronic Publishing on "Semantic Publishing and Climate Justice," (https://journals.publishing.umich.edu/jep/article/id/7206/) and that will give a very good idea in detail as to how we do it. As an overview, we select the most important articles by key phrases, and then we are able to extract the text from those. We then analyze the text and annotate it, and we annotate it both by using public key phrase collections, particularly in things like IPCC, climate, UN climate change reports, which creates its own vocabulary, and also by using Wikipedia and Wikidata.

This is very much based on controlled vocabularies. Some of them controlled by other people, and some controlled by us. And it's incredibly powerful and rapid for selecting the articles that you want.

## Knowledge Enhancement

Now we've selected the articles, we can go through and we can extract those parts of the article which are particularly relevant to our subject, so paragraphs say, which have got lots of mentions of climate justice. Or we can use it to annotate the papers, so we can find where the phrases occur.

Then we have the next part, which is to link those to Wikipedia and Wikidata. Wikipedia is—and we'll have another blog post on this—the largest collection of semantic knowledge, public semantic knowledge anyway in the world. It's very well organized, and we've built tools which allow us to look up all these key phrases in Wikipedia and Wikidata, and link them into our publications.

## Summary

All of this can be done automatically. Our team is going to show you later how we do it automatically, but in summary, we think of a subject, we pull together the search terms which we think will pull down the papers that we want. We download them, we then find the most important phrases in those papers, and we select on those phrases. We build these into a corpus, which represents the body of knowledge that we want. And then we enrich it by looking up the terms in Wikidata and Wikipedia, so that they make it much easier for humans to read, and much easier for machines to use, for example, by creating a knowledge graph.

And all of those magical things we will do in later posts. But this is the overview of what we're going to show in semantic climate.