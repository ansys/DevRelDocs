---
category: utility
plugin: core
license: None
---

# utility:merge weighted fields containers

**Version: 0.0.0**

## Description

Assembles a set of fields containers into a unique one, applying a weight on the sum of the fields.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -3</strong>|  sum_merge |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false. If true, redundant quantities are summed instead of being ignored. |
| <strong>Pin -2</strong>|  merged_fields_support |`abstract_field_support` | Already merged field support. |
| <strong>Pin -1</strong>|  merged_fields_containers_support |`abstract_field_support`, `umap<string,shared_ptr<abstract_field_support>>` | Already merged fields containers support. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containers |`vector<shared_ptr<fields_container>>`, [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A vector of fields containers to merge or fields containers from pin 0 to ... |
| <strong>Pin 1000</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |`vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`, `class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>` | Weights to apply to each field from pin 1000 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_weighted_fields_containers

 **Full name**: utility.merge_weighted_fields_containers

 **Internal name**: merge::weighted_fields_container

 **License**: None


## Changelog

- Version 0.0.0: Initial release.