---
uid: Ans.DataProcessing.operators.result.nodal_to_global
---

# nodal_to_global Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Rotates nodal elemental results to global coordinate system

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

## Example

```python
op = nodal_to_global()

op = nodal_to_global(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

Vector or tensor field that must be rotated, expressed in nodal coordinate system.

**Type:** *LinkableInput*

### fieldB

Nodal euler angles defined from a result file. Those must be the rotations from Nodal to Global.

**Type:** *LinkableInput*

## Outputs

### field

Rotated field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
nodal_to_global()
```

#### Constructor

```python
nodal_to_global(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_to_global(config)
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
