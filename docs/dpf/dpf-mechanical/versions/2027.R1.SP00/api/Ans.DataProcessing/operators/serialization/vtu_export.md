---
uid: Ans.DataProcessing.operators.serialization.vtu_export
---

# *class* vtu_export(directory: object = None, base_name: object = None, mesh: object = None, fields1: object = None, fields2: object = None, write_mode: object = None, as_point_cloud: object = None, export_faces: object = None, mesh_properties: object = None, config: OperatorConfig = None)

Export DPF mesh and field data to **VTK Unstructured Grid (VTU)** format.

Supports time-based data export (creates separate `.vtu` files per time step) and various output modes.

Compatible with VTK/ParaView visualization tools.

available inputs: `directory` (string), `base_name` (string) (optional), `mesh` (MeshedRegion), `fields1` (Field, FieldsContainer, PropertyField), `fields2` (Field, FieldsContainer, PropertyField), `write_mode` (string) (optional), `as_point_cloud` (bool) (optional), `export_faces` (bool) (optional), `mesh_properties` (StringField) (optional)

available outputs: `path` (DataSources)

**DPF Framework Reference:** [vtu_export operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/vtu_export.md)

**Parameters:**

* **directory**
* **base_name**
* **mesh**
* **fields1**
* **fields2**
* **write_mode**
* **as_point_cloud**
* **export_faces**
* **mesh_properties**
* **config**

**Example:**

```python
op = vtu_export()

op = vtu_export(directory=my_directory,base_name=my_base_name,mesh=my_mesh,fields1=my_fields1,fields2=my_fields2,write_mode=my_write_mode,as_point_cloud=my_as_point_cloud,export_faces=my_export_faces,mesh_properties=my_mesh_properties)
```

## Inputs

### directory

directory path

**Type:** *LinkableInput*

### base_name

vtu base file name, (default is file)

**Type:** *LinkableInput*

### mesh

mesh

**Type:** *LinkableInput*

### fields1

Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored.

**Type:** *LinkableInput*

### fields2

Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored.

**Type:** *LinkableInput*

### write_mode

Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)

**Type:** *LinkableInput*

### as_point_cloud

Whether to export the mesh as a point cloud. Default is False.

**Type:** *LinkableInput*

### export_faces

Whether to also export faces as shell elements when the mesh contains cells. Default is False.

**Type:** *LinkableInput*

### mesh_properties

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
