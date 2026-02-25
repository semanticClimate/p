---
title: Introduction about semanticClimate tools
description: Information about tools and their tutorial
layout: layouts/post.njk
hideTagsList: true
eleventyNavigation:
  key: Tools
  order: 7
---

The **#semanticClimate tools** provides an innovative approach to manage scholarly publications efficiently. This page provides an overview of these tools and their practical applications in semantifying the climate reports and scientific literatures.

**Requirements for Installing Tools with `pip`** : 

- **Python** : Ensure that Python is installed on your system. Download python from [here](https://www.python.org/downloads/) and select the option Add Python to Path while installing.
  
- **pip** : `pip` is the package installer for Python. Verify that pip is installed by running: `pip --version` 

<style>
.tools-section {
  max-width: 1100px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
}

.tools-section h2 {
  font-size: 2.0rem;
  margin-bottom: 10px;
  color: #053539;
}

.tools-section p.section-subtitle {
  color: #000000;
  margin-bottom: 40px;
}

/* GRID: EXACTLY 3 PER ROW */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

/* CLICKABLE CARD STYLE */
.tool-item {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 25px;
  border-radius: 14px;
  transition: all 0.25s ease;
  background: #cbd7d9;
}

.tool-item:hover {
  background: #f0f5de;
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.tool-item img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 15px;
}

.tool-item h3 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #4b1649;
}

.tool-item p {
  font-size: 1.2rem;
  color: #000000;
  line-height: 1.5;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="tools-section">

<h2>semanticClimate Tools</h2>
<p class="section-subtitle">
Tools developed by semanticClimate for literature mining, data extraction, and knowledge graph building.
</p>

<div class="tools-grid">

  <a href="{{ '/en/posts/amilib_description/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/amilib.png' | url }}" alt="amilib">
    <h3>amilib</h3>
    <p>Python library designed for finding, cleaning, converting, searching, republishing legacy documents (PDF, PNG, etc.).</p>
  </a>

  <a href="{{ '/en/posts/pygetpapers_T2/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/pyget_logo.png' | url }}" alt="pygetpapers">
    <h3>pygetpapers</h3>
    <p>Tool to search and download scientific research articles from open access repository.</p>
  </a>

  <a href="{{ '/en/posts/docanalysis_T3/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/docana_p1.png' | url }}" alt="docanalysis">
    <h3>docanalysis</h3>
    <p>It is a command-line tool that processes document collections (CProjects) and performs text analysis.</p>
  </a>

  <a href="{{ '/en/posts/amilib_description/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/keyph_p1.png' | url }}" alt="txt2phrases">
    <h3>txt2phrases</h3>
    <p>Python library for converting documents (HTML, PDF) into plain text, extracting keywords.</p>
  </a>

  <a href="{{ '/en/posts/amilib_description/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/keyph_p1.png' | url }}" alt="encyclopedia">
    <h3>encyclopedia</h3>
    <p>toolset for extracting and analyzing keywords from scientific documents and enhancing knowledge with Wikimedia.</p>
  </a>

  <a href="{{ '/en/posts/amilib_description/' | url }}" class="tool-item">
    <img src="{{ '/static/img/events2026/keyph_p1.png' | url }}" alt="semantic_corpus">
    <h3>semantic_corpus</h3>
    <p>Python tool designed for researchers to create and manage personal scientific corpora.</p>
  </a>

</div>

</section>

### ```pyamiimage```

**Release Category**: `Alpha`

**Developed By:** Peter Murray-Rust

```pyamiimage``` is a set of tools to extract semantic information from scientific diagrams.

The output of ```pyamiimage``` is an image with annotations of substrate, products and enzymes.

- **Installation** - Use the code `pip install pyamiimage` to install **`pyamiimage`**

- **Code Repository** - [github](https://github.com/petermr/pyamiimage)

- **README file of ```pyamiimage```** : [pyamiimage/README.md](https://github.com/petermr/pyamiimage/blob/main/README.md)




