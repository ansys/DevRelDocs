---
uid: Ans.DataProcessing.operators.logic.identical_mc
---

# identical_mc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Checks if two meshes_container are identical.

available inputs: `meshes_containerA` (MeshesContainer), `meshes_containerB` (MeshesContainer), `small_value` (double) (optional), `tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `boolean` (bool), `message` (string)

## Example

```python
op = identical_mc()

op = identical_mc(meshes_containerA=my_meshes_containerA,meshes_containerB=my_meshes_containerB,small_value=my_small_value,tolerance=my_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### meshes_containerA

**Type:** *LinkableInput*

### meshes_containerB

**Type:** *LinkableInput*

### small_value

Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

### compare_auxiliary

compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
identical_mc()
```

#### Constructor

```python
identical_mc(meshes_containerA, meshes_containerB, small_value, tolerance, compare_auxiliary, config)
```

**Parameters:**

- `meshes_containerA` (*object*)
- `meshes_containerB` (*object*)
- `small_value` (*object*)
- `tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_mc(config)
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
