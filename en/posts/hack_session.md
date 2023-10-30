---
title: Hack session_Climate Knowledge Hunt Hackathon May 2023
date: 2023-10-30
description: Climate Knowledge Hunt Hackathon May 2023
author: Renu Kumari
summary: Full day hack session 2023 
hide: true
tags:
  - hackathon
---


#semanticClimate ran its first ever hybrid Hackathon on 2023-05-19. There was a diverse community of the participants, team members and mentors with different subjects backgrounds, experiences and the different age groups. All of them were very excited to learn by exploring as for some of them it is entirely a new thing.

### Hackathon Participants

<table>
<tr>
<td><img src='{{ "/static/img/hack_participants1.jpg" | url }}' width="500" height="300"></td>
<td><img src='{{ "/static/img/hack_participants2.jpg" | url }}' width="500" height="300"></td>
</tr>   
</table>

### Team Members

<table>
<tr>
<td><img src='{{ "/static/img/team_members.jpg" | url }}' width="500" height="300"></td>
<td><img src='{{ "/static/img/hack_labmembers1.jpg" | url }}' width="500" height="300"></td>
</tr>
</table>


### Here are the different hack sessions with their different tasks

After the inaugural session, we divided ourselves into 4 smaller groups of 5. Each focused on a specific component of Climate Knowledge Explorer. 

Group 01 looked at key phrase extraction; Group 02 worked on building a summarizer; Group 03 focused on Wikibase, dictionary creation and information extraction; and Group 04 worked on finding out why a paragraph of the report refernced a different paragraph (linking attributes). 

## Different Groups
- Group 01
- Group 02
- Group 03
- Group 04

Before going to deal with the task assigned, all the members of each groups have installed the requirements in their machine.

## Set up Tech/Material (Google Colab/Jupyter)

<table>
<tr>
<td><img src='{{ "/static/img/tool_install1.jpg" | url }}' width="500" height="300"></td>
<td><img src='{{ "/static/img/tool_install2.jpg" | url }}' width="500" height="300"></td>
</tr>   
</table>

The softwares were successfully installed by each group member and then it was described by the different mentors leading the session.

<table>
<tr>
<td><img src='{{ "/static/img/hack_session4.jpg" | url }}' width="500" height="300"></td>
<td><img src='{{ "/static/img/hack_session1.jpg" | url }}' width="500" height="300"></td>
</tr>
</table>

# Group 01

### Hack Session 01
- The group used various python packages (Numpy, Pandas, transformers, NLTK) to extract keywords from the IPCC report.

### Hack Session 02
- The group performed the keyword extraction for technical summary of IPCC report [technical summary](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/group_01/CLIMATE%20CHANGE%20.docx) and also checked the quality of the keyword extracted.
- The group wrote the [code](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/group_01/group_1.py) to extract the keywords from the report. The unique keywords extracted are listed [here](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/group_01/keywords%20Extraction%20data.xlsx) as an output.


# Group 02

### Hack Session 01
- The group used the [summarizer Jupyter Notebook](https://github.com/petermr/semanticClimate/blob/main/Summarization/summarization.ipynb) to summarize paragraphs from the IPCC reports or any paragraph of their choosing.

### Hack Session 02
The group discussed issues related to running the notebook which are mentioned in the [final presentation](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/Group_2/Group2_hackthon.pptx)
- Accordingly, the group together wrote few lines of [code](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/Group_2/hackathon_code_group2.py) to overcome issues stated in the presentation.

### What next?
Changes to the notebook will be made as we work to solve issues currently present and issues which may arrive in the future. 

# Group 03

## What we did
The group explored the structure and contents of IPCC Reports. We also toured the [Wikibase Instance](https://kg-ipclimatec-reports.wikibase.cloud/). Later, we curated terms related to migration, created an AMI dictionary and used it to search some chapters of IPCC Report. 

### Hack Session 01
- The group used the [summarizer Jupyter Notebook](https://github.com/petermr/semanticClimate/blob/main/Summarization/summarization.ipynb) to summarize paragraphs from the IPCC reports or any paragraph of their choosing.

### Hack Session 02
the group discussed issues related to running the notebook which are mentioned in the [final presentation](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/Group_2/Group2_hackthon.pptx)
- Accordingly, the group together wrote few lines of [code](https://github.com/petermr/semanticClimate/blob/main/climate-knowledge-hunt-hackathon-material/Group_2/hackathon_code_group2.py) to overcome issues stated in the presentation.

### What next?
Changes to the notebook will be made as we work to solve issues currently present and issues which may arrive in the future. 

# Group 04

## What we did
We investigated the interconnectedness between various target and anchor nodes, as well as identified the appropriate attributes for linking these node pairs. Additionally, we delved into the efficiency of the tools provided by semantic climate, which facilitate rapid analysis. We emphasized the capabilities of the Summarizer and Keyword Extraction tools and discussed their practical applications for various tasks. 
### Hack session 01
Utilized the [Relation_Attribute_Annotation Colab Notebook](https://github.com/petermr/semanticClimate/blob/main/paragraphLinking/Relation_Attribute_Annotation.ipynb) to gain hands-on experience with the annotation workflow and determine the most appropriate relation attribute for connecting two nodes. Additionally, I familiarized myself with the functioning of the Semantic Climate Summarizer.
### Hack session 02
Gained some practical experience in coding the keyword extractor through the Keyword Tutorial Notebook. Further, explored various Hugging Face models and subsequently discussed additional measures that can enhance our ability to extract more cohesive and correlated keywords.
## What next?
Discussed how the Open Source LLM like Bloom can help us to better understand the interconnectedness between various target and anchor nodes.





