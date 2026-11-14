---
uid: Ans.DataProcessing.operators.mesh.stl_export
---

# *class* stl_export(mesh: object = None, file_path: object = None, binary_format: object = None, config: OperatorConfig = None)

Exports the surface of a mesh to an STL file.

By default, the file is written in ASCII format; set `binary_format` to true to write a binary STL file.

available inputs: `mesh` (MeshedRegion), `file_path` (string), `binary_format` (bool) (optional)

available outputs: `data_sources` (DataSources)

**DPF Framework Reference:** [stl_export operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/stl_export.md)

**Parameters:**

* **mesh**
* **file_path**
* **binary_format**
* **config**

**Example:**

```python
op = stl_export()

op = stl_export(mesh=my_mesh,file_path=my_file_path,binary_format=my_binary_format)
```

## Inputs

### mesh

Mesh whose surface is exported to the STL file.

**Type:** *LinkableInput*

### file_path

Path of the STL file to write.

**Type:** *LinkableInput*

### binary_format

Whether to write a binary STL file. If omitted or false, the file is written in ASCII format.

**Type:** *LinkableInput*

## Outputs

### data_sources

Data sources referencing the generated STL file.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
