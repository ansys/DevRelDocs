---
uid: Ans.DataProcessing.operators.server.grpc_start_server
---

# *class* grpc_start_server(ip: object = None, port: object = None, starting_option: object = None, should_start_server: object = None, data_sources: object = None, dpf_context: object = None, transport_mode: object = None, tls_certificates_dir: object = None, config: OperatorConfig = None)

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

available inputs: `ip` (string) (optional), `port` (string, Int32) (optional), `starting_option` (Int32) (optional), `should_start_server` (bool) (optional), `data_sources` (DataSources) (optional), `dpf_context` (string, Int32) (optional), `transport_mode` (Int32) (optional), `tls_certificates_dir` (string) (optional)

available outputs: `grpc_streams` (StreamsContainer)

**DPF Framework Reference:** [grpc_start_server operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/server/grpc_start_server.md)

**Parameters:**

* **ip**
* **port**
* **starting_option**
* **should_start_server**
* **data_sources**
* **dpf_context**
* **transport_mode**
* **tls_certificates_dir**
* **config**

**Example:**

```python
op = grpc_start_server()

op = grpc_start_server(ip=my_ip,port=my_port,starting_option=my_starting_option,should_start_server=my_should_start_server,data_sources=my_data_sources,dpf_context=my_dpf_context,transport_mode=my_transport_mode,tls_certificates_dir=my_tls_certificates_dir)
```

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

### transport_mode

**Type:** *LinkableInput*

### tls_certificates_dir

Path to certificates directory when mTLS mode is enabled.

**Type:** *LinkableInput*

## Outputs

### grpc_streams

dpf streams handling the server, if the server is started in this thread, then nothing is added in output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
