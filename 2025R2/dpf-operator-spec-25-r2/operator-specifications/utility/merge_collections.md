---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:merge collections

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Merges a set of collections into a unique one.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  collections |[`vector<shared_ptr<any_collection>>`](./../../core-concepts/dpf-types#vector<shared-ptr<any-collection>>), [`any_collection`](./../../core-concepts/dpf-types#any-collection) | a vector of collections to merge or collections from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_collections |[`any_collection`](./../../core-concepts/dpf-types#any-collection) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_collections

 **Full name**: utility.merge_collections

 **Internal name**: merge::any_collection

 **License**: None
 
