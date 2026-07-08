---
category: composite
plugin: composite
license: None
---

# composite:ls_dyna_material_support_provider

**Version: 0.0.0**

## Description

Extracts the material IDs and VUUIDs from a k file and provides a material support. Other formats are not supported (yet). The material UIDs can be added as a comment in the k-file like '$Material Id = {1,47527DFF-B313-4C56-B736-83D870A0C299, Orthotropic}' or '$Material Unique Id = {2,1c1c07b7-93da-4f89-b10e-43ca776ef7a5, Orthotropic}'. The values are material index, versioned UUID, and name.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | LS Dyna input file (*.k) as data source. Use LsDynaInputFile as key to add a k-file to the DataSources object. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| abstract_field_support |`abstract_field_support` | Material support (CFieldSupportBase). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: ls_dyna_material_support_provider

 **Full name**: composite.ls_dyna_material_support_provider

 **Internal name**: composite::ls_dyna_material_support_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.