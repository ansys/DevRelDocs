---
uid: Ans.DataProcessing.operators.math.centroid
---

# *class* centroid(fieldA: object = None, fieldB: object = None, factor: object = None, config: OperatorConfig = None)

Computes centroid of field1 and field2, using fieldOut = field1*(1.-fact)+field2*(fact). Only works by index.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer), `factor` (double)

available outputs: `field` (Field)

**DPF Framework Reference:** [centroid operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/centroid.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **factor**
* **config**

**Example:**

```python
op = centroid()

op = centroid(fieldA=my_fieldA,fieldB=my_fieldB,factor=my_factor)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

### factor

Scalar

**Type:** *LinkableInput*

## Outputs

### field

Field with centroid calculation: fieldA*(1-factor) + fieldB*factor

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
