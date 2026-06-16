---
uid: Ans.DataProcessing.operators.serialization.migrate_file_to_vtk
---

# *class* migrate_file_to_vtk(output_filename: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Take an input data sources or streams and convert as much data as possible to vtk.

available inputs: `output_filename` (string) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional)

available outputs: `data_sources` (DataSources)

**DPF Framework Reference:** [migrate_file_to_vtk operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/migrate_file_to_vtk.md)

**Parameters:**

* **output_filename**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = migrate_file_to_vtk()

op = migrate_file_to_vtk(output_filename=my_output_filename,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### output_filename

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### data_sources

Generated output vtk file

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
