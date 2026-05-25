---
uid: Ans.DataProcessing.operators.logic.identical_fc
---

# *class* identical_fc(fields_containerA: object = None, fields_containerB: object = None, small_value: object = None, tolerance: object = None, config: OperatorConfig = None)

Checks if two fields_container are identical.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `small_value` (double) (optional), `tolerance` (double) (optional)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_fc.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **small_value**
* **tolerance**
* **config**

**Example:**

```python
op = identical_fc()

op = identical_fc(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,small_value=my_small_value,tolerance=my_tolerance)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### small_value

Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
