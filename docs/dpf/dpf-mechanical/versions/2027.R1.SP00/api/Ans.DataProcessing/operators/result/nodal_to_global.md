---
uid: Ans.DataProcessing.operators.result.nodal_to_global
---

# *class* nodal_to_global(fieldA: object = None, fieldB: object = None, inverse_rotation: object = None, config: OperatorConfig = None)

Rotates nodal elemental results to global coordinate system

available inputs: `fieldA` (Field), `fieldB` (Field), `inverse_rotation` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [nodal_to_global operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/nodal_to_global.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **inverse_rotation**
* **config**

**Example:**

```python
op = nodal_to_global()

op = nodal_to_global(fieldA=my_fieldA,fieldB=my_fieldB,inverse_rotation=my_inverse_rotation)
```

## Inputs

### fieldA

Vector or tensor field that must be rotated, expressed in nodal coordinate system.

**Type:** *LinkableInput*

### fieldB

Nodal euler angles defined from a result file. Those must be the rotations from Nodal to Global.

**Type:** *LinkableInput*

### inverse_rotation

If true, we apply the inverse rotation (default is false).

**Type:** *LinkableInput*

## Outputs

### field

Rotated field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
