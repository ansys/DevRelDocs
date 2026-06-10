---
uid: Ans.DataProcessing.operators.server.grpc_shutdown_server
---

# grpc_shutdown_server class

**Namespace:** [Ans.DataProcessing.operators.server](index.md)

## Summary

Shutdowns dpf's grpc server

available inputs: `grpc_stream` (StreamsContainer)

available outputs:

## Example

```python
op = grpc_shutdown_server()

op = grpc_shutdown_server(grpc_stream=my_grpc_stream)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.server` |
| Assembly | `Ans_Dpf_Grpc_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### grpc_stream

dpf streams handling the server

**Type:** *LinkableInput*

## Outputs

## Constructors

#### Constructor

```python
grpc_shutdown_server()
```

#### Constructor

```python
grpc_shutdown_server(grpc_stream, config)
```

**Parameters:**

- `grpc_stream` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
grpc_shutdown_server(config)
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
