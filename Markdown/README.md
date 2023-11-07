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
### Mandatory metadata
The mandatory [```docfx.json```](https://dotnet.github.io/docfx/docs/config.html#metadata) file is the config file for the entire documentation package. For global metadata, i.e. metadata attributes that are consistent across the set of content, use the ```globalMetadata``` property in ```docfx.json``` to apply the same metadata to all MarkDown pages. See below for allowed and supported key/value pairs. In particular, ```title```, ```summary```, and ```version``` must be present.
A minimal ```docfx.json``` file:
```
{
  "build": {
    "globalMetadata": {
      "title": "My Title",
      "summary": "a text summary goes here",
      "version": "Version_string"
    }
  }
}
```

### Optional metadata
Metadata for global or individual MarkDown files follows the well established YAML frontmatter in MarkDown, specifically as laid out for [docfx](https://dotnet.github.io/docfx/index.html) by Microsoft. Note that all metadata keys are in lowercase.
Metadata are categorized in three families: required, recommended and optional (see details on each metadata below).

Each MarkDown file may contain the following YAML-formatted metadata frontmatter, separated from main content by three dashes. For all MarkDown pages,  any frontmatter keys and values are optional, since global metadata is already specified in the mandatory ```docfx.json``` file.
```
–––   
title: My Title
author: First Last
author email: me@example.com
summary: a text summary goes here
description: a description text here
date: 2023-07-19
version: Version_string
status: published/unpublished
access control: internal
api categories: term(s)
product: term
product collection: term(s)
programming language: term(s)
physics: term(s)
–––
```
### Metadata keys 
#### title (required)
The title for the content. If not provided will be derived from the first found H1 MarkDown heading.
#### author (optional)
The author of the content in First Last format. If not provided, the author name will be determined from the developer portal user that matches ```author email``` (see below).
#### author email (optional)
The email address of the author of the content. If not provided, the author will be set to _Ansys Developer’s_ email address. If no matching email is found in the developer portal, or if a user with that email has no content editor rights, then the author and email is also set to the _Ansys Developer_ user.
#### summary (required)
Text used when providing a summary of the article in landing pages. Can also be used for description. If not provided, the summary will default to the first 128 characters of the content.
#### description (optional)
The description for the content. Can be the same as summary. If provided separately, the description will be fed to search engines in the ```<meta name="description">``` HTML metatag. If not provided, the HTML description metatag will default to the first 128 characters of the content.
#### date (optional)
The creation date assigned to this page in ISO-8601 format, ```yyyy-mm-dd```. If not supplied, the date will be set to the date of import into the developer portal.
Note that a ```last updated``` date will be derived automatically from GitHub APIs during import.
#### version (required)
The package version is a simple string and follows a pattern defined outside the scope of this document. If provided, the version string will be mapped to a version designation in the developer portal. A subpage _cannot_ have a different version from the parent package, i.e. the version provided in ```docfx.json``` is binding and authoritative. In practice, although providing a version string in a subpage is technically possible, it will not be honored and the package version will be used instead.
#### status (optional)
The desired publication status of the content. One of: unpublished, published. If not provided, the content will be published immediately upon import.
#### access control (optional)
An access control term. If not supplied, the content will be accessible to everyone. May be overridden by access controls set on the entire documentation package. Currently the only access control value is: ```Internal```
#### api categories (optional)
One or more of the api categories terms that apply to the content. A full list will be dynamically generated.
#### product (recommended)
One or more of the product category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### product collection (optional)
One or more of the product collection category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### programming language (recommended)
One or more of the product category terms that apply to the content. A full list will be dynamically generated. Generally this categorization will be set at the documentation package level.
#### physics (recommended)
One or more of the physics terms that apply to the content. A full list will be dynamically generated.

## Technical GitHub Limitations

All MarkDown repositories must have fewer than 1000 files per directory.
All text files must be less than 1 MB in size.
Images and other assets must be less than 100 MB in size per file.


Per [GitHub documentation](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content):
To get a repository's contents recursively, you can recursively get the tree.
This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the Git Trees API.
Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download. Size limits: If the requested file's size is:
- 1 MB or smaller: All features of this endpoint are supported.
- Between 1-100 MB: Only the raw or object custom media types are supported. Both will work as normal, except that when using the object media type, the content field will be an empty string and the encoding field will be "none". To get the contents of these larger files, use the raw media type.
- Greater than 100 MB: This endpoint is not supported.
