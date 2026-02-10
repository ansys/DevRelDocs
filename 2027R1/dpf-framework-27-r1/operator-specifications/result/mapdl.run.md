---
category: result
plugin: mapdl
license: None
---

# result:mapdl run

**Version: 0.0.0**

## Description

Solve in mapdl a dat/inp file and returns a datasources with the rst file.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [mapdl_exe_path](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [working_dir](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [number_of_processes](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [number_of_threads](#input_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong>|  [server_mode](#input_5) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mapdl_exe_path (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### working_dir (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### number_of_processes (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Set the number of MPI processes used for resolution (default is 2)

<a id="input_3"></a>
### number_of_threads (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Set the number of threads used for resolution (default is 1)

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

data sources containing the input file.

<a id="input_5"></a>
### server_mode (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

used when a user includes commands in the input file allowing to launch DPF server inside MAPDL to interact with MAPDL using DPF client API


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [data_sources](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
|  **1**| [ip](#output_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
|  **2**| [port](#output_2) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### data_sources (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

returns the data source if the server_mode pin is not set to yes

<a id="output_1"></a>
### ip (Pin 1)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

returns the Ip if the server_mode pin is set to yes

<a id="output_2"></a>
### port (Pin 2)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

returns a port when the server mode pin is set to yes


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl.run

 **Full name**: result.mapdl.run

 **Internal name**: mapdl::run

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl::run"); // operator instantiation
op.connect(0, my_mapdl_exe_path);
op.connect(1, my_working_dir);
op.connect(2, my_number_of_processes);
op.connect(3, my_number_of_threads);
op.connect(4, my_data_sources);
op.connect(5, my_server_mode);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
std::string my_ip = op.getOutput<std::string>(1);
std::string my_port = op.getOutput<std::string>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.mapdl.run() # operator instantiation
op.inputs.mapdl_exe_path.connect(my_mapdl_exe_path)
op.inputs.working_dir.connect(my_working_dir)
op.inputs.number_of_processes.connect(my_number_of_processes)
op.inputs.number_of_threads.connect(my_number_of_threads)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.server_mode.connect(my_server_mode)
my_data_sources = op.outputs.data_sources()
my_ip = op.outputs.ip()
my_port = op.outputs.port()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.mapdl.run() # operator instantiation
op.inputs.mapdl_exe_path.Connect(my_mapdl_exe_path)
op.inputs.working_dir.Connect(my_working_dir)
op.inputs.number_of_processes.Connect(my_number_of_processes)
op.inputs.number_of_threads.Connect(my_number_of_threads)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.server_mode.Connect(my_server_mode)
my_data_sources = op.outputs.data_sources.GetData()
my_ip = op.outputs.ip.GetData()
my_port = op.outputs.port.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.