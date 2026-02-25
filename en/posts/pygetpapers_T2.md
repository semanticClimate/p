---
title: pygetpapers | Automated Retrieval of Open Access Scientific Literature
date: 2026-02-25
description: Introduction and User Guide
author: RK
summary: Tool Overview and Practical Tutorial
hide: true
tags:
  - hackathon
---

**Release Category**: `Production`

**Developed By:** Ayush Garg

```pygetpapers``` is a tool to download papers and metadata from open-access repositories. It makes requests to open access scientific text repositories, analyses the hits, and systematically downloads the articles without further interaction. 

It has been developed by  Ayush Garg under the guidance of the OpenVirus community and Peter Murray Rust and Rik Smith-Unna funded by ContentMine.

It comes with the packages pygetpapers and download tools which provide various functions to download, process and save research papers and their metadata.

We use ```pygetpapers``` for querying current and past scholarly literature in bulk.

**Primary functionality:**
- Query and download from Europe PMC, bioRxiv, medRxiv, Crossref, OpenAlex, Redalyc, SciELO, Upspace.
- Output: timestamped directories under `~/pygetpapers/` (or custom path) with per-article folders.
- Optional: XML fulltext, PDF, HTML; CSV of results; DataTables HTML + JSON for interactive browsing.

**Primary inputs:**
- Query string, API/repository choice, limit, date ranges, flags (e.g. `--xml`, `--pdf`, `--makecsv`, `--datatables`).

**Primary outputs:**
- **Directories:** `{output_root}/{repo}_{timestamp}/` with `{paper_id}/` subdirs.
- **Files:** `fulltext.xml`, `fulltext.pdf`, `fulltext.html`, `fulltext.pdf.html` (when requested); `eupmc_result.json` / `*_result.json` per article; `eupmc_results.json` (or repo-specific) at project level; `*_papers_data.json` for DataTables; `datatables.html`; CSV when `--makecsv`.

**Main file types for transfer:** `.xml`, `.pdf`, `.html`, `.json`, `.csv`.

### Installation

- Use the code `pip install pygetpapers` to install **`pygetpapers`**

Check the successful installation with command : `pygetpapers --help`. You should see a help message come up.

- **Code Repository** - [github](https://github.com/petermr/pygetpapers)

- **README file of ```pygetpapers```** : [pygetpapers/README.md](https://github.com/petermr/pygetpapers/blob/main/README.md)

### Tutorials (Jupyter Notebook/ Colab Notebook and video demo)

  - [descriptive demo of the literature search with pygetpapers](https://youtu.be/cOW_NTeqErk)

  - [literature search: Google colab notebook](https://colab.research.google.com/drive/1-vM3BKV7NjvFXAdLGuqyNMh4VhPq6uMa?usp=sharing)

  - [Creating JQuery Datatables from the retrieved articles](https://colab.research.google.com/drive/1RumRjh0EnKcLDmXhtYvxqMKi39BX_sB1?usp=sharing)