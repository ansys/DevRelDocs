---
uid: Ans.DataProcessing.operators.utility.merge_string_fields
---

# *class* merge_string_fields(string_fields1: object = None, string_fields2: object = None, config: OperatorConfig = None)

Assembles a set of string fields into a unique one.

available inputs: `string_fields1` (StringField), `string_fields2` (StringField)

available outputs: `string_field` (StringField)

**DPF Framework Reference:** [merge_string_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_string_fields.md)

**Parameters:**

* **string_fields1**
* **string_fields2**
* **config**

**Example:**

```python
op = merge_string_fields()

op = merge_string_fields(string_fields1=my_string_fields1,string_fields2=my_string_fields2)
```

## Inputs

### string_fields1

Either a a vector of string fields to merge or string fields from pin 0 to ...

**Type:** *LinkableInput*

### string_fields2

Either a a vector of string fields to merge or string fields from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### string_field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
