---
uid: Ans.DataProcessing.operators.serialization.vtk_export
---

# *class* vtk_export(export_type: object = None, file_path: object = None, mesh: object = None, fields1: object = None, fields2: object = None, config: OperatorConfig = None)

Write the input field and fields container into a given vtk path

available inputs: `export_type` (Int32) (optional), `file_path` (string), `mesh` (MeshedRegion) (optional), `fields1` (FieldsContainer, Field), `fields2` (FieldsContainer, Field)

available outputs:

**DPF Framework Reference:** [vtk_export operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/vtk_export.md)

**Parameters:**

* **export_type**
* **file_path**
* **mesh**
* **fields1**
* **fields2**
* **config**

**Example:**

```python
op = vtk_export()

op = vtk_export(export_type=my_export_type,file_path=my_file_path,mesh=my_mesh,fields1=my_fields1,fields2=my_fields2)
```

## Inputs

### export_type

Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0)

**Type:** *LinkableInput*

### file_path

path with vtk extension were the export occurs

**Type:** *LinkableInput*

### mesh

necessary if the first field or fields container don't have a mesh in their support

**Type:** *LinkableInput*

### fields1

fields exported

**Type:** *LinkableInput*

### fields2

fields exported

**Type:** *LinkableInput*

## Outputs

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
