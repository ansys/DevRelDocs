---
uid: Ans.DataProcessing.operators.serialization.serializer_to_string
---

# serializer_to_string Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Take any input and serialize them in a string.

available inputs: `stream_type` (Int32), `any_input1` (object), `any_input2` (object)

available outputs: `nof_chunks` (Int32), `serialized_string1` (string), `serialized_string2` (string)

## Example

```python
op = serializer_to_string()

op = serializer_to_string(stream_type=my_stream_type,any_input1=my_any_input1,any_input2=my_any_input2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### stream_type

0 for string (default), 1 for binary, 2 for binary with chunked output (the output string will be returned in several chunks to prevent string memory overflows).

**Type:** *LinkableInput*

### any_input1

any input

**Type:** *LinkableInput*

### any_input2

any input

**Type:** *LinkableInput*

## Outputs

### nof_chunks

Number of chunks when mode passed to input pin(-1) = 2.

**Type:** *LinkableOutput*

### serialized_string1

**Type:** *LinkableOutput*

### serialized_string2

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
serializer_to_string()
```

#### Constructor

```python
serializer_to_string(stream_type, any_input1, any_input2, config)
```

**Parameters:**

- `stream_type` (*object*)
- `any_input1` (*object*)
- `any_input2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
serializer_to_string(config)
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
