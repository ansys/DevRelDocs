---
uid: Ans.DataProcessing.operators.logic.included_fields
---

# *class* included_fields(fieldA: object = None, fieldB: object = None, double_value: object = None, double_tolerance: object = None, config: OperatorConfig = None)

Checks if one field belongs to another.

available inputs: `fieldA` (Field), `fieldB` (Field), `double_value` (double), `double_tolerance` (double) (optional)

available outputs: `included` (bool), `message` (string)

**DPF Framework Reference:** [included_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/included_fields.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **double_value**
* **double_tolerance**
* **config**

**Example:**

```python
op = included_fields()

op = included_fields(fieldA=my_fieldA,fieldB=my_fieldB,double_value=my_double_value,double_tolerance=my_double_tolerance)
```

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

### double_value

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

**Type:** *LinkableInput*

### double_tolerance

**Type:** *LinkableInput*

## Outputs

### included

bool (true if belongs...)

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
