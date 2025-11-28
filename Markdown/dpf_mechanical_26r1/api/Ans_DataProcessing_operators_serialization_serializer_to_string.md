---
uid: Ans.DataProcessing.operators.serialization.serializer_to_string
title: serializer_to_string
---

# serializer_to_string Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Take any input and serialize them in a string.   ///available inputs: stream_type (Int32), any_input1 (object), any_input2 (object)
            available outputs: nof_chunks (Int32), serialized_string1 (string), serialized_string2 (string)

serializer_to_string()
serializer_to_string(stream_type: object, any_input1: object, any_input2: object, config: OperatorConfig)
serializer_to_string(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
