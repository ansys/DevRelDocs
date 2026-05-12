---
uid: Ans.DataProcessing.operators.server.grpc_shutdown_server
---

# *class* grpc_shutdown_server(grpc_stream: object = None, config: OperatorConfig = None)

Shutdowns dpf's grpc server

available inputs: `grpc_stream` (StreamsContainer)

available outputs:

**DPF Framework Reference:** [grpc_shutdown_server operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/server/grpc_shutdown_server.md)

**Parameters:**

* **grpc_stream**
* **config**

**Example:**

```python
op = grpc_shutdown_server()

op = grpc_shutdown_server(grpc_stream=my_grpc_stream)
```

## Inputs

### grpc_stream

dpf streams handling the server

**Type:** *LinkableInput*

## Outputs

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
