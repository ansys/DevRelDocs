---
uid: Ans.DataProcessing.operators.result.mapdl.run
---

# *class* run(mapdl_exe_path: object = None, working_dir: object = None, number_of_processes: object = None, number_of_threads: object = None, data_sources: object = None, server_mode: object = None, config: OperatorConfig = None)

Solve in mapdl a dat/inp file and returns a datasources with the rst file.

available inputs: `mapdl_exe_path` (string) (optional), `working_dir` (string) (optional), `number_of_processes` (Int32) (optional), `number_of_threads` (Int32) (optional), `data_sources` (DataSources), `server_mode` (bool) (optional)

available outputs: `data_sources` (DataSources), `ip` (string), `port` (string)

**DPF Framework Reference:** [run operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/run.md)

**Parameters:**

* **mapdl_exe_path**
* **working_dir**
* **number_of_processes**
* **number_of_threads**
* **data_sources**
* **server_mode**
* **config**

**Example:**

```python
op = run()

op = run(mapdl_exe_path=my_mapdl_exe_path,working_dir=my_working_dir,number_of_processes=my_number_of_processes,number_of_threads=my_number_of_threads,data_sources=my_data_sources,server_mode=my_server_mode)
```

## Inputs

### mapdl_exe_path

**Type:** *LinkableInput*

### working_dir

**Type:** *LinkableInput*

### number_of_processes

Set the number of MPI processes used for resolution (default is 2)

**Type:** *LinkableInput*

### number_of_threads

Set the number of threads used for resolution (default is 1)

**Type:** *LinkableInput*

### data_sources

data sources containing the input file.

**Type:** *LinkableInput*

### server_mode

used when a user includes commands in the input file allowing to launch DPF server inside MAPDL to interact with MAPDL using DPF client API

**Type:** *LinkableInput*

## Outputs

### data_sources

returns the data source if the server_mode pin is not set to yes

**Type:** *LinkableOutput*

### ip

returns the Ip if the server_mode pin is set to yes

**Type:** *LinkableOutput*

### port

returns a port when the server mode pin is set to yes

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
