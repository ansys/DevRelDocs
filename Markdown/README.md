# MarkDown metadata and table of contents

We generally follow the guidelines and rules laid out for [docfx](https://dotnet.github.io/docfx/index.html) by Microsoft, with certain restrictions. In particular, we only support GitHub-flavored MarkDown, and none of the docfx extensions to MarkDown.

## Table of Contents

To add a TOC, create a file named ```toc.yml```. Here's the structure for a simple YAML TOC:
```Items:
- name: Tutorial
 Items:
 - name: Introduction
   href: tutorial.md
 - name: Step 1
   href: step-1.md
 - name: Step 2
   href: step-2.md
 - name: Step 3
   href: step-3.md
```

The YAML document is a tree of TOC nodes, each of which has these properties:
* ```name```: The display name for the TOC node.
* ```href```: The path the TOC node leads to. Optional because a node can exist just to parent other nodes.
* ```items```: If a node has children, they're listed in the items array.
* ```uid```: The uid of the article. Can be used instead of href.

### Nested TOCs

To nest a TOC within another TOC, set the href property to point to the ```toc.yml``` file that you want to nest. You can also use this structure as a way to reuse a TOC structure in one or more TOC files. See https://dotnet.github.io/docfx/docs/table-of-contents.html for details.

## Metadata
Metadata follows the well established YAML frontmatter in MarkDown, specifically as laid out for [docfx](https://dotnet.github.io/docfx/index.html) by Microsoft. Note that all metadata keys are in lowercase.

Each MarkDown file may contain the following YAML-formatted metadata frontmatter, separated from main content by three dashes. For the main package page, that is the _first entry in ```toc.yml```, frontmatter must be present_ to define metadata for the entire documentation package. In particular, ```title``` and ```summary```, are mandatory in the main page. For all other pages,  any frontmatter keys and values are optional.
```
–––   
title: My Title
author: First Last
author email: me@example.com
summary: a text summary goes here
description: a description text here
date: 2023-07-19
status: published/unpublished
access control: internal
api categories: term(s)
product: term
product collection: term(s)
programming language: term(s)
physics: term(s)
–––
```
### Front matter keys 
#### title
The title for the content. If not provided will be derived from the first found H1 MarkDown heading.
#### author

The author of the content in First Last format. If not provided, the author name will be determined from the developer portal user that matches ```author email``` (see below).
#### author email
The email address of the author of the content. If not provided, the author will be set to _Ansys Developer’s_ email address. If no matching email is found in the developer portal, or if a user with that email has no content editor rights, then the author and email is also set to the _Ansys Developer_ user.
#### summary
Text used when providing a summary of the article in landing pages. Can also be used for description. If not provided, the summary will default to the first 128 characters of the content.
#### description
The description for the content. Can be the same as summary. If provided separately, the description will be fed to search engines in the ```<meta name="description">``` HTML metatag. If not provided, the HTML description metatag will default to the first 128 characters of the content.
#### date
The creation date assigned to this page in ISO-8601 format, ```yyyy-mm-dd```. If not supplied, the date will be set to the date of import into the developer portal.
#### status
The desired publication status of the content. One of: unpublished, published. If not provided, the content will be published immediately upon import.
#### access control 
An access control term. If not supplied, the content will be accessible to everyone. May be overridden by access controls set on the entire documentation package. Currently the only access control value is: ```Internal```
#### api categories
One or more of the api categories terms that apply to the content. A full list will be dynamically generated.
#### product
One or more of the product category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### product collection
One or more of the product collection category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### programming language
One or more of the product category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### physics
One or more of the physics terms that apply to the content. A full list will be dynamically generated.
