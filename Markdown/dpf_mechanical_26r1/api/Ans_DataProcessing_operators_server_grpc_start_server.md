---
uid: Ans.DataProcessing.operators.server.grpc_start_server
title: grpc_start_server
---

# grpc_start_server Class

**Namespace:** [Ans.DataProcessing.operators.server](Ans_DataProcessing_operators_server.md)

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.   ///available inputs: ip (string) (optional), port (string, Int32) (optional), starting_option (Int32) (optional), should_start_server (bool) (optional), data_sources (DataSources) (optional), dpf_context (string, Int32) (optional)
            available outputs: grpc_streams (StreamsContainer)

grpc_start_server()
grpc_start_server(ip: object, port: object, starting_option: object, should_start_server: object, data_sources: object, dpf_context: object, config: OperatorConfig)
grpc_start_server(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.server` |
| Assembly | `Ans_Dpf_Grpc_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
grpc_start_server()
```

#### Constructor

```python
grpc_start_server(ip, port, starting_option, should_start_server, data_sources, dpf_context, config)
```

**Parameters:**

- `ip` (*object*)
- `port` (*object*)
- `starting_option` (*object*)
- `should_start_server` (*object*)
- `data_sources` (*object*)
- `dpf_context` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
grpc_start_server(config)
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
