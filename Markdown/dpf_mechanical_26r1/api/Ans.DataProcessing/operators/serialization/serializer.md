---
uid: Ans.DataProcessing.operators.serialization.serializer
---

# serializer Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Take any input and serialize them in a file.

available inputs: `stream_type` (Int32), `file_path` (string), `any_input1` (object), `any_input2` (object)

available outputs: `file_path` (string)

## Example

```python
op = serializer()

op = serializer(stream_type=my_stream_type,file_path=my_file_path,any_input1=my_any_input1,any_input2=my_any_input2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### stream_type

0 for ASCII (default), and 1 for binary

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

### any_input1

any input

**Type:** *LinkableInput*

### any_input2

any input

**Type:** *LinkableInput*

## Outputs

### file_path

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
serializer()
```

#### Constructor

```python
serializer(stream_type, file_path, any_input1, any_input2, config)
```

**Parameters:**

- `stream_type` (*object*)
- `file_path` (*object*)
- `any_input1` (*object*)
- `any_input2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
serializer(config)
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
