---
title: semantic_corpus | Create and manage personal scientific corpora
date: 2026-02-26
description: Introduction and User Guide
author: RK
summary: Tool Overview and Practical Tutorial
hide: true
tags:
  - hackathon
---

**Release Category**: `Alpha`

**semantic_corpus:** Create and manage personal scientific corpora: search, download, organize; optional BAGIT preservation.

**Primary functionality:**
- **create:** Initialize corpus directory.
- **search:** Search Europe PMC / arXiv; save results to JSON.
- **download:** Search + download in specified formats (e.g. pdf, xml).
- **Ingestion:** Ingest pygetpapers-style directories (e.g. `PMC*/` with `eupmc_result.json`, `fulltext.xml`) into BAGIT corpus; copies XML/PDF and updates manifest.

**Primary inputs:**
- Query, repository choice, limit, formats, output path; optional YAML config.
- For ingestion: path to pygetpapers output directory (e.g. from amilib test resources or real runs).

**Primary outputs:**
- Corpus directory (optionally BAGIT); JSON search results; downloaded files (PDF, XML) in corpus structure.

**Main file types for transfer:** `.json` (metadata, search results), `.xml`, `.pdf`; BAGIT manifest and structure.