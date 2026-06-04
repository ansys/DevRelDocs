---
uid: Ans.DataProcessing.operators.logic.identical_meshes
---

# identical_meshes Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

available inputs: `meshA` (MeshedRegion), `meshB` (MeshedRegion), `small_value` (double) (optional), `tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `are_identical` (bool)

## Example

```python
op = identical_meshes()

op = identical_meshes(meshA=my_meshA,meshB=my_meshB,small_value=my_small_value,tolerance=my_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### meshA

**Type:** *LinkableInput*

### meshB

**Type:** *LinkableInput*

### small_value

define what is a small value for numeric comparison (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

define the relative tolerance ceil for numeric comparison (default is 0.001).

**Type:** *LinkableInput*

### compare_auxiliary

compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### are_identical

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
identical_meshes()
```

#### Constructor

```python
identical_meshes(meshA, meshB, small_value, tolerance, compare_auxiliary, config)
```

**Parameters:**

- `meshA` (*object*)
- `meshB` (*object*)
- `small_value` (*object*)
- `tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_meshes(config)
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
