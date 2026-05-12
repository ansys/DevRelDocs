---
uid: Ans.DataProcessing.operators.result.mapdl.global_to_nodal
---

# *class* global_to_nodal(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Rotate results from global coordinate system to local coordinate system.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [global_to_nodal operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/global_to_nodal.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = global_to_nodal()

op = global_to_nodal(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

Vector or tensor field that must be rotated, expressed in global coordinate system.

**Type:** *LinkableInput*

### fieldB

Nodal euler angles defined from a result file. Those  must be the rotations from Nodal to Global.

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
