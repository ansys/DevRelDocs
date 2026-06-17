---
uid: Ans.DataProcessing.operators.utility.merge_to_field_matrix
---

# *class* merge_to_field_matrix(fields1: object = None, fields2: object = None, config: OperatorConfig = None)

Assembles a set of fields into a field matrix.

available inputs: `fields1` (Field, FieldsContainer), `fields2` (Field, FieldsContainer)

available outputs: `merged_field_matrix` (Field)

**DPF Framework Reference:** [merge_to_field_matrix operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_to_field_matrix.md)

**Parameters:**

* **fields1**
* **fields2**
* **config**

**Example:**

```python
op = merge_to_field_matrix()

op = merge_to_field_matrix(fields1=my_fields1,fields2=my_fields2)
```

## Inputs

### fields1

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

### fields2

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_field_matrix

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
