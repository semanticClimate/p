---
title: Regex Search
date: 2024-12-17
description: Tutorial for using Regular Expressions (Regex) in Notepad++ 
author: RK
tags:
  - semanticclimate
  - outreach
  - notebook
---

Regular Expressions (Regex) are patterns which are widely used in many programming languages and softwares to search, match, and manipulate text. 

- Notepad++
- VS Code
- Sublime Text
- Atom etc....

### Basic steps 

#### Open Find/Replace dialog in txt file:

- Press `Ctrl + F` to **Find**.
- Press `Ctrl + H` to **Replace**.

####  At the bottom of the dialog, under **Search Mode**, select:

- **Regular Expression** to enable regex.


### Basic Regex Syntax

| Symbol       | Meaning                               | Example               |
|--------------|---------------------------------------|-----------------------|
| `.`          | Matches any single character.         | `c.t` → cat, cut, cot |
| `^`          | Matches the start of a line.          | `^Hello` → Line starts with "Hello". |
| `$`          | Matches the end of a line.            | `world$` → Line ends with "world". |
| `\d`         | Matches any digit (0–9).              | `\d+` → 123, 4567     |
| `\w`         | Matches any word character (a-z, A-Z, 0-9, _). | `\w+` → hello123     |
| `\s`         | Matches any whitespace (space, tab).  | `\s+` → spaces        |
| `\b`         | Matches a word boundary.              | `\bword\b` → Exact match for "word". |
| `\`          | Escapes special characters.           | `\.` → Matches a literal period. |
| `*`          | Matches 0 or more occurrences.        | `ab*c` → ac, abc, abbc |
| `+`          | Matches 1 or more occurrences.        | `ab+c` → abc, abbc    |
| `?`          | Matches 0 or 1 occurrence.            | `colou?r` → color, colour |
| `[]`         | Matches a character set.              | `[aeiou]` → Matches vowels. |
| `|`          | Alternation (OR).                     | `cat|dog` → cat or dog. |
| `()`         | Groups expressions.                   | `(ab)+` → ab, abab    |


### Examples to show the use of regex syntax

#### for removing two spaces before any word

- **Find**: `^\s{2,}`  
- **Replace**: *(leave empty)*   

#### to remove timestamp in txt file

- **Find**: `\b\d{2}:\d{2}:\d{2}\b`  
- **Replace**: *(leave empty)* 

#### to remove two spaces between two lines

- **Find**: `\n\n`  
- **Replace**: *(leave empty)* 

#### to remove text with square brackets

- **Find**: `\[[^\]]+\]`  
- **Replace**: *(leave empty)* 

#### Add Text at the Start of Each Line
- **Find**: `^`  
- **Replace**: `YourTextHere`  
- **Example**: Adding `- ` to create a bullet list.

#### Add Text at the End of Each Line
- **Find**: `$`  
- **Replace**: `YourTextHere`  
- **Example**: Appending `;` at the end of every line.

#### Remove Blank Lines
- **Find**: `^\s*$`  
- **Replace**: *(leave empty)*  
- **Explanation**: Matches empty lines or lines with spaces.

#### Remove Numbers from Text
- **Find**: `\d+`  
- **Replace**: *(leave empty)*  
- **Explanation**: Matches any number (0–9).

#### Match Emails in Text
- **Find**: `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b`  
- **Explanation**: Matches valid email addresses.

#### Find and Replace Trailing Spaces
- **Find**: `\s+$`  
- **Replace**: *(leave empty)*  
- **Explanation**: Matches spaces at the end of each line.




