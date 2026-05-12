---
uid: Ans.DataProcessing.operators.math.overall_dot
---

# *class* overall_dot(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes a dot product between two fields (fields are seen like a single large vector) and returns a scalar.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [overall_dot operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/overall_dot.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = overall_dot()

op = overall_dot(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

## Outputs

### field

Field defined on over-all location, contains a unique scalar value

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
