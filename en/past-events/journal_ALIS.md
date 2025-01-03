---
title: ALIS Special Issue | Data for Development  
date: 2024-09-01
featured: true
description: A series of data papers to commemorate the centenary of S R Ranganathan in India
tags:
  - semanticclimate
  - outreach
  - hackathon
---

The year 2024 marks the centenary of the Father of Library Science, **S.R. Ranganathan’s** entry into his first professional position at the University of Madras, where he would remain until 1945. To mark this milestone centenary of data science and libraries in India, [ALIS](https://or.niscpr.res.in/index.php/ALIS) (Annals of Library and Information Studies) – a journal founded by Ranganathan – is planning a thematic issue on “**Data for Development**” to be published in September 2024.  

For this Special issue, [#SemanticClimate](https://semanticclimate.github.io/p/en/) joins hands with ALIS. Our Co-founders [Gitanjali Yadav](https://www.nipgr.ac.in/research/dr_gyadav.php) and [Peter Murray-Rust](https://www.ch.cam.ac.uk/person/pm286) have agreed to act as Co-editors, and the Special issue will have several papers by our alumni as well as winning teams at the recent [Climate Knowledge Hackathon](https://semanticclimate.github.io/p/en/past-events/climate_knowledge_hunt_Feb24/), reflecting the use and application of the semantic Toolkit for research. The special thematic issue will focus on various contours of data science and include papers that will address a broad range of sub-themes in the data science landscape.

The world needs Ranganathan's vision and his commitment to both equity and technology. He included "children, the physically disabled, artisans, newly literate adults, the intellectually disabled, working-class individuals, and individuals with niche interests". In the colon classification he presaged the knowledge systems of today (NoSQL databases, name-value pairs, RDF, Wikidata) and he would be active in championing these today.

## <u>Publishing timelines</u>

- Abstract acceptance (March 31, 2024)
- Table of Contents (This Page)
- **Submission full paper first draft (May 31, 2024)**  
- Notification of revisions (June 15, 2024)  
- Submission of final revised version (July 27, 2024)  
- Publication/ Proofs : August/ September 2024

## TO SUBMIT AN ARTICLE: Points To Remember

- Please ensure that your paper is approximately **4500-7000 words long** (not counting citations).
- Please ensure that you use/ refer to a specific Dataset for your submission, and in the spirit of Open and FAIR data principles, please ensure that all data used for the paper is on GitHub.
- You are free to invite co-authors to assist you in writing your article (if so, please provide us with their contact information unless already done so).
- **All submissions to be made via our [Online Submission portal](https://docs.google.com/forms/d/e/1FAIpQLSfN-yNFcVPemDIDwl3cqmt8ZXjyuRU5pr6EexfM5c3MzUoKxw/viewform)**
- **Please ensure that you submit the Main Paper and Figures as separate files, along with any Supplementary Data Files**.
- **Read the [Author Guidelines](https://drive.google.com/file/d/1ANjX6lXWSY5gmRRk_rbdVJWsQkL0MN3M/view?usp=sharing) and See the reference format in [reference article](https://or.niscpr.res.in/index.php/ALIS/article/view/7545/2731) for the manuscript**.
- Please submit the article by **May 31, 2024**. If you are unable to do so, Please write to semanticClimate@gmail.com in case you wish to submit or find details of article templates and author guidelines for thie Special Issue.
- Please complete the **[permissions form](https://docs.google.com/spreadsheets/d/197Fhbm5aRPNGKoyc8zF_uWNu2oGKEFW9/edit?usp=sharing&ouid=103728494708026978305&rtpof=true&sd=true)** listing the original sources of any figures and tables in your manuscript and submit it along with your submission as a Supplementary File.

 
## <u>CURRENTLY ACCEPTED ABSTRACTS</u>

### 1: AMI - a pipeline to make and re-use semantic corpora

#### Authors

RK, SNH, Smriti, other interns TBA, PMR

#### Affiliations: TBA

#### Abstract

A semantic corpus consists of knowledge components which are normalized structured, labelled, and linked to ontologies. Current examples are the Wikijournals [1] and IUCr CIF[2] which use a common framework that guides authors to create semantic components. Open semantic components are reusable and can then be mined or linked by modern tools. Unfortunately most "open" publications (academic, governmental, civil society) are not semantic and need a lot of human gruntwork to re-use. Despite two decades of semantic advocacy the current "norm" is PDF-for-everything including data and diagrams, with serious semantic destruction. We therefore have to show the value by creating a toolkit to semantify the existing legacy corpus

AMI is a component-based pipeline to support the transformation of legacy material to semantic form. It includes:
* a large tested Python library
* legacy2html converters (PDF, text, OCR)
* HTML cleaning and normalization
* sectioning and IDs
* annotation (word and phrase detection)
* dictionaries and ontologies (includes docanalysis and Wikidata)
* repurposing and display; hooks for downstream tools (e.g. SciPy, Pandas)

AMI is used on the scientific literature in repositories/servers (EuropePMC, *rxiv) and important corpora (e.g. UN's IPCC and UNFCCC reports - ca. 50,000pp). It supports rapid scoping literature review (i.e. minutes).

[1] https://en.wikiversity.org/wiki/WikiJournal_User_Group
[2] https://www.iucr.org/resources/cif

## 2: "Save the time of the reader": AMI: Computable semantic articles

#### Authors

Peter Murray-Rust, Anubhab Chakroborty, Shweata N Hegde, Emanuel Faria, Gitanjali Yadav, Kanishka Parashar

#### Affiliations: TBA

#### Abstract

In many scientific fields the volume and complexity of modern scientific articles is now beyond the ability of readers and libraries to manage. One answer is semantic articles and a few enlightened society publishers do this, e.g. the Int. Union of Crystallography with their CIF ontologies and software. For the majority the reader has to do what they can with "dumb" PDF's and PNGs. To save the time of the reader we created an opensource software suite ("AMI") which converts legacy documents to semantic form (with minimal information loss). PDF is converted to structured text and diagrams (e.g. plots and networks) can often be analysed. We use public ontologies (e.g. Wikidata) to identify components and their interrelationships. We exemplify this with a corpus of articles in phytochemistry reporting volatile organic chemical emitted from plants and show how a knowledge graph can be constructed.

## 3: The #semanticClimate Community

#### Authors

Lead authors: Shweata Hegde and Peter Murray-Rust. Other authors: Simon Worthington 

#### Affiliations: TBA

#### Abstract

#semanticClimate is an international open research project led by young Indian scientists. The project goal is to make access to scientific climate change knowledge equitable. To achieve the goal #semanticClimate has two areas of activity; firstly, creating software tools for semantic searching of climate change literature, and; secondly, enabling citizen science events, activities, and community building.
The article will survey #semanticClimate’s community building efforts to date. For community building and citizen science engagement the #semanticClimate project employs strategies, techniques, and ideas from the fields of: Open Science, open-source software culture and projects, and Citizen Science. These include for example: from Open Science — Open Notebook Science, the UNESCO Open Science values, and knowledge justice for example in regards to colonial bias in science; from open-source — hackathons, open and transparent working practices, and using Git versioning; and from Citizen Science — designing community outreach activities (games), giving attribution to all participants, and engaging the wider public in the culture and practices of science (verifiable knowledge, review, data science, modern infrastructure use, etc). 

## 4: From Data to Action: Prioritizing Climate Adaptation Strategies for Vulnerable Communities

#### Authors

Shiwani, Maansi Rawat, Gunjana Boruah, Swathi Gangadharan, Shashank Bhardwaj 

#### Affiliation

Ambedkar University (AUD), New Delhi

#### Abstract

The intersection of data science and climate studies has long been a site for productive interaction. Extant scholarship in climate data analytics has focussed on increasing accuracy in weather forecasting, emission monitoring, vulnerability and risk analysis, and so on, thus generating data that can be then utilised to formulate mitigation or adaptation strategies. However, there is very little scholarship regarding the use of data science in making decisions about which adaptation policy should be prioritised on the basis of efficacy and context-specific suitability, which is an especially critical factor for resource-constrained communities or governments. We used open-access Python-based tools pygetpapers (to download relevant articles from open access scientific text repositories) and docanalysis (for text-analysis of documents) developed by #semanticClimate, and focussed on pastoral communities, recognised as extremely vulnerable to the effects of climate change. Using these tools, we consolidated a comprehensive directory of adaptation strategies with proven efficacy, categorised by ecosystem type, which serves as a repository of actionable scientific-ecological knowledge for communities with similar vulnerabilities and environmental challenges around the world. Knowledge graphs to represent shared problems, barriers and potential adaptation solutions were created using Gephi, an open-access tool for data visualisation.


## 5: Leveraging text mining for better policy making: exploring the correlation of precipitation change with agriculture

#### Authors

Nikita Ray, Sachin, Jhanak Saxena, Than Darr Aung, Manisha Goel*

#### Affiliation

Department of Biophysics, University of Delhi South Campus.
New Delhi – 110021, India

#### Abstract

India is widely considered as an agrarian economy, where agriculture defines the livelihood of a large population. However, our current agriculture practices are facing formidable challenges due to rapid progression in climate change. Climate change is leading to various unprecedented spatio-temporal alterations in weather patterns resulting in devastating events such as drought, heat waves, erratic and intense rainfall. The impact of climate change on agriculture is widely accepted, and the possible threats and its affects are continuously being studied. The idea is to gain enough understanding of various factors affecting the precipitation, to be able to predict changes in precipitation patterns as well as design mitigation strategies to minimize the impact of such disturbances, through effective policy making.

However, policy making requires synthesis of disparate factors, involving not only detailed understanding of the individual component but also the correlation between them. Establishing such correlations can be challenging, given the diverse array of information available, especially if presented in an unstructured format. However, text mining can serve as a useful approach to generate knowledge out of such varigated information pool in minimal time. Text mining is an evidence-based method for knowledge generation, which works through quantification of information present in texts, helping in understanding the correlation between various key terms. 

In the present study, we intended to leverage this strategy to extract pertinent information from various sources related to precipitation patterns in India, including recent changes and the affects thereof. The key findings emerging from the information corpus through text mining will have potential to direct the policy makers towards comprehending the gaps created in our agricultural practices due to climate change. This understanding will allow policy makers to devise more effective and potent solutions to combat the effects of climate change on Indian agriculture, thereby safeguarding the broader socio-economic fabric of the country.


## 6: Synthetic biology and mitigation strategies for harmful algal blooms

#### Authors

Hasmeet Kaur, Harshita Choudhary, Kanav Sharma, Yachna Soni, Dr. Kapila Kumar
All the authors has contributed equally to this work

#### Affiliation

Manav Rachna International Institute of Research and Studies, Faridabad, Haryana

#### Abstract

Harmful algal blooms (HABs) impose a serious threat to aquatic ecosystems as well as to human health. They cause adverse effects by depleting oxygen in aquatic environment, and by producing toxins. HABs are also responsible for water discoloration which leads to the formation of red tides in the water bodies. Harmful Algal Blooms (HABs) are proliferations of phytoplankton (mostly dinoflagellates, diatoms and cyanobacteria) and macroalgae that have negative effects on marine environments and associated biota. 
Climate change exacerbates HAB proliferation through optimal conditions like elevated water temperatures, ocean acidification and altered precipitation patterns. Globally, HABs affect various coastal parts and causes a plethora of negative effects on health, economy and ecology. 

Traditional mitigation approaches for HABs include nutrient minimization, mechanical extraction, algicidal chemicals etc. These approaches have been frequently criticized as they offer limited effectiveness, low scalability and some of them pose adverse environmental impacts.

Synthetic biology offers advantages to target key mechanisms driving algal bloom formation, disrupting nutrient uptake and toxin production. Additionally, it enables the development of biosensors for real time detection of algal toxins, facilitating proactive management of HABs. This review delves deeper into the applications of synthetic biology and the promises it holds to deal with the concerning algal blooms and their effects. In this attempt of addressing the concern, we have compiled the existing knowledgebase in a comprehensive manner which can provide promising leads to tackle this effect of climate change.


## 7: ACKSE: A Computable Knowledge form of Species Extinction due to Climate Change 

#### Authors

Surabhi Seth3,4, Pratibha Chaurasia3,4, Navya Gupta1, Loveleen Kour1, Vanshika Verma1, Rashmi Rameshwari1, Srinivasan Ramachandran2,4

#### Affiliations

1Department of Biotechnology, Manav Rachna International Institute of Research and Studies, Sector-43, Delhi Surajkund Road, Aravalli Hills Faridabad, Haryana 121004
2Research Development Cell, Manav Rachna International Institute of Research and Studies, Sector-43, Delhi Surajkund Road, Aravalli Hills Faridabad, Haryana 121004.
3Informatics and Big Data, Council of Scientific and Industrial Research – Institute of Genomics and Integrative Biology (CSIR-IGIB), Mathura Road, New Delhi 110025, India
4Academy of Scientific and Innovative Research (AcSIR), Ghaziabad 201002, India

#### Abstract

Climate change has wide range impact on all life forms to varying extents. Changes in temperature, and compositions of air, water, soil and human activities such as agriculture, urbanization and industrialization collectively underlie climate change. The Intergovernmental Panel on Climate Change working group II contribution documents the impact of Climate Change on ecosystems, biodiversity and human communities at global and regional levels. Loss of habitat arising from the dynamic effects of climate change leads to species extinction. Numerous studies report the cause-and-effect relation between climate change factors on species extinction covering diverse flora and fauna. This rich repository could be made available as computable knowledge for facilitating climate change mitigation. To this end, data organized in a suitably structured form shall benefit developing a computable knowledge of climate change factors and their effects on species extinction for future planning of mitigation strategies. In a pilot study, 100 EPMC articles were retrieved using the "extinct" search term in combination with various factors such as "temperature", "soil pollution", "air pollution", "water pollution", and "human activity" using the pygetpaper tool. Tools such as pygetpaper, docanalysis and pubmed.mineR and other text mining tools were employed. Both entity and phenomena terms were used to extract relevant data for preparing semantic network graphs. The data analysis revealed that temperature had the most significant influence, followed by soil pollution, water pollution, and human activity. Air pollution did not appear to have any impact on the plant species. Currently available mitigation strategies are planned to be included. Further investigations shall be carried out on larger dataset of EPMC papers and the results reported. Ontology systems will be used, thereby permitting integration for global applications.


## 8: Guiding Principles in Measuring Data Reusability

#### Authors

Lili Zhang

#### Affiliation

Computer Network Information Center, Chinese Academy of Sciences

#### Abstract

Open data, among the key pillars of Open Science, is one of the drivers for science and society. To promote open data, FAIR metrics should be ready to measure the performance of those data-sharing works. However, considering the complex process of lifelong data management, how could we guarantee the metrics of reusability for data could objectively and truly reflect the reusability of data? The current measures for data usability may focus on different levels of data, which include attention-based metrics, such as visits to databases and twits in social media; interest-based metrics, which call for more effort-sparing, such as downloads; knowledge-based metrics, such as citations in publications and patents; and value-based metrics, such as those highly praised by their functionality as social capital, or direct outputs as monetary incomes and others, such as capital assets. Considering the production of data and sharing these resources, basic principles should be developed to balance different roles and maximize the total benefits. This way, enlightened by Ranganathan's laws of library science, considering the intrinsic and extrinsic value of data and the current measuring practices adopted, the basic guiding principles will be developed, discussed, and lightweight validated through the stakeholder approach. The core value of open science will also be mapped into the study to ensure the openness and inclusiveness of the principles and to guarantee a better flow of data across the science community and society.


## 9: Utilizing Geospatial Data for Monitoring and Managing Invasive Species: A Contribution to Sustainable Development

#### Authors

Marwa Halamy

#### Affiliation

Department of Environmental Sciences, Faculty of Science, Alexandria University, P.O. Box 21511, Alexandria, Egypt

#### Abstract

Invasive species pose significant threats to ecosystems, economies, and human well-being worldwide. Effective monitoring and management of invasive species are essential for mitigating their impacts and promoting sustainable development. Geospatial data and technologies play a crucial role in this effort, offering valuable insights into the distribution, spread, ecological and socioeconomic impacts of invasive species. This account explores the deployment of geospatial data for monitoring and managing invasive species as a contribution towards achieving sustainable development.
An overview of invasive species and the magnitude of their impacts, highlighting the importance of early detection and intervention will be provided. The applications of various geospatial technologies and data sources, including geographic information systems (GIS), and remotely sensed data in invasive species monitoring and management are discussed.
Selected case studies representing various ecosystems and geographical regions, demonstrating how geospatial data have been utilized efficiently to inform decision-makers and apply control measures are highlighted. The challenges and limitations associated with geospatial data use, such as data accessibility and accuracy are addressed, while identifying emerging opportunities for innovation that can contribute to achieving sustainable development goals. 


## 10: Power and Inequality in Global Knowledge Production

#### Authors

Leslie Chan

#### Affiliation

#### Abstract

In recent years, we have seen growing critiques of the global hierarchies of knowledge and the asymmetry of power in knowledge production in Western academia. However, these critiques have not disrupted the Anglo-European hegemony of knowledge production. This lack of meaningful change is mainly because of the transnational academic-publishing industrial complex's deep colonial and structural power. Over time, this industrial complex has configured the conventions, norms, and practices of academic publishing and metrics as governance instruments in producing and circulating what is considered legitimate knowledge. These norms, which include library practices such as metadata creation, are often invisible and hidden. But these practices constrain the movement of ideas and ways of knowing from the margins, creating a highly unequal and uneven geography of knowledge production and recognition of academic labour. By looking at the historical formation of this globalized system, including the infrastructure such as libraries and knowledge systems that form the worldwide assemblage, we can better formulate resistance strategies and design other possible worlds of knowledge ecologies.


## 11: Science as a public good: the role of community and technology for equity, sustainability and development in the Global South

#### Authors

Arianna Becerril García 

#### Affiliation

Autonomous University of the State of Mexico

#### Abstract

Knowledge generation is a recursive and communitary process that evolves by building on prior knowledge. The non-rivalrous and non-excludable nature of science, that allows it to be a public good, is reinforced when it takes place on the World Wide Web.  Digital technologies are keystone for science to provide universal benefit and for enabling the community to collectively sustain and lead it.  Sharing wont deplete science, on the contrary, science is advanced when it is shared. Paywalls in any phase of the science generation and publication circuit entail exclusion, which affects the least resourced countries and regions. Science as a public good creates a more equitable ecosystem, particularly beneficial for the Global South.  The prevailing approach in the Latin American region for the communication of science has been sustained mainly with public funds by creating open mechanisms such as non-APC Open Access journals, repositories and open infrastructures, with full involvement of the academic community in the development and in control of that environment. To mention some of the achievements of the region: Latindex directory records online journals 13,936; Redalyc provides access to almost 1 million full-text articles in various formats including machine readable data and semantic knowledge bases; LaReferencia aggregates 12 country-level nodes of repositories indexing more than 5 million documents. Millions of users worldwide are served by accessing, publishing and sharing knowledge through this technological-leveraged ecosystem, in which everybody can participate, contribute and benefit, as a public good.


## 12: A Study of Research Data Policy of Highly Ranked Journals Contributing to Sustainable Development Goals 

#### Authors

Prof. Dinesh K. Guptaa, Sushree Snigdha Dandpata, Kavya Asoka and Sapna Devi

#### Affiliation

Department of Library and Information Science, Central University of Haryana, Mahendergarh

#### Abstract

Science is referred to as "self-correcting" science because it is predicated on the replication of earlier research1. The ultimate goal behind making raw data available is to generate new knowledge on the basis of previous findings2. However, in many cases, it can be challenging to repeat scientific research since there is insufficient data to validate or verify the conclusions. To foster the reproducibility and promote sustainability of research, publishers/journals have started adopting data policies. Authors are being encouraged to share their data to publish articles and scholarly journals are playing vital role in such process.
Problem Statement:
No study has been found analyzing the existing research data policies of SDG (Sustainable
Development Goals) journals. There is a greater need for a critical study of the research data
policies of the SDG journals. In response to this gap, study analyses the research data policies of
journals supporting SDGs indexed in Scopus database. The study is designed to answer the
following research questions:
1. Which are the top journals contributing to each SDGs and how many of them have research
data policies?
2. What are the trends related to the research data associated with each SDGs?
3. What are the common and unique features of the research data policies of SDG journals?
4. How the journals related to SDGs are promoting the sustainability of the research articles
published in this area of research?


## 13: Why are libraries still violating procurement rules?

#### Authors

Björn Brembs

#### Affiliation

Universität Regensburg, Institut of Zoology - Neurogenetics, Regensburg, Germany

#### Abstract

Publicly funded institutions commonly have to obey strict spending rules. Commonly, only goods/services that are not covered by an existing institutional contract and whose price does not exceed certain limits, can be purchased without first obtaining several competitive quotes. Above a second threshold, limited bidding/tender processes are required and above a third, a full bidding process is mandated. At academic institutions, it seems as if only researchers are bound by these spending rules, as libraries (alone or in consortia) just negotiate prices with publishers without any such strings. This is mainly for historical reasons, as publishers own a copyright monopoly on the subscription content they offered, such that they fell under the "single source exemption" from spending rules. Today, however, many publishers either offer publication services for which they charge article processing charges (APCs) or have entered into "transformative agreements" (TAs) with an APC component and where the goal is a complete transition to APC-based publication services. One of the main reasons behind this transformation in scholarly publishing was to break out of the vendor lock-in the publisher monopolies entailed and replace it with a competitive APC market. If this market is indeed competitive, there cannot be a "single source exemption" any more to justify negotiations with publishers. If, on the other hand, libraries and publishers agree that despite the transition from procuring content to APC-based publication services, the monopolies actually still persist, this agreement amounts to an admission of defeat: APC-based open access has failed to break up the vendor lock-in and is, instead, cementing the parasitic relationship that corporate publishers  exert on academic institutions. Tender processes or defeat, which will it be?

## 14: Open Data, Data Carpentry and Bibliographic Data Universe: What Librarians Can Do.

#### Authors

Parthasarathi Mukhopadhyay 

#### Affiliation

Kalyani University, Kolkata, West Bengal

#### Abstract

This paper discusses the importance of open data in libraries and the need for library professionals to acquire skills in managing and analyzing data. It introduces the concept of library carpentry, a subset of data carpentry that focuses on domain-specific data skills for library professionals, such as data curation, textual data management, bibliographic content negotiation, regular expressions (regex), named entity recognition (NER), and data reconciliation, among others. Library carpentry aims to empower library personnel to apply these data skills, enhance existing services, and introduce new, data-intensive information services. The paper presents case studies that provide insights into the possibilities offered by library carpentry methods and their applications, especially in understanding bibliographic datasets available in the public domain, specifically under the Open Data Commons Open Database License (ODbL). It concludes that by embracing library carpentry, libraries can adapt to the changing information landscape and continue to be valuable resources for their communities.


## 15: Economics of Integrated Research Data Management: Enhancing Efficiency and Impact.

#### Authors

Angad Munshi & Ashim Raj Singla  

#### Affiliation
TBA

#### Abstract

This research delves into the economics of integrated research data management, exploring
the transformative potential and challenges at the intersection of data, research, and economic
understanding. The study reveals that effective data management practices play a pivotal role
in reshaping the landscape of research &amp; development. Key findings highlight the efficiency
gains attained through streamlined processes, the heightened reproducibility of studies, and
the facilitation of interdisciplinary collaboration. The economic impact is evident in tangible
benefits, including cost savings, resource optimization, and increased research productivity.
Furthermore, integrated data management fosters innovation in research methodologies and
informs evidence-based policymaking, which is also being substantiated through two case
studies. Recommendations are proposed for researchers, institutions, and policymakers to
navigate the cultural shift towards data literacy, invest in technological infrastructure, and
uphold ethical considerations. In conclusion, the significance of this research lies in its
contribution to advancing research practices in the era of big data, emphasizing the
transformative potential of integrated research data management for researchers, institutions,
and policymakers alike.


## 16: Post publication review: The role of science news outlets and social media.

#### Authors

Dasapta Erwin Irawan

#### Affiliation

Applied Geology Research Group, Faculty of Earth Sciences and Technology

Institut Teknologi Bandung

#### Abstract

This abstract discusses four recent significant academic incidents. The first is regarding the retraction of an article suggesting Gunung Padang in Indonesia could be the world's oldest pyramid. The second incident pertains to a paper retracted from Frontiers about an AI-created mouse with oversized genitals. The third case revolves around a Dean receiving backlash for publishing numerous papers with co-authors added without their consent. The last incident involves an author finding his paper rewritten using AI and subsequently published.

The situations mentioned above are identified not through formal pre-publication review, but through informal post-publication review. I came across a group of researchers who published their review on the pyramid directly on YouTube.

This evidence suggests that the term "peer-review" should be broadened in terms of its timing and its reviewers:
1.	With respect to the timing of the review process, it's important to note that it should not be exclusively dependent on the traditional method of pre-publication evaluation. This traditional approach has demonstrated its vulnerabilities over time, as it has been known to approve papers that are, upon further review, questionable in their validity or scientific integrity. Therefore, it is crucial to consider alternative or additional methods to ensure a more thorough and rigorous review process.
2.	From a reviewer's standpoint, assessments of a paper should not be limited to two or three experts assigned by a journal. A more comprehensive peer review process would involve general scientific experts and practitioners with extensive experience. The medium for commentary should not be confined to academic journals (in the form of commentary articles), but should expand to various science news outlets like The Conversation, and various social media platforms, including YouTube.
3.	Further development, science news outlets and social media also play an important role in pre-publication review when a journal requires manuscript discussion through discussion in public media.
   
While it's important to acknowledge that this particular method isn't universally applicable, and it's certainly true that not all research can be thoroughly examined in this manner, its value cannot be understated. It is, in fact, extremely useful in specific contexts and scenarios. This method is particularly valuable for uncovering clear errors or instances of unethical behavior. These could be subtle inconsistencies that might initially go unnoticed or more blatant transgressions that blatantly defy ethical standards. In either case, this method serves as a powerful tool in maintaining the integrity of research efforts.

**Contexts**

**Case 1:** The paper by Dr. Danny Hilman Natawidjaja and his team claimed that the megalithic site of Gunung Padang was built as a pyramid around 25,000 years ago, based on ground penetration radar surveys and radiocarbon dating. However, the paper was retracted due to concerns raised by experts in geophysics, archaeology, and radiocarbon dating. The main error identified was the misapplication of radiocarbon dating to soil samples not associated with any man-made artifacts or features, leading to an incorrect interpretation of the site's age.

**Case 2:** A scientific study published in Frontiers in Cell and Developmental Biology, which used an AI image generator to create nonsensical images, was retracted after widespread criticism. The incident underscores the importance of rigorous peer review and responsible use of AI in scientific research.

**Case 3:** Kumba Digdowiseiso, a young professor and Dean at Universitas Nasional Indonesia, faced allegations of academic misconduct, including unauthorized inclusion of international academics as co-authors in his publications. The issue surfaced when lecturers from Universiti Malaysia Terengganu found their names listed as authors in Kumba’s work without their consent. This incident has sparked discussions about academic integrity in Indonesia, leading to calls for reforms in higher education policy and the need for academic freedom.

**Case 4:** Another potential misuse of AI technology is plagiarism, where someone could copy an entire manuscript and use AI to subtly rephrase it. This shows a blatant disregard for intellectual property rights and can dilute original work, contributing no new knowledge to society.


## 17: Impact of Climate change on Food Security

#### Authors

Sawan Yadav, Yogita, Diya, Nancy, Jayant Maini, Vineeta Sharma and Preeti Nandal*

#### Affiliation

Department of Biotechnology, School of Engineering and Technology, Manav Rachna
International Institute of Research and Studies (MRIIRS), Faridabad, Haryana, India.

#### Abstract

The ever-increasing population poses a major threat to feeding of billions which in turn
challenges food secutrity. In the present scenario, a third of all food produced (~2.5 billion
tonnes) is wasted annually. Whereas 20-40% of the annual Global Crop yield is lost due to
plant pathogens. Thus, exacerbating the food security. The climate change is promoting the
growth of these spoilage microorganisms. These plant pathogens respond to changing climate
in three keyways- multiplication (increased reproduction), migration (to new location/ host
jumping) and evolution (genetic trait alteration and speciation). Therefore, it is the need of
the hour to identify ways to reduce the yield loss caused by the microbes that turns
pathogenic as a result of climate change. The main goals of this study are to gather
information about the realtionship between pathogens growth and climate change, summarize
the information, and develop a regression model using multiple variables to forecast how
climate change will affect growth of these pathogens, then crop yield and finally the prices of
food product in market. This prediction model can help farmers and farming businesses to
predict crop yield in a particular season, knowing the cutltivation and harvest time of a
particular crop in order to generate high yield crop.


## 18: The Interconnected Dynamics of Climate Change, Plastic Pollution, and Human Health for Sustainable Solutions

#### Authors

Swasti Verma, Tanvi Sidwani, Hiya Goel, Preeti Nandal, Jayant Maini and Vineeta
Sharma*

#### Affiliation

Department of Biotechnology, School of Engineering and Technology, Manav Rachna
International Institute of Research and Studies, Faridabad, Haryana, INDIA.

#### Abstract

Plastic pollution represents a global environmental crisis of significant concern, evidenced by
staggering statistics and widespread detrimental effects on ecosystems and human well-being.
This study comprehensively examines the multifaceted dimensions of plastic pollution,
elucidating its pervasive prevalence, diverse typologies, and extensive impacts across various
domains. Ranging from the proliferation of single-use plastics to the omnipresence of
microplastics, the ubiquity of plastic waste poses dire threats to marine ecosystems, terrestrial
habitats, and the broader planetary health. Moreover, the intricate nexus between climate
change, plastic pollution, and human health unveils a complex interplay of challenges, where
climate change exacerbates plastic pollution dynamics while plastic pollution contributes to
climate change through greenhouse gas emissions and carbon cycle disruption. A two-step
methodology was adopted to conduct the present comprehensive study. Firstly, we utilized
Pygetpapers command-line tool to systematically retrieve scientific papers from repositories
such as PubMed, using relevant search terms and filters. Subsequently, document analysis
using Doc Analysis tool to extract key information, analyse text content, and identify relevant
papers based on predefined criteria, facilitating the synthesis of findings was performed. In
response to these intertwined challenges, this study proposes the Ecosynergy Insight tool, an
innovative tool designed to provide stakeholders with data-driven insights and encourage
collaborative efforts to mitigate the effects of climate change, reduce plastic pollution, and
protect human health. With its cutting-edge features and multidisciplinary methodology,
Ecosynergy Insight seeks to ignite transformative actions towards a resilient and sustainable
future.


## 19: Harnessing data mining tools to evaluate the impact of the meat industry on climate.

#### Authors

Anmol Negi 1 , Ishita Singh 2 , Paridhi Gupta 2 , Ashwina Prasad 1 , Aayush
Kukreja 1 , Preeti Nandal 2 , Vineeta Sharma 2 , Jayant Maini 2*

#### Affiliation

1 Department of Computer Sciences and Engineering, School of Engineering and
Technology, Manav Rachna International Institute of Research and Studies,
Faridabad, Haryana, India
2 Department of Biotechnology, School of Engineering and Technology, Manav
Rachna International Institute of Research and Studies, Faridabad, Haryana, India
*Corresponding Author

#### Abstract

The meat industry has a significant impact on climate change. Cattle contributes to
13-17% of the greenhouse gas emissions annually along with the collateral damage
associated with deforestation of grasslands and increasing antimicrobial
resistance. To call attention to this issue, the authors employed advanced data
science techniques to extract insights from IPCC reports. Leveraging PyAMI
HTML, PyGetPapers and using docanalysis, the team meticulously analysed
specific sections related to food security, focusing on occurrence of the keyword
&quot;meat” and extracting valuable insights from a subset of the IPCC chapter PDFs,
translating them into graphs, tables and CSV files. The analysis led to the
following observations a) a drastic increase in annual meat consumption from the
year 1990 to 2020 which b) correlated with the increase in annual methane
emissions 1960 to 2010, cattle being a major contributor. With this the authors
bring a sharp focus on the problem of meat industries and its major contribution to
the threat we face in the form of climate change. Furthermore, this technical
contribution seeks to instill informed decision making and collaborative action
towards a sustainable future, tackling a small portion of the massive issue of
climate change.

