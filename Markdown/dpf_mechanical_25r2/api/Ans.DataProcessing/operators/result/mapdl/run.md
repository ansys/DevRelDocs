---
uid: Ans.DataProcessing.operators.result.mapdl.run
---

# run Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

## Summary

Solve in mapdl a dat/inp file and returns a datasources with the rst file.

available inputs: `mapdl_exe_path` (string) (optional), `working_dir` (string) (optional), `number_of_processes` (Int32) (optional), `number_of_threads` (Int32) (optional), `data_sources` (DataSources), `server_mode` (bool) (optional)

available outputs: `data_sources` (DataSources), `ip` (string), `port` (string)

## Example

```python
op = run()

op = run(mapdl_exe_path=my_mapdl_exe_path,working_dir=my_working_dir,number_of_processes=my_number_of_processes,number_of_threads=my_number_of_threads,data_sources=my_data_sources,server_mode=my_server_mode)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
run()
```

#### Constructor

```python
run(mapdl_exe_path, working_dir, number_of_processes, number_of_threads, data_sources, server_mode, config)
```

**Parameters:**

- `mapdl_exe_path` (*object*)
- `working_dir` (*object*)
- `number_of_processes` (*object*)
- `number_of_threads` (*object*)
- `data_sources` (*object*)
- `server_mode` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
run(config)
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
