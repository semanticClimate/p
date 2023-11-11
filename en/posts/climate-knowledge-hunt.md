---
title: Climate Knowledge Hunt Hackathon Material
date: 2022-10-22
description: This is everything you need to know
author: the team
tags:
  - semanticclimate
  - outreach
  - notebook
---
Rendered below is the Colab Notebook we prepared for the Hackathon. Scroll down to see the results. 

<script src="https://gist.github.com/ShweataNHegde/069453dae0db56c01cb4c78e5847842f.js"></script>

## Highlights from Notebook
You'll find the code snippets and commands in the embedded Notebook. Here are some interesting tidbits. 
### Convert PDF to HTML using [`py4ami`](https://github.com/petermr/docanalysis)
First step in making IPCC Reports semantic is to convert dumb PDF needs to HTML. `py4ami` does the job for us. Here's the preview of converted HTML. 


<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://htmlpreview.github.io/?https://github.com/petermr/semanticClimate/blob/main/ipcc/ar6/wg3/Chapter02/fulltext.html' style width=100% height=300px></iframe></div>

### Extract abbreviations using [`docanalysis`](https://github.com/petermr/docanalysis) and write to an ami-dictionary
`docanalysis` automatically extracts abbreviations, their full forms, and potential Wikidata IDs.

```
<entry name="VRE" term="Variable Renewable Energy" wikidataID="['//www.wikidata.org/wiki/Q7915732']"/>
  <entry name="SDGs" term="sustainable development goals" wikidataID="['//www.wikidata.org/wiki/Q7649586']"/>
  <entry name="TPES" term="total primary energy  supply" wikidataID="[]"/>
  <entry name="TFC" term="total final energy consumption" wikidataID="[]"/>
  <entry name="CSP" term="Concentrating  solar  power" wikidataID="[]"/>
  <entry name="LIBs" term="lithium-ion batteries" wikidataID="['//www.wikidata.org/wiki/Q106988181']"/>
```


As an example, [www.wikidata.org/wiki/Q7915732](www.wikidata.org/wiki/Q7915732) takes you to the Wikidata pages that tells you all about Variable Renewable Energy. The Wikidata page also points you to the Wikipedia page: [https://en.wikipedia.org/wiki/Variable_renewable_energy](https://en.wikipedia.org/wiki/Variable_renewable_energy).

### Supervised search using dictionaries from other sources
Worcloud generated based on number of hits for terms in the dictionaries. 
<img src = '{{ "/static/img/climate_terms.png" | url }}'>

### Annotate and index HTML version of IPCC reports using [py4ami](https://github.com/petermr/pyami)
`pyami`, using abbreviation and other climate-related dictionary, can annotate the HTML version of IPCC Reports. [Click here](https://htmlpreview.github.io/?https://github.com/petermr/semanticClimate/blob/main/ipcc/ar6/wg3/Chapter02/annotated/fulltext_emissions.html) or check out the preview below. 

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://htmlpreview.github.io/?https://github.com/petermr/semanticClimate/blob/main/ipcc/ar6/wg3/Chapter02/annotated/fulltext_emissions.html' style width=100% height=300px></ifranme></div>

