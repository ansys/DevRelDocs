---
category: composite
plugin: composite
license: None
---

# composite:ls_dyna_keyword_parser

**Version: 0.0.0**

## Description

Reads a specific keyword from an k-file. The parser reads the name of the options from the comments (standard by LSPP) if available. If the comment lines are not available, then the option name is just the index (0-based). It supports keywords which have a structure like below. Kewords such as *ELEMENT_SHELL_OFFSET or *SET_NODE_LIST_TITLE are not supported.

 *DATABASE_EXTENT_BINARY
 $    neiph     neips    maxint    strflg    sigflg    epsflg    rltflg    engflg
          0        16         5        11         1         1         0         0
 $   cmpflg    ieverp    beamip     dcomp      shge     stssz    n3thdt   ialemat
          1         0         0         0         0         0         0         0
 $  nintsld   pkp_sen      sclp     hydro     msscl     therm    intout    nodout
          0         0         0         0         2         0
 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  keyword |[`string`](../../core-concepts/dpf-types.md#standard-types) | The keyword of interest. For instance '*DATABASE_EXTENT_BINARY'. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | LS Dyna input file (*.k) as data source. Use LsDynaInputFile as key to add a k-file to the DataSources object. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| keyword_options |[`string`](../../core-concepts/dpf-types.md#standard-types) | JSON string with all the options. For instance '{"neiph": 0, "neips": 16, ...}' |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: ls_dyna_keyword_parser

 **Full name**: composite.ls_dyna_keyword_parser

 **Internal name**: composite::ls_dyna_keyword_parser

 **License**: None


## Changelog

- Version 0.0.0: Initial release.