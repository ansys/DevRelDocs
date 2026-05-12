---
uid: Ans.DataProcessing.operators.mesh.stl_export
---

# *class* stl_export(mesh: object = None, file_path: object = None, config: OperatorConfig = None)

export a mesh into a stl file.

available inputs: `mesh` (MeshedRegion), `file_path` (string)

available outputs: `data_sources` (DataSources)

**DPF Framework Reference:** [stl_export operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/stl_export.md)

**Parameters:**

* **mesh**
* **file_path**
* **config**

**Example:**

```python
op = stl_export()

op = stl_export(mesh=my_mesh,file_path=my_file_path)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

## Outputs

### data_sources

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
