---
title: Alpha Tests for FSCI 2023
date: 2023-08-02
description: To get started with, here are some tests you could run to familiarise yourself with our toolchain. 
author: The team
tags:
  - semanticclimate
  - hackathon
---

# Pre-requisite
All of our tools are run written in Python and need to be run from the Commandline. 
## Install Python and Pip (Instruction Credits: Waheb Mehdi)

### 1. Downloading Python from www.python.org

- Go to [www.python.org](www.python.org) and hover over the "Downloads" tab.
- Click on the option to download Python (we recommend version 3.8.) for your Windows system.
- Once the file is downloaded, double click on it to launch the Python for Windows setup.
- In the Python setup dialog box, make sure to check the option "Add python.exe to PATH" to enable accessing Python from the command line.
- Click on "Install now" and wait for a few minutes while Python setup completes the installation.
  
### 2. Verify Python installation

Open your command line interface (CMD or PowerShell).
Type either of the following commands:
```
python --version
```
or
```
py --version
```

This command should display the version of Python installed on your machine and verify the successful installation.

### Installing pip

Pip is a package manager in Python that helps you download packages from the Python Package Index (PyPi).

Newer versions of Python (starting from Python 3.4) come with pip preinstalled. If you're running an older version, follow these steps to manually install pip from the command line:
```
python -m ensurepip --upgrade
```
 
To ensure that pip was installed correctly, run the following command:
```
pip --version
```

If the installation was successful, this command will display the version number of pip.


# Test 01
It would be very useful if you could test whether our PDF to HTML tool pyamihtml can be installed. Please note any crashes or garbles
```
pip install pyamihtml==0.0.7a1
pyamihtml IPCC --help 
```

That should take a minute or so (more if you don't have some of the libraries installed) and give a commandlne help message.

# Test 02A

Alpha Test for experienced installers (with pyamihtml) 

If you have installed pyamihtml (see TEST 01) then please try to run it on  @yasin's Chapter05 (114 pages of PDF). You will read directly from the IPCC site (so need to be connected). You need a directory to store the results (here I create one under my HOME directory, but you can use anything that makes sense). This will probably take 30-60 seconds - depends mainly on download speeds.
```
pyamihtml IPCC --input https://www.ipcc.ch/site/assets/uploads/sites/4/2022/11/SRCCL_Chapter_5.pdf --outdir $HOME/temp/ar6/srccl/chapter05
```

Please let us know how you get on. A satisfactory run starts like this:
```
==============PAGE 1================
writing XML /Users/pm286/temp/ar6/srccl/chapter05/page_1.html
==============PAGE 2================
writing XML /Users/pm286/temp/ar6/srccl/chapter05/page_2.html
==============PAGE 3================
and ends like:
==============PAGE 114================
writing XML /Users/pm286/temp/ar6/srccl/chapter05/page_114.html
writing XML /Users/pm286/temp/ar6/srccl/chapter05/total_pages.html
total_pages elems: 1661
total_pages content 1661
wrote: /Users/pm286/temp/ar6/srccl/chapter05/styles1.html
wrote: /Users/pm286/temp/ar6/srccl/chapter05/groups_styles.html
wrote: /Users/pm286/temp/ar6/srccl/chapter05/groups_groups.html
wrote: /Users/pm286/temp/ar6/srccl/chapter05/groups_statements.html
after sections: 0
debug divs: 0
```

View `Users/pm286/temp/ar6/srccl/chapter05/groups_groups.html``
in a browser and verify it makes sense.

# Test 02B

Alpha Test for experienced installers (with `pyamihtml`)  

As for TEST2a (see replies above) but use 
@shiwani’s chapter (High mountains) https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/04_SROCC_Ch02_FINAL.pdf
and output `$HOME/temp/ar6/srocc/chapter02`
```
pyamihtml IPCC --input https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/04_SROCC_Ch02_FINAL.pdf --outdir $HOME/temp/ar6/srocc/chapter02
```
# Test 02C
Alpha Test for experienced installers (with pyamihtml) 

Use the team's chapter on urban systems (cities) https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_Chapter08.pdf and output `$HOME/temp/ar6/wg3/chapter08`

```
pyamihtml IPCC --input https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_Chapter08.pdf --outdir $HOME/temp/ar6/wg3/chapter08
```

NOTE: The original chapters came out last year in draft form but this year were replaced by final reports. Make sure you use the later ones (our repo contains both. 

# Test 03
Alpha Test for experienced installers (with pygetpapers) 

Ayush Garg joined semanticClimate 3 years ago when he was 15! He and I took Rik Smith-Unna's getpapers and Pythonised it. It lets you search the scholarly literature and download it automatically. This tool searches repositories with APIs. The default is europepmc.org , a collection of all Open biomedical data (this is interpreted very widely and increasingly include maths, social sciences, etc.) It's the go-to place for an initial scoping of the literature.
pygetpapers wraps a traditional boolean text query (with metadata, dates, access, etc) and submits it to EPMC. It receives the hits as a JSON file, downloads it and then systematically retrieves hits as (a) PDF (b) XML.

An example for recent climate change papers:

- first install pygetpapers
```
pip install pygetpapers
```
 
then run the search. This is "climate change" published in 2023. The command will search EuropePMC, download 10 papers, with PDF and XML to a named directory. It takes a bit of time as we done't want to overload the server. If it works expand to a few more

```
pygetpapers -q "climate crisis" --startdate 2023 -p -x -k 10 -o ~/temp/climate_crisis
```

# Test 04
Now we have got HTML/XML after running either `pygetpapers` on a repository or `pyamihtml` on a local corpus. To extract the science we use docanalysis written by Shweata Hegde and Ayush Garg. 

This searches the corpus in either:
- supervised mode where we have lists of words that might occur in the text OR
- unsupervised keyword/keyphrase extraction where language processing models find phrases that are statistically significant.

The next phase is to link the terms to Wikidata. If you have never used WD think of it of all the data in Wikipedia, and then a lot more. over 100,000,000 pieces of data. Many of these are climate terms, so we can link to WD (of course it's Open). The next phase is to analyse the search results. We will probably do this with Pandas - the Python data analysis/presentation tool.


**NOTE: docanalysis needs Python <= 3.8**
- Install docanalysis. See https://pypi.org/project/docanalysis/ (`pip install docanalysis``)
test it runs:
```
docanalysis
```

