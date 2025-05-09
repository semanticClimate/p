---
title: amilib installation instructions 
date: 2025-05-09
description: Steps to install latest amilib in venv
author: Renu Kumari 
summary: tutorial for amilib
hide: true
tags:
  - hackathon
---

#### Introduction to `amilib`

`amilib` is a python library to support downloading and analysis of documents. 

##### [Click Here](https://github.com/petermr/amilib/blob/pmr_aug/README.md) to read more about `amilib`

### Steps to install `amilib` in virtual environment in Windows

#### Create virtual env 

- Open cmd/terminal
- Use the code `py -3.12 -m venv anyname` to create virtual env. Replace anyname with your name of the environment. python==3.12 has been added to this venv

#### Activate virtual env 

- Use the code to activate the venv created.

`source\activate\newami`

#### Install `amilib` 

Code: `pip install amilib==0.5.3`

### Verify the installation of the tool with showing help page

#### `amilib help`

Code: `amilib -h` or `amilib --help`

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/amilib_help.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### `amilib DICT`

Code : `amilib DICT -h`

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/DICT_help.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### `amilib HTML`

Code : `amilib HTML -h`

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/HTML_help.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### `amilib PDF`

Code : `amilib PDF -h`

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/PDF_help.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

#### `amilib SEARCH`

Code: `amilib SEARCH -h`

<table>
  <tr>
    <td>
      <img src='{{ "/static/img/events_all/SEARCH_help.jpg" | url }}' width="500" height="100">
    </td>
  </tr>
</table>

