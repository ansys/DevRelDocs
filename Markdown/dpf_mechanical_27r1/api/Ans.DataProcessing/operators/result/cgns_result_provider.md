---
uid: Ans.DataProcessing.operators.result.cgns_result_provider
---

# *class* cgns_result_provider(time_scoping: object = None, mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, result_name: object = None, region_scoping: object = None, config: OperatorConfig = None)

Read/compute names result from result streams.

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `result_name` (string) (optional), `region_scoping` (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional)

available outputs: `fields` (FieldsContainer)

**DPF Framework Reference:** [cgns_result_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cgns_result_provider.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **streams_container**
* **data_sources**
* **result_name**
* **region_scoping**
* **config**

**Example:**

```python
op = cgns_result_provider()

op = cgns_result_provider(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,result_name=my_result_name,region_scoping=my_region_scoping)
```

## Inputs

### time_scoping

time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output

**Type:** *LinkableInput*

### mesh_scoping

nodes or elements scoping required in output. The scoping's location indicates whether nodes or elements are asked. Using scopings container enables to split the result fields container in domains

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### result_name

name of the result to read. By default the name of the operator is taken.

**Type:** *LinkableInput*

### region_scoping

Optional zone name/Id of the mesh.

**Type:** *LinkableInput*

## Outputs

### fields

Results

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
