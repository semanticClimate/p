---
title: docanalysis | Corpus Sectioning, Entity extraction and Text Mining
date: 2026-02-25
description: Introduction and User Guide
author: RK
summary: Tool Overview and Practical Tutorial
hide: true
tags:
  - hackathon
---

**Release Category**: `Production`

**Developed By:** Shweata N. Hegde and Peter Murray-Rust

**```docanalysis```** is a command-line tool that processes document collections (CProjects) and performs text analysis. 

It can:

1.  Divide documents into sections
2.  Perform text mining and natural language processing (NLP)
3.  Generate dictionaries of terms
   
It uses custom code along with Python tools like NLTK, and it can use spaCy or scispaCy for extracting and annotating entities. The tool creates summary data and word lists as output.

**Primary functionality:**

- **--run_pygetpapers:** Download papers from Europe PMC into a CProject (creates CTree per article with `fulltext.xml`, `eupmc_result.json`).
- **--make_section:** Section articles from `fulltext.xml` (JATS) into `sections/` directory trees.
- Entity extraction (spaCy/scispaCy): entities (e.g. ORG, PERSON) from sections.
- Dictionary search over sections; output CSV/HTML/JSON.
- **--make_ami_dict:** Build AMI dictionary from extracted entities.
- **--extract_abb:** Abbreviation/expansion extraction → AMI dictionary.
- **--search_html:** Search HTML documents (e.g. IPCC).

**Primary inputs:**

- CProject directory (from pygetpapers or pre-existing) containing CTrees with `fulltext.xml` (and optionally `eupmc_result.json`).
- Dictionary file/URL for annotation or supervised extraction.
- Flags: section names, entity types, spacy model, output paths.

**Primary outputs:**

- CProject with added `sections/` per CTree (sectioned XML).
- CSV/HTML/JSON of sentences/terms/entities.
- AMI dictionary XML (entities, abbreviations).

**Main file types for transfer:** `.xml` (fulltext, sectioned), `.json` (eupmc_result), `.csv`, `.html`, `.json` (output), AMI `.xml` dictionaries.

### Installation

- Use the code `pip install docanalysis` to install **`docanalysis`**

Check the successful installation with command : `docanalysis --help`. You should see a help message come up.

- **Code Repository** - [github](https://github.com/petermr/docanalysis)

- **README file of ```docanalysis ```** : [docanalysis/README.md](https://github.com/petermr/docanalysis/blob/main/README.md)

### Tutorials (Jupyter Notebook/ Colab Notebook)
  
  - [google colab notebook](https://colab.research.google.com/drive/1sT2Die3pV3dLcyHgwZBg3IxS2FJ_8W0-?usp=sharing)
  
  - [Search for specific terms using dictionaries](https://colab.research.google.com/drive/1dbjq89FeIFMgUIzOPJBKg00tqzDe3uvB#scrollTo=jxgMYANusakv)