---
title: Overview of semanticClimate tool amilib
date: 2026-02-24
description: Introduction and tutorial for the usage 
author: RK
summary: Detailed description of the python library 
hide: true
tags:
  - hackathon
---

**Release Category**: `Beta`

**Developed By:** Peter Murray-Rust

```amilib``` has tools for finding, cleaning, converting, searching, republishing legacy documents (PDF, PNG, etc.).

It is a Python library designed for document processing, and dictionary creation.

We can create dictionaries using ```amilib``` from existing set of words.
The library simplifies data extraction and manipulation, offering a user-friendly interface for processing data formats like HTML and XML. It ensures that complex operations like term marking and dictionary building can be performed with minimal coding effort.

**Primary functionality:**
- **DICT:** Create/edit/validate AMI dictionaries (words → dictionary XML/HTML), optional Wikipedia/Wikidata/Wiktionary descriptions.
- **HTML:** Create, transform, annotate HTML (e.g. dictionary-based annotation).
- **PDF:** Convert PDF → HTML (pdfminer/pdfplumber), optional images, page ranges, clipping.
- **SEARCH:** Search and annotate HTML, build indexes (annotate, index, no_input_styles).

**Primary inputs:**
- DICT: word lists, existing dictionary files, description sources.
- HTML: HTML files, dictionary for annotation.
- PDF: PDF files or paths.
- SEARCH: HTML paths, dictionary (for annotate).

**Primary outputs:**
- DICT: `.xml` or `.html` dictionaries.
- HTML: annotated or transformed HTML.
- PDF: HTML (and optionally images) from PDF.
- SEARCH: annotated HTML, indexes.

**Main file types for transfer:** `.xml`, `.html`, `.pdf`, dictionary formats (AMI XML/HTML).

### Installation

- Use `pip` to install the tool/package. Use this code `pip install amilib` to install latest amilib version.

Check the successful installation with command : `amilib --help`. You should see a help message come up.

- #### [Installation Guide](../posts/ami_install/)

- **GitHub Repository** - [github](https://github.com/petermr/amilib)

### Tutorials (Jupyter Notebook/ Colab Notebook)
  
  - [Creating Wikimedia enhanced dictionary with amilib from wordlist](https://colab.research.google.com/drive/1QNETQ3bZFgOvu2iyZCZ0jM9tjTWuUiPi?usp=sharing) 
  
  - [Creating JQuery Datatables from the retrieved articles](https://colab.research.google.com/drive/1RumRjh0EnKcLDmXhtYvxqMKi39BX_sB1?usp=sharing)

#### [CLICK HERE for more tutorials](https://semanticclimate.github.io/p/en/posts/ami_tutorial/)