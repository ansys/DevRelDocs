---
uid: Ans.DataProcessing.operators.result.torque
---

# *class* torque(fields_container: object = None, spoint: object = None, config: OperatorConfig = None)

Compute torque of a force based on a 3D point. The torque is computed in units consistent with the force and the mesh support.

available inputs: `fields_container` (FieldsContainer), `spoint` (Field, FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [torque operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/torque.md)

**Parameters:**

* **fields_container**
* **spoint**
* **config**

**Example:**

```python
op = torque()

op = torque(fields_container=my_fields_container,spoint=my_spoint)
```

## Inputs

### fields_container

Fields container containing the nodal forces. The fields must have an associated mesh support.

**Type:** *LinkableInput*

### spoint

Field or fields container containing the summation points for each associated field on pin 0. If unitless, it is assumed to be in meters.

**Type:** *LinkableInput*

### field

Deprecated alias of: spoint

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
