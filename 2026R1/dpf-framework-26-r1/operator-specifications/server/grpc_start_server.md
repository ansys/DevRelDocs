---
category: server
plugin: grpc
license: None
---

# server:grpc start server

**Version: 0.0.0**

## Description

Starts a dpf's grpc server (if local) or connect to one and keep it waiting for requests in a streams.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [ip](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [port](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [starting_option](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [should_start_server](#input_3) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong>|  [dpf_context](#input_5) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong>|  [transport_mode](#input_6) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong>|  [tls_certificates_dir](#input_7) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### ip (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

If no ip address is put, the local ip address is taken

<a id="input_1"></a>
### port (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types)

If no port is put, port 50052 is taken

<a id="input_2"></a>
### starting_option (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

default is 1 that starts server in new thread. With 0, this thread will be waiting for grpc calls and will not be usable for anything else. With 2, it the server will be started in a new process.

<a id="input_3"></a>
### should_start_server (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, the server is assumed to be local and is started. If false, only a client (able to send grpc calls) will be started

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

A data source with result key 'grpc' and file path 'port:ip' can be used instead of the input port and IP.

<a id="input_5"></a>
### dpf_context (Pin 5)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types)

This pin is associated with pin(2) = 2 (server started in a new process). User can enter the integer associated with a DPF context (1: Standalone Context - DpfCoreStandalone.xml, 3: Custom - DpfCustomDefined.xml) or a string with the path of the XML specifying the context. 

<a id="input_6"></a>
### transport_mode (Pin 6)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Transport Mode.
* 0: Insecure (default, localhost as default)
* 1: Insecure Legacy (Legacy logic to find non localhost interface)* 2: mTLS (ANSYS_GRPC_CERTIFICATES must point on certificates folder, containing server.crt, server.key and ca.crt)

<a id="input_7"></a>
### tls_certificates_dir (Pin 7)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Path to certificates directory when mTLS mode is enabled.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [grpc_streams](#output_0) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |


<a id="output_0"></a>
### grpc_streams (Pin 0)

- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

dpf streams handling the server, if the server is started in this thread, then nothing is added in output


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: server

 **Plugin**: grpc

 **Scripting name**: grpc_start_server

 **Full name**: server.grpc_start_server

 **Internal name**: grpc::stream_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("grpc::stream_provider"); // operator instantiation
op.connect(0, my_ip);
op.connect(1, my_port);
op.connect(2, my_starting_option);
op.connect(3, my_should_start_server);
op.connect(4, my_data_sources);
op.connect(5, my_dpf_context);
op.connect(6, my_transport_mode);
op.connect(7, my_tls_certificates_dir);
ansys::dpf::Streams my_grpc_streams = op.getOutput<ansys::dpf::Streams>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.server.grpc_start_server() # operator instantiation
op.inputs.ip.connect(my_ip)
op.inputs.port.connect(my_port)
op.inputs.starting_option.connect(my_starting_option)
op.inputs.should_start_server.connect(my_should_start_server)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.dpf_context.connect(my_dpf_context)
op.inputs.transport_mode.connect(my_transport_mode)
op.inputs.tls_certificates_dir.connect(my_tls_certificates_dir)
my_grpc_streams = op.outputs.grpc_streams()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.server.grpc_start_server() # operator instantiation
op.inputs.ip.Connect(my_ip)
op.inputs.port.Connect(my_port)
op.inputs.starting_option.Connect(my_starting_option)
op.inputs.should_start_server.Connect(my_should_start_server)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.dpf_context.Connect(my_dpf_context)
op.inputs.transport_mode.Connect(my_transport_mode)
op.inputs.tls_certificates_dir.Connect(my_tls_certificates_dir)
my_grpc_streams = op.outputs.grpc_streams.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.