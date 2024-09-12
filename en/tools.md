---
title: Introduction about semanticClimate tools
description: Information about tools and their tutorial
layout: layouts/post.njk
hideTagsList: true
eleventyNavigation:
  key: Tools
  order: 7
---

The #semanticClimate tools provides an innovative approach to generating and managing climate data efficiently. This page provides an overview of these tools and their practical applications in streamlining the process of climate data creation.

### ```amilib```

 ```amilib``` has tools for finding, cleaning, converting, searching, republishing legacy documents (PDF, PNG, etc.).

 It is a Python library designed for document processing, and dictionary creation.

 We can create dctionaries using ```amilib``` from existing set of words.
 The library simplifies data extraction and manipulation, offering a user-friendly interface for processing data formats like HTML and XML. It ensures that complex operations like term marking and dictionary building can be performed with minimal coding effort.

 **Repository** - [git hub](https://github.com/petermr/amilib/blob/main/README.md)

 **Tutorial** - [google collab notebook](https://colab.research.google.com/drive/1QNETQ3bZFgOvu2iyZCZ0jM9tjTWuUiPi) 
 
### ```pyamiimage```

```pyamiimage``` is a set of tools to extract semantic information from scientific diagrams.

The output of ```pyamiimage``` is an image with annotations of substrate, products and enzymes. 

**Repository** - [github](https://github.com/petermr/pyamiimage)

**README file of ```pyamiimage```** : [pyamiimage/README.md](https://github.com/petermr/pyamiimage/blob/main/README.md)

### ```amiclimate```

```amiclimate``` is a NLP and semantic software and material for managing climate knowledge.

It is a Python code for accessing and transforming key climate documents. A refactoring of the (bloated) ```pyamihtml``` repository and has the functionality for downloading and parsing

1.  IPCC reports
2.  IPCC glossary
3.  UNFCCC reports (COP, etc.)

This repository will NOT have the complete IPCC or UNFCCC corpus , but will have small exemplars.

**Repository** - [github](https://github.com/petermr/amiclimate)

**README file for ```amiclimate```** : [amiclimate/README.md](https://github.com/petermr/amiclimate/blob/main/README.md)


### ```pygetpapers``` 

```pygetpapers``` is a tool to assist text miners. It makes requests to open access scientific text repositories, analyses the hits, and systematically downloads the articles without further interaction. 

It has been developed by  Ayush Garg under the guidance of the OpenVirus community and Peter Murray Rust and Rik Smith-Unna funded by ContentMine

It comes with the packages pygetpapers and download tools which provide various functions to download, process and save research papers and their metadata.

We use ```pygetpapers``` for querying current and past scholarly literature in bulk.

**Repository** - [github](https://github.com/petermr/pygetpapers)

**README file of ```pygetpapers```** : [pygetpapers/README.md](https://github.com/petermr/pygetpapers/blob/main/README.md)

**Tutorial** - [descriptive demo of the literature search with pygetpapers](https://youtu.be/cOW_NTeqErk)

**Tutorial** - [Google collab notebook](https://colab.research.google.com/drive/1-vM3BKV7NjvFXAdLGuqyNMh4VhPq6uMa?usp=sharing)

### ```docanalysis```

```docanalysis``` is a command-line tool that processes document collections (CProjects) and performs text analysis. 

It can:

1.  Divide documents into sections
2.  Perform text mining and natural language processing (NLP)
3.  Generate dictionaries of terms
   
It uses custom code along with Python tools like NLTK, and it can use spaCy or scispaCy for extracting and annotating entities. The tool creates summary data and word lists as output.

**Repository** - [github](https://github.com/petermr/docanalysis)

**README file of ```docanalysis ```** : [docanalysis/README.md](https://github.com/petermr/docanalysis/blob/main/README.md)

**Tutorial** - [google collab notebook](https://colab.research.google.com/drive/1sT2Die3pV3dLcyHgwZBg3IxS2FJ_8W0-?usp=sharing)