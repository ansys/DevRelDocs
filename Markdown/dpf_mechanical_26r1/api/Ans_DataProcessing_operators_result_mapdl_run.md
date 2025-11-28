---
uid: Ans.DataProcessing.operators.result.mapdl.run
title: run
---

# run Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

Solve in mapdl a dat/inp file and returns a datasources with the rst file.   ///available inputs: mapdl_exe_path (string) (optional), working_dir (string) (optional), number_of_processes (Int32) (optional), number_of_threads (Int32) (optional), data_sources (DataSources), server_mode (bool) (optional)
            available outputs: data_sources (DataSources), ip (string), port (string)

run()
run(mapdl_exe_path: object, working_dir: object, number_of_processes: object, number_of_threads: object, data_sources: object, server_mode: object, config: OperatorConfig)
run(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
