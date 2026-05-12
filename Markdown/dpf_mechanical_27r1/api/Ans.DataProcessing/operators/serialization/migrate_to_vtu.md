---
uid: Ans.DataProcessing.operators.serialization.migrate_to_vtu
---

# *class* migrate_to_vtu(time_scoping: object = None, streams_container: object = None, data_sources: object = None, directory: object = None, base_name: object = None, result1: object = None, result2: object = None, write_mode: object = None, config: OperatorConfig = None)

Extract results from data sources and export them to **VTU format**.

If no specific results are connected to pin **result**, automatically discovers and exports all available mesh-located results (nodal, elemental, faces).

Elemental-nodal results are converted to nodal via averaging.

All connected inputs are forwarded to the result provider operators.

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `directory` (string), `base_name` (string) (optional), `result1` (string) (optional), `result2` (string) (optional), `write_mode` (string) (optional)

available outputs: `path` (DataSources)

**DPF Framework Reference:** [migrate_to_vtu operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/migrate_to_vtu.md)

**Parameters:**

* **time_scoping**
* **streams_container**
* **data_sources**
* **directory**
* **base_name**
* **result1**
* **result2**
* **write_mode**
* **config**

**Example:**

```python
op = migrate_to_vtu()

op = migrate_to_vtu(time_scoping=my_time_scoping,streams_container=my_streams_container,data_sources=my_data_sources,directory=my_directory,base_name=my_base_name,result1=my_result1,result2=my_result2,write_mode=my_write_mode)
```

## Inputs

### time_scoping

time sets to export, default is all

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### directory

directory path

**Type:** *LinkableInput*

### base_name

vtu base file name, (default is file)

**Type:** *LinkableInput*

### result1

if Operator's names are connected to this Pin, only these results are exported (else all available results are exported)

**Type:** *LinkableInput*

### result2

if Operator's names are connected to this Pin, only these results are exported (else all available results are exported)

**Type:** *LinkableInput*

### write_mode

Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)

**Type:** *LinkableInput*

## Outputs

### path

list of output vtu file path

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
