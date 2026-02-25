---
title: txt2phrases | Automated Text Processing and Keyphrases Extraction
date: 2026-02-25
description: Introduction and User Guide
author: RK
summary: Tool Overview and Practical Tutorial
hide: true
tags:
  - hackathon
---

**Release Category**: `Alpha`

`txt2phrases` is a Python library and command-line tool for processing and analyzing textual data. It offers a streamlined workflow to convert documents (HTML and PDF) into plain text, extract keywords using AI-based models, and classify them into specific and general categories using TF-IDF techniques.

**Role:** Pipeline from documents (PDF/HTML) to plain text and then to keyphrases; can consume pygetpapers output.

**Primary functionality:**
- **pdf2txt:** PDF → plain text.
- **html2txt:** HTML → plain text.
- **keyphrases:** Extract keyphrases from text using NLP models (e.g. Hugging Face); optional TF-IDF classification (specific/general).
- **auto:** Full pipeline on a directory (detects pygetpapers-style layout): PDF/HTML → text → keyphrases; batch processing.

**Primary inputs:**
- Single file or directory (PDF, HTML, or text).
- For `auto`: pygetpapers-style directory (e.g. `{paper_id}/fulltext.pdf`, `fulltext.html`).

**Primary outputs:**
- Plain text files; keyword/keyphrase CSVs (e.g. `*_keywords.csv`).

**Main file types for transfer:** `.pdf`, `.html`, `.txt`, `.csv`.

### Installation

- Use `pip` to install the tool/package. Use this code `pip install txt2phrases` to install latest `txt2phrases` version.

