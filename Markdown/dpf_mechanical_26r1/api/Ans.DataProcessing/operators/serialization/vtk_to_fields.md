---
uid: Ans.DataProcessing.operators.serialization.vtk_to_fields
---

# vtk_to_fields Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Write a field based on a vtk file.

available inputs: `field_name` (string) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = vtk_to_fields()

op = vtk_to_fields(field_name=my_field_name,streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_name

name of the field in the vtk file

**Type:** *LinkableInput*

### streams

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### fields_container

fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
vtk_to_fields()
```

#### Constructor

```python
vtk_to_fields(field_name, streams, data_sources, config)
```

**Parameters:**

- `field_name` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
vtk_to_fields(config)
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
