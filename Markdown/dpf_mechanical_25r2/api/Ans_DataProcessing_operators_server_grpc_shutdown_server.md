---
uid: Ans.DataProcessing.operators.server.grpc_shutdown_server
---

# grpc_shutdown_server Class

**Namespace:** [Ans.DataProcessing.operators.server](Ans_DataProcessing_operators_server.md)

Shutdowns dpf's grpc server   ///available inputs: grpc_stream (StreamsContainer)
            available outputs:

grpc_shutdown_server()
grpc_shutdown_server(grpc_stream: object, config: OperatorConfig)
grpc_shutdown_server(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.server` |
| Assembly | `Ans_Dpf_Grpc_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
