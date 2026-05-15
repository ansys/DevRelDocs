---
uid: Ans.DataProcessing.operators.result.rigid_transformation_provider
---

# rigid_transformation_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Extracts rigid body transformation from dsub file.

available inputs: `streams` (Stream) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = rigid_transformation_provider()

op = rigid_transformation_provider(streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

data source of dsub file.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
rigid_transformation_provider()
```

#### Constructor

```python
rigid_transformation_provider(streams, data_sources, config)
```

**Parameters:**

- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rigid_transformation_provider(config)
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
