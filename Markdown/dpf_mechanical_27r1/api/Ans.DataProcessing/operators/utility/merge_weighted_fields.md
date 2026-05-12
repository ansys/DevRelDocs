---
uid: Ans.DataProcessing.operators.utility.merge_weighted_fields
---

# *class* merge_weighted_fields(sum_merge: object = None, merged_support: object = None, fields1: object = None, fields2: object = None, weights1: object = None, weights2: object = None, config: OperatorConfig = None)

Assembles a set of fields into a unique one, applying a weight on the sum of the fields.

available inputs: `sum_merge` (bool) (optional), `merged_support` (AbstractFieldSupport) (optional), `fields1` (Field, FieldsContainer), `fields2` (Field, FieldsContainer), `weights1` (PropertyField), `weights2` (PropertyField)

available outputs: `merged_field` (Field)

**DPF Framework Reference:** [merge_weighted_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_weighted_fields.md)

**Parameters:**

* **sum_merge**
* **merged_support**
* **fields1**
* **fields2**
* **weights1**
* **weights2**
* **config**

**Example:**

```python
op = merge_weighted_fields()

op = merge_weighted_fields(sum_merge=my_sum_merge,merged_support=my_merged_support,fields1=my_fields1,fields2=my_fields2,weights1=my_weights1,weights2=my_weights2)
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

### weights1

Weights to apply to each field from pin 1000 to ...

**Type:** *LinkableInput*

### weights2

Weights to apply to each field from pin 1000 to ...

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
