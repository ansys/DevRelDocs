---
uid: Ans.DataProcessing.operators.logic.split_streams
---

# split_streams Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Splits a Streams into multiple coherent streams, actual number of outputs is always less or equal to the given desired number of ouputs.

available inputs: `streams` (StreamsContainer), `output_count` (Int32)

available outputs: `output_count` (Int32), `outputs1` (StreamsContainer), `outputs2` (StreamsContainer)

## Example

```python
op = split_streams()

op = split_streams(streams=my_streams,output_count=my_output_count)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams

Streams to split.

**Type:** *LinkableInput*

### output_count

Number of desired outputs.

**Type:** *LinkableInput*

## Outputs

### output_count

Actual number of outputs.

**Type:** *LinkableOutput*

### outputs1

Streams outputs.

**Type:** *LinkableOutput*

### outputs2

Streams outputs.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
split_streams()
```

#### Constructor

```python
split_streams(streams, output_count, config)
```

**Parameters:**

- `streams` (*object*)
- `output_count` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_streams(config)
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
