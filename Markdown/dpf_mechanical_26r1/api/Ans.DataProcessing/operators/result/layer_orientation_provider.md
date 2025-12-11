---
uid: Ans.DataProcessing.operators.result.layer_orientation_provider
---

# layer_orientation_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read the layer orientations.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `layer_orientation_data` (FieldsContainer)

## Example

```python
op = layer_orientation_provider()

op = layer_orientation_provider(streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### layer_orientation_data

Requested data as FieldsContainer.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
layer_orientation_provider()
```

#### Constructor

```python
layer_orientation_provider(streams, data_sources, config)
```

**Parameters:**

- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
layer_orientation_provider(config)
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
