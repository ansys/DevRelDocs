---
uid: Ans.DataProcessing.operators.utility.merge_fields
---

# *class* merge_fields(sum_merge: object = None, merged_support: object = None, fields1: object = None, fields2: object = None, config: OperatorConfig = None)

Assembles a set of fields into a unique one.

available inputs: `sum_merge` (bool) (optional), `merged_support` (AbstractFieldSupport) (optional), `fields1` (Field, FieldsContainer), `fields2` (Field, FieldsContainer)

available outputs: `merged_field` (Field)

**DPF Framework Reference:** [merge_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_fields.md)

**Parameters:**

* **sum_merge**
* **merged_support**
* **fields1**
* **fields2**
* **config**

**Example:**

```python
op = merge_fields()

op = merge_fields(sum_merge=my_sum_merge,merged_support=my_merged_support,fields1=my_fields1,fields2=my_fields2)
```

## Inputs

### sum_merge

Default is false. If true, redundant quantities are summed instead of being ignored.

**Type:** *LinkableInput*

### merged_support

Already merged field support.

**Type:** *LinkableInput*

### fields1

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

### fields2

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
