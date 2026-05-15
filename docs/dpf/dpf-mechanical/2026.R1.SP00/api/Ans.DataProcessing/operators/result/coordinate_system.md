---
uid: Ans.DataProcessing.operators.result.coordinate_system
---

# coordinate_system Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Extracts the Rotation Matrix and Origin of a specific coordinate system.

available inputs: `cs_id` (Int32), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `field` (Field)

## Example

```python
op = coordinate_system()

op = coordinate_system(cs_id=my_cs_id,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### cs_id

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### field

The first 9 double are the rotation (3x3 matrix) and the last 3 is the translation vector. The rotation matrix stored is from local to global coordinate system.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
coordinate_system()
```

#### Constructor

```python
coordinate_system(cs_id, streams_container, data_sources, config)
```

**Parameters:**

- `cs_id` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
coordinate_system(config)
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
