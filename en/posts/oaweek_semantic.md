---
title: Explaining semantic
date: 2022-10-23
summary: What semantic means and what it offers
author: Peter Murray-Rust
tags:
  - introduction
  - examples
  - oaweek
---

## What's semantic?

"semantic" means that at some level machines can "understand" data (in this case text). 

### example:
>Two countries (China, India) contributed more than 50% to the net
6.5 GtCO2eqyr-1 increase in GHG emissions during 2010-2019 (at
39% and 14%, respectively), while ten countries (China, India,
Indonesia, Vietnam, Iran, Turkey, Saudi Arabia, Pakistan, Russian
Federation, Brazil) jointly contributed about 75% (Figure 2.9) (see
also Minx et al., 2021; Crippa et al., 2021).

As a human you understand some of this and not other parts; by default a machine "understands" nothing. It sees 
```"T", "w", "o", "c", "o" ...```
(no words, no sopaces, no newlines and no understanding of the)
We need to give it rules (or models) that give it the power to parse this into objects it can process. 

### syntax

Unfortunately the reports are only available (2022-10) in PDF. Unlike HTML this is very unpleasant to process 
and introduces errors. PDF2HTML is the weakest part of our toolchain. If the authors could make their text-processor
output available it would be a huge help.

`NLTK` and `spaCy` and other tools have methods for parsing sentences and extracting the syntax. Here's 
an online part of speeh tagger and chunker [parser from CMU site](https://www.link.cs.cmu.edu/cgi-bin/link/construct-page-4.cgi#submit) you can try it!
It gives:
```
(S (NP (NP Two countries)
       (SBAR (S (NP China , India)
                (VP contributed more
                    (PP than
                        (NP 50))
                    (PP to
                        (NP (QP the net 6.5)
                            GtCO2eqyr-1))))))
   (VP increase
       (PP in
           (NP GHG emissions))
       (PP during
           (NP 2010))))
```
It picks out nouns/noun_phrases (NP)
`/Two countries/ /China , India/ /the net 6.5) GtCO2eqyr-1)/ /GHG emissions/ /2010/`
(gets one wrong `increase` is a noun not a verb). And verbs VP (`contributed`), and prepositions (PP)
but has no idea what they mean.

### general semantics

We concentrate on nouns and now add meaning to them.  
* *`Two countries`* : `NLTK` knows about numbers and also that `countries` is the plural of `country`
* *`China , India`* : `spaCy` knows these are countries 
* *`6.5`* : `NLTK` and `spaCy` know is a floating point number 
* *`2010`* : the tools know this could be a date

### Wikidata semantics
* *`GHG`* : we can automatically look this up in Wikidata.org and get:
```greenhouse gas (Q167336) : GHG
as in an atmosgphere of a planet (usually Earth) that absorbs 
and emits radiation within the thermal infrared range and 
causes the greenhouse effect
48 statements, 81 sitelinks - 07:22, 15 October 2022

Marshfield Municipal Airport (Q650060) : GHG
airport
22 statements, 5 sitelinks - 05:58, 3 October 2022

etc.
```
Wikidata has several entries for `GHG`. The top one is what we want, with an `identifier` of 
`Q167336` . This illustrates *ambiguity* - common words and acronyms/abbreviations often have multiple meanings. 
In this case  we could see if the nouns in the `description` ("gas", "atmosphere", "planet", "radiation"...)
are common in the text of the report. That's one role of our `dictionaries`

### report semantics
`GtCO2eqyr-1` occurs frequently and we can collect these sorts of terms. However they need human interpretation (this is badly 
formatted and should read
GtCO<sub>2</sub>eq yr<sup>-1</sup>. It reads "gigatonnes of carbon dioxide equivalents per year". We also tackle this 
by creating it as an entry (or synonym) in a climateChange dictionary)

### hyperlinks

Hyperlinks are assumed, not explicit.
* `(Figure 2.9)` is a link to Figure 2.9 (which is not explicitly semantically labelled)
* `(see also Minx et al., 2021; Crippa et al., 2021).` are 2 links to the bibliography (again needs messy 
heuristics)

### argumentation

We'd like to extract more meaning than just the nouns ("which countries contributed most to the emissions"). There 
are research tools that can address this but they are problem-specific. 

