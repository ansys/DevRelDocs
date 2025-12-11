---
uid: Ans.DataProcessing.operators.result.mapdl.global_to_nodal
---

# global_to_nodal Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

## Summary

Rotate results from global coordinate system to local coordinate system.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

## Example

```python
op = global_to_nodal()

op = global_to_nodal(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
global_to_nodal()
```

#### Constructor

```python
global_to_nodal(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
global_to_nodal(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
