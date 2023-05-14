---
title: What are dictionaries?
date: 2023-05-11
description: Learn more about dictionaries!
tags:
  - semanticclimate
---
Dictionaries, also called terminologies, are collections of terms which occur in documents, with explanations and formal identifiers (Wikidata ID, for example).

Here's an example of dictionary of abbreviations created from Chapter 15 of AR6/WGIII. This was created automatically using the tool, [`docanalysis`](https://github.com/petermr/docanalysis).
```
<dictionary title="abb_chapter15">
  <entry name="SCF" term="Standing Committee on Finance">
    <raw wikidataID="Q115097350, Q107564351, Q60753288, Q3421536"/>
  </entry>
  <entry name="LDCs" term="Least Developed Countries">
    <raw wikidataID="Q752401, Q177323"/>
  </entry>
  <entry name="ESG" term="environmental, social and governance" wikidataID="Q3817465"/>
  <entry name="TCFD" term="Task  Force  on  Climate-Related  Financial  Disclosures" wikidataID=""/>
  <entry name="OPEX" term="operating  and maintenance expenditures" wikidataID=""/>
  <entry name="GCF" term="Green Climate Fund">
    <raw wikidataID="Q3075923, Q71863830"/>
  </entry>
  <entry name="GEF" term="Global Environment Facility">
    <raw wikidataID="Q384410, Q59639658"/>
  </entry>
  <entry name="AF" term="Adaptation Fund" wikidataID="Q352378"/>
  ...
```
[Full dictionary](https://github.com/petermr/semanticClimate/blob/main/ipcc/ar6/wg3/Chapter15/dict/ipcc_chapter15_man_dict.xml)

We can also manually create dictionaries based on topics of interest (like our intern, Gayathri, created for Chapter 15). Here's a snippet:
```
<dictionary title="finance and investment" version="0.0.5">
  <desc> manually created by Gayathri Jonnalagadda 2023-01-24 </desc>
<entry term="capital" wikidataID="Q1897397" wikipediapage="https://en.wikipedia.org/wiki/Financial_capital"
  desc="money used by entrepreneurs and businesses to buy what they need to make their products or provide their services"/>
 <entry term="Low carbon transition"  wikidataID="" wikipediapage="" desc=""/>
 <entry term="just transition" wikidataID="Q6316391" wikipediapage="https://en.wikipedia.org/wiki/Just_transition"
 desc="Framework developed by the trade union movement to encompass wide range of social interventions needed to secure decent work opportunities and a greener economy"/>
```
[Full dictionary](https://github.com/petermr/semanticClimate/blob/main/ipcc/ar6/wg3/Chapter15/dict/ipcc_chapter15_abb_dict.xml)

### What are dictionaries used for?
- To annotate the HTML reports with Wikidata identifiers. This is a huge step towards making the reports more accessible becuase readers can immediately learn the meaning of these terms in their own languages (assuming Wikidata has that information). 
- Extract information like which terms cooccur, what's the frequency of different terms, etc. 

In the hackathon, we will be creating dictionaries both manually and automatically. 



