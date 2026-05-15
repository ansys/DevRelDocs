---
uid: Ans.DataProcessing.operators.server.grpc_start_server
---

# grpc_start_server Class

**Namespace:** [Ans.DataProcessing.operators.server](Ans_DataProcessing_operators_server.md)

## Summary

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

available inputs: `ip` (string) (optional), `port` (string, Int32) (optional), `starting_option` (Int32) (optional), `should_start_server` (bool) (optional), `data_sources` (DataSources) (optional), `dpf_context` (string, Int32) (optional)

available outputs: `grpc_streams` (StreamsContainer)

## Example

```python
op = grpc_start_server()

op = grpc_start_server(ip=my_ip,port=my_port,starting_option=my_starting_option,should_start_server=my_should_start_server,data_sources=my_data_sources,dpf_context=my_dpf_context)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.server` |
| Assembly | `Ans_Dpf_Grpc_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### ip

If no ip address is put, the local ip address is taken

**Type:** *LinkableInput*

### port

If no port is put, port 50052 is taken

**Type:** *LinkableInput*

### starting_option

default is 1 that starts server in new thread. With 0, this thread will be waiting for grpc calls and will not be usable for anything else. With 2, it the server will be started in a new process.

**Type:** *LinkableInput*

### should_start_server

If true, the server is assumed to be local and is started. If false, only a client (able to send grpc calls) will be started

**Type:** *LinkableInput*

### data_sources

A data source with result key 'grpc' and file path 'port:ip' can be used instead of the input port and IP.

**Type:** *LinkableInput*

### dpf_context

This pin is associated with pin(2) = 2 (server started in a new process). User can enter the integer associated with a DPF context (1: Standalone Context - DpfCoreStandalone.xml, 3: Custom - DpfCustomDefined.xml) or a string with the path of the XML specifying the context.

**Type:** *LinkableInput*

## Outputs

### grpc_streams

dpf streams handling the server, if the server is started in this thread, then nothing is added in output

**Type:** *LinkableOutput*

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