... gives me ...

```
docanalysis
/opt/anaconda3/lib/python3.8/site-packages/_distutils_hack/__init__.py:36: UserWarning: Setuptools is replacing distutils.
  warnings.warn("Setuptools is replacing distutils.")
usage: docanalysis [-h] [--run_pygetpapers] [--make_section] [-q QUERY] [-k HITS] [--project_name PROJECT_NAME]
                   [-d [DICTIONARY [DICTIONARY ...]]] [-o OUTPUT] [--make_ami_dict MAKE_AMI_DICT]
                   [--search_section [SEARCH_SECTION [SEARCH_SECTION ...]]] [--entities [ENTITIES [ENTITIES ...]]]
                   [--spacy_model SPACY_MODEL] [--html HTML] [--synonyms SYNONYMS] [--make_json MAKE_JSON] [--search_html]
                   [--extract_abb EXTRACT_ABB] [-l LOGLEVEL] [-f LOGFILE]

Welcome to docanalysis version 0.1.9. -h or --help for help

optional arguments:
  -h, --help            show this help message and exit
  --run_pygetpapers     [Command] downloads papers from EuropePMC via pygetpapers
  --make_section        [Command] makes sections; requires a fulltext.xml in CTree directories
  -q QUERY, --query QUERY
                        [pygetpapers] query string
  -k HITS, --hits HITS  [pygetpapers] number of papers to download
  --project_name PROJECT_NAME
                        CProject directory name
  -d [DICTIONARY [DICTIONARY ...]], --dictionary [DICTIONARY [DICTIONARY ...]]
                        [file name/url] existing ami dictionary to annotate sentences or support supervised entity
                        extraction
  -o OUTPUT, --output OUTPUT
                        outputs csv with sentences/terms
  --make_ami_dict MAKE_AMI_DICT
                        [Command] title for ami-dict. Makes ami-dict of all extracted entities; works only with spacy
  --search_section [SEARCH_SECTION [SEARCH_SECTION ...]]
                        [NER/dictionary search] section(s) to annotate. Choose from: ALL, ACK, AFF, AUT, CON, DIS, ETH,
                        FIG, INT, KEY, MET, RES, TAB, TIL. Defaults to ALL
  --entities [ENTITIES [ENTITIES ...]]
                        [NER] entities to extract. Default (ALL). Common entities SpaCy: GPE, LANGUAGE, ORG, PERSON (for
                        additional ones check: ); SciSpaCy: CHEMICAL, DISEASE
  --spacy_model SPACY_MODEL
                        [NER] optional. Choose between spacy or scispacy models. Defaults to spacy
  --html HTML           outputs html with sentences/terms
  --synonyms SYNONYMS   annotate the corpus/sections with synonyms from ami-dict
  --make_json MAKE_JSON
                        outputs json with sentences/terms
  --search_html         searches html documents (mainly IPCC)
  --extract_abb EXTRACT_ABB
                        [Command] title for abb-ami-dict. Extracts abbreviations and expansions; makes ami-dict of all
                        extracted entities
  -l LOGLEVEL, --loglevel LOGLEVEL
                        provide logging level. Example --log warning <<info,warning,debug,error,critical>>, default='info'
  -f LOGFILE, --logfile LOGFILE
                        saves log to specified file in output directory as well as printing to terminal

```

# Test 4A
Recent papers on climate crisis and floods in Ladakh.

You have to be careful with quotes as we have phrases with spaces
```
pygetpapers -q "'climate crisis' AND 'Ladakh'" --startdate 2021  -n 
```

gives:
```
INFO: Total number of hits for the query are 19
That's a good number to work with. It will go up to any number - the default is 100.
```

Now we save them:
```
pygetpapers -q "'climate crisis' AND 'Ladakh'" --startdate 2021  -x -p -o ladakh_2021
```

takes 45 sec.

Use `docanalysis` to section the papers. 
```
 docanalysis --project_name ladakh_2021 --make_section
```

This is a sophisticated search but it takes a bit of practice. This will search ALL sections in `ladakh_2021` for places (`GPE`=geopolitical entities). Run this from the PARENT directory of ladakh_2021

```
 docanalysis --project_name ladakh_2021 --entities GPE --spacy_model spacy  --output gpe.csv 
```