---
uid: Ans.DataProcessing.operators.filter.abc_weightings
---

# abc_weightings Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

## Summary

Computes ABC-weightings for the amplitude spectrum in dB units.

available inputs: `fields_container` (FieldsContainer), `weighting_type` (Int32), `shape_by_tf_scoping` (bool)

available outputs: `weightings` (FieldsContainer)

## Example

```python
op = abc_weightings()

op = abc_weightings(fields_container=my_fields_container,weighting_type=my_weighting_type,shape_by_tf_scoping=my_shape_by_tf_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

data to be weighted in dB units.

**Type:** *LinkableInput*

### weighting_type

if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed.

**Type:** *LinkableInput*

### shape_by_tf_scoping

if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false

**Type:** *LinkableInput*

## Outputs

### weightings

weighted data in dB units.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
abc_weightings()
```

#### Constructor

```python
abc_weightings(fields_container, weighting_type, shape_by_tf_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `weighting_type` (*object*)
- `shape_by_tf_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
abc_weightings(config)
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
