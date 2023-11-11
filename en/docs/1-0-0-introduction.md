---
title: Introduction
date: 2023-05-10
description: What challenges is semanticClimate addressing?
tags:
  - semanticclimate
---

## What are IPCC Reports? Why is #semanticClimate interested in them?
So about 30 years ago, the world realized that the climate was changing, and human activity was causing this. So, many people got together with the United Nations and decided to set up an institution: The International Panel on Climate Change. It would regularly report on climate change, its causes and what we could do to react to the effects of climate change. The IPCC is global. People probably from almost every country in the world are involved, and it's reported on a very long time scale.

It reports every 5 years, and those are called Assessment Reports. Over 30 years, we have had 6 of these. The report is not just a single document. It's a multiplicity of documents. These documents are large. The AR 6 (which is what #semanticClimate is working with) is about 15,000 pages. 

The reports are very difficult to read, and even experts don't find it easy. The reports are not just recording what happens but are also the basis for international negotiation. These reports are sent to member governments and have to be agreed upon by all the members as being the communal view at a particular point in time. The reports are written in scientific language and in language which helps governments make policy. At the moment, we think the main important things in the reports are:
1. Technical Summary (TS) describes the technical basis 
2. The Summary for Policymakers (SPM) contains recommendations put forward to policymakers across the world.

The basis of the ones we've looked at so far is that they make statements – scientific facts – with annotation as to how confident the authors are about these facts and how likely the facts are to happen. So, in the Synthesis Report Longer report -- a top-level summary document of 80 pages -- we calculate that there are probably nearly a thousand facts. Every fact is backed up by evidence, and that evidence is often in the captors of other Working Group reports. So there are 6 reports altogether Working Group 1, 2, and 3, and Special Reports on oceans, on climate change of 1.5 degrees, and the change in the climate.

All facts and links to other reports are printed but not easy to extract from PDF.

## Reports are published as PDFs only, which is a problem
As far as we know, we've only seen PDFs on the website. PDF has the advantage that it can be printed in a nice form. That's about it. It's not easily alterable. It’s difficult to cut and paste from it., search it, reorganize or reopen parts of it, and so on.

They come in 2 stages. The first draft is written in single-column text. It looks a little bit like preprints on scientific websites. And then the final customized version. It's got the rough edges removed and is often double-column rather than single.

## What’s #semanticClimate doing?
We first convert  PDF to HTML. HTML opens up a lot of interesting ways to make the reports accessible.

For example, you've got GHG, a shorthand for Greenhouse Gas. Unless you know the jargon, it's a lot of work to look it up. We identify jargon and link it to resources from elsewhere to help interpret it. We look this up in Wikidata. It will tell you about various greenhouse gases: water, carbon, dioxide, nitrogen, oxides and so on. We're making those links. This will help people find the knowledge the world has amassed. People can jump between different reports easily using hyperlinks.

We're also making it easier to read in several ways. We are building search tools to find words and phrases. For example, Zoonsis, which means diseases in animals which might infect humans. Many people won't know that word. So, we hyperlink that to a definition. We're also looking at using modern transformers to help convert definitions into something more accessible to different types of readers. With extracted phrases, we build an index so that you can look for them. Let's take Zoonosis, again. Our tools will tell you where in these 15,000 pages you can find information about that.

Ultimately, the idea is to take all of what we have indexed or annotated and put them in the network or knowledge graph. 
What’s a Knowledge Graph?
You look up India on Wikipedia. It will give you not only information about India but also have links to, let’s say, list all the States of India, link to the climate in India, etc. Or it might say India is part of Asia and take you to Asia as a higher-level concept. 

A common way of thinking about parts of knowledge graphs is that they've got:
1. implied hierarchy with very central, often abstract terms, and then surrounded by a list of specific terms.
2. links (city's name and its geographical coordinates, and those coordinates might be linked to the climate in that region)

Now a knowledge graph is a powerful way of putting data into machines, and much of the world's data is now created as graphs and traditional relational databases. So we have powerful engines that can answer these search questions. And one of these engines and its language SPARQL is available through the Wikimedia system. It's called Wikibase. It allows you to enter this knowledge graph and search for it.