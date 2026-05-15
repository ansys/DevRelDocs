---
uid: Ans.DataProcessing.operators.utility.merge_fields_containers
---

# *class* merge_fields_containers(should_merge_named_selections: object = None, sum_merge: object = None, merged_fields_support: object = None, merged_fields_containers_support: object = None, fields_containers1: object = None, fields_containers2: object = None, config: OperatorConfig = None)

Assembles a set of fields containers into a unique one.

available inputs: `should_merge_named_selections` (bool) (optional), `sum_merge` (bool) (optional), `merged_fields_support` (AbstractFieldSupport) (optional), `merged_fields_containers_support` (AbstractFieldSupport) (optional), `fields_containers1` (FieldsContainer), `fields_containers2` (FieldsContainer)

available outputs: `merged_fields_container` (FieldsContainer)

**DPF Framework Reference:** [merge_fields_containers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_fields_containers.md)

**Parameters:**

* **should_merge_named_selections**
* **sum_merge**
* **merged_fields_support**
* **merged_fields_containers_support**
* **fields_containers1**
* **fields_containers2**
* **config**

**Example:**

```python
op = merge_fields_containers()

op = merge_fields_containers(should_merge_named_selections=my_should_merge_named_selections,sum_merge=my_sum_merge,merged_fields_support=my_merged_fields_support,merged_fields_containers_support=my_merged_fields_containers_support,fields_containers1=my_fields_containers1,fields_containers2=my_fields_containers2)
```

## Inputs

### should_merge_named_selections

For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

**Type:** *LinkableInput*

### sum_merge

Default is false. If true, redundant quantities are summed instead of being ignored.

**Type:** *LinkableInput*

### merged_fields_support

Already merged field support.

**Type:** *LinkableInput*

### merged_fields_containers_support

Already merged fields containers support.

**Type:** *LinkableInput*

### fields_containers1

A vector of fields containers to merge or fields containers from pin 0 to ...

**Type:** *LinkableInput*

### fields_containers2

A vector of fields containers to merge or fields containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
