---
title: semanticClimate at InCoB-ISCB-APAC 2026
date: 2026-09-14
featured: true
description: InCOB 2026 (International Conference on Bioinformatics)
image: /static/img/events2026/INCOB2026.jpeg  
tags:
  - semanticclimate
  - outreach
  - hackathon
---

**[InCoB/ISCB-APAC 2026](https://incob.apbionet.org/incob2026/)** celebrates the 25th anniversary (Silver Jubilee) of the **International Conference on Bioinformatics (InCoB)**, recognizing 25 years of advancing bioinformatics research and collaboration across the Asia-Pacific region. The conference also marks the beginning of a strategic partnership with the International Society for Computational Biology (ISCB) under the ISCB-APAC framework, strengthening global collaboration while maintaining its regional focus.

Centered on the theme **"Where Bioinformatics Meets AI – Unlocking the Next Era of Discovery"**, the conference explores how artificial intelligence is transforming bioinformatics and accelerating advances in biological research, precision medicine, systems biology, and translational science.

The program includes keynote talks, research presentations, workshops, poster sessions, software demonstrations, and panel discussions, providing a platform for researchers, educators, students, and industry professionals to share innovations, foster collaborations, and shape the future of computational biology.

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events2026/INCOB2026.jpeg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

## Event Details

- #### Date : 14–17 September 2026 
- #### Location: Penang, Malaysia
- #### Theme: *Where Bioinformatics Meets AI - Unlocking the Next Era of Discovery*

### semanticClimate Team participation

The semanticClimate team is participating in InCOB 2026, contributing through a hands-on workshop and oral presentations showcasing open-source tools and workflows for semantic knowledge extraction from scientific literature.

Our participation highlights ongoing work on semantic technologies, knowledge graphs, literature mining, and AI-assisted scientific knowledge discovery. 

## WORKSHOP

### Title: “Text to knowledge graph: unlocking science with semantic toolkits”

- #### Date: September 14, 2026

- #### Coordinated by: 
  - #### Dr. Renu Kumari, BRIC- National Institute of Plant Genome Research (BRIC-NIPGR), India
  - #### Mr. Mandeep Umra, BRIC-NIPGR, India
  - #### Ms. Priti Chahal, BRIC-NIPGR, India

### Abstract

The exponential growth of scientific publications across diverse domains has created challenges for knowledge discovery, integration, and reuse due to their predominantly unstructured formats. Traditional literature review practices are increasingly inadequate for handling large, heterogeneous, and rapidly evolving information landscapes. The course demonstrates how AI-assisted literature review workflows can be built, evaluated, and adapted using open access scholarly literature.

This tutorial introduces an open-source semanticClimate toolkit designed to transform research articles into structured, machine-readable knowledge through standardized and interoperable approaches. The workflow starts with ```pygetpapers```, which is a tool for retrieving research articles and associated metadata from open-access repositories such as EPMC using keyword-based queries. It makes requests to open access scientific text repositories, analyses the hits, and systematically downloads the articles without further interaction. 

The collected scientific literature corpus is then presented as a searchable and browsable data table using ```amilib``` (python library designed for processing legacy documents such as PDF), providing information of metadata such as title, authors, year of publication, and DOIs etc. 

Once a clean and structured corpus is prepared, ```docanalysis``` (command-line tool to perform text analysis) is applied for comprehensive text mining and natural language processing. It supports section-wise parsing and **named entity recognition (NER)** to extract key entities such as organisms, locations, diseases etc. The tool produces the structured outputs (e.g., CSV, JSON), supporting downstream analysis. The session will further demonstrate how extracted entities will then be semantically linked to interoperable resources such as Wikidata to enable FAIR and machine-readable knowledge representation.

The tutorial combines foundational concepts with guided hands-on exercises using ready-to-run Jupyter/Colab notebooks. The workflow is designed for researchers with limited computational experience while also providing extensible approaches for advanced users interested in semantic technologies, AI-assisted workflows, and literature-based knowledge discovery.

#### Audience

This tutorial is intended for researchers, bioinformaticians, data scientists, librarians, and practitioners working with scientific literature across domains. The session is particularly relevant for participants working with large collections of scholarly articles across domains such as bioinformatics, biodiversity, climate science, healthcare, and data-intensive research.

The tutorial is designed for beginners and interdisciplinary researchers with limited computational experience. No prior coding expertise is required. However, familiarity with basic concepts such as structured data formats (CSV, JSON, XML) and web-based notebook environments (e.g., Jupyter or Google Colab) will be helpful. Intermediate users interested in natural language processing (NLP), named entity recognition (NER), semantic annotation, FAIR data practices, and ontology-based knowledge integration will also benefit from the session.

## Oral Presentations

### Title: Habitat Invasibility Associated with *Lantana camara* Reveals Change in Bacterial and Fungal Community Structure and Function

- #### Speaker: Mr. Mandeep Umra, BRIC- National Institute of Plant Genome Research (BRIC-NIPGR), India

- #### Abstract 

Soil microorganisms are integral to plant invasion processes, functioning both as agents that facilitate invasion and as communities that respond to vegetation change. Despite growing evidence of microbial involvement, the effects of habitat invasibility on soil microbial communities remain poorly understood. In this study, we examined the effects of Lantana camara invasion on the diversity, composition, and functional potential of soil bacterial and fungal communities in the Corbett Tiger Reserve, India, using the Non-invaded habitat as a reference. Compared with Non-invaded habitat, Lantana camara invasion had no significant difference on bacterial alpha-diversity and fungal alpha-diversity. In contrast, the beta-diversity of both bacterial and fungal communities differed markedly between Invaded, Partially-invaded and Non-invaded habitats. Proteobacteria and Ascomycota are the most prevalent phyla in each of the three habitats in bacterial and fungal datasets respectively. Functional prediction analyses further indicated that Lantana camara invasion enhanced the representation of bacterial functions related to carbon and nitrogen cycling, including aerobic chemoheterotrophy, chitinolysis and nitrate reduction. Litter saprotrophs and ectomycorrhizal fungal guilds are significantly high in Invaded Habitat. Collectively, these findings demonstrate that Lantana invasion profoundly reshapes soil microbial communities and their functional potential.

### Title: The Florilegium Phytochemistry: A Data-Driven Approach to Open Access and Knowledge Management for phytochemicals

- #### Speaker: Ms. Priti Chahal, BRIC- National Institute of Plant Genome Research (BRIC-NIPGR), India

- #### Abstract 

Plants constantly synthesize diverse metabolites, each with a distinct role in defense and communication, collectively considered unique “chemical spectra specific fingerprints”. Bioprospecting for Plant secondary metabolites has multifaceted applications beyond helping to unravel the functions and significance of such metabolites. However, a significant wealth of information towards natural products research remains locked in the vast repository of published data spanning centuries, due to copyrighted scholarly records, hindering accessibility. We are addressing this challenge by means of a citizen science management to establish a comprehensive and collaborative platform. That is being used to curate and normalize data from 107 million research articles, this data is available as n-grams of plants and chemistry and we have ingested into a searchable database. In all we have identified 4208946 chemical-plant pairs, sourced from 370777 unique DOI numbers, featuring 6633 Plants and 1750 Chemicals. Plant names are standardized using accepted scientific names, while phytochemicals are mapped to canonical chemical identifiers (PubChem CID). Additionally, incorporated available data on physicochemical properties of chemical compounds and Plant taxonomy, enhancing data accuracy. Plant and Chemical entities are mapped to Wikidata QIDs, providing semantic interoperability and enabling navigation across the “global knowledge graph”. Thus, Wikidata serves as an external reference layer that enriches entity connectivity. Our aim is to seamlessly integrate biology and chemistry, Profiling the metabolic content of all currently known Plants on our planet and openly sharing this wealth of information on a unified platform the Florilegium Phytochemistry, enabling chemotaxonomic classification of plant families and molecular similarity analyses.

### Speakers

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;text-align:center;">

  <div>
    <img src='{{ "/static/img/events2026/renu_pic1.jpg" | url }}'
         alt="Dr. Renu Kumari"
         style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
    <p><strong>Dr. Renu Kumari</strong><br>BRIC-NIPGR, India; #semanticClimate</p>
  </div>

  <div>
    <img src='{{ "/static/img/events2026/mandeep.jpg" | url }}'
         alt="Mr. Mandeep Umra"
         style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
    <p><strong>Mr. Mandeep Umra</strong><br>BRIC-NIPGR, India</p>
  </div>

  <div>
    <img src='{{ "/static/img/events2026/priti.jpg" | url }}'
         alt="Ms. Priti"
         style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
    <p><strong>Ms. Priti Chahal</strong><br>BRIC-NIPGR, India</p>
  </div>
</div>

#### Supporting Organizations

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:24px;text-align:center;align-items:start;">

  <div>
    <div style="height:120px;display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid #e5e5e5;border-radius:10px;background:#fff;">
      <img src='{{ "/static/img/events2026/NIPGR-logo.png" | url }}'
           alt="BRIC-NIPGR"
           style="max-width:100%;max-height:100%;object-fit:contain;">
    </div>
    <p>BRIC- National Institute of Plant Genome Research (BRIC-NIPGR), India</p>
  </div>

  <div>
    <div style="height:120px;display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid #e5e5e5;border-radius:10px;background:#fff;">
      <img src='{{ "/static/img/events2026/codata_logo.png" | url }}'
           alt="CODATA"
           style="max-width:100%;max-height:100%;object-fit:contain;">
    </div>
    <p>CODATA (Committee on Data of the International Science Council)</p>
  </div>

  <div>
    <div style="height:120px;display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid #e5e5e5;border-radius:10px;background:#fff;">
      <img src='{{ "/static/img/events2026/INCOB2026.jpeg" | url }}'
           alt="InCoB-ISCB-APAC 2026"
           style="max-width:100%;max-height:100%;object-fit:contain;">
    </div>
    <p>InCoB-ISCB-APAC 2026</p>
  </div>

  <div>
    <div style="height:120px;display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid #e5e5e5;border-radius:10px;background:#fff;">
      <img src='{{ "/static/img/events2026/semantic_logo.png" | url }}'
           alt="semanticClimate"
           style="max-width:100%;max-height:100%;object-fit:contain;">
    </div>
    <p>semanticClimate</p>
  </div>

</div>







