---
uid: Ans.DataProcessing.operators.logic.identical_string_fields
---

# *class* identical_string_fields(string_fieldA: object = None, string_fieldB: object = None, config: OperatorConfig = None)

Takes two string fields and compares them.

available inputs: `string_fieldA` (StringField), `string_fieldB` (StringField)

available outputs: `are_identical` (bool), `information` (string)

**DPF Framework Reference:** [identical_string_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_string_fields.md)

**Parameters:**

* **string_fieldA**
* **string_fieldB**
* **config**

**Example:**

```python
op = identical_string_fields()

op = identical_string_fields(string_fieldA=my_string_fieldA,string_fieldB=my_string_fieldB)
```

## Inputs

### string_fieldA

**Type:** *LinkableInput*

### string_fieldB

**Type:** *LinkableInput*

## Outputs

### are_identical

**Type:** *LinkableOutput*

### information

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
