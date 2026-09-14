---
uid: Ans.DataProcessing.operators.serialization.vtu_export
---

# *class* vtu_export(directory: object = None, base_name: object = None, mesh: object = None, fields1: object = None, fields2: object = None, write_mode: object = None, as_point_cloud: object = None, export_faces: object = None, mesh_properties: object = None, config: OperatorConfig = None)

vtu_export()

vtu_export(directory: object, base_name: object, mesh: object, fields1: object, fields2: object, write_mode: object, as_point_cloud: object, export_faces: object, mesh_properties: object, config: OperatorConfig)

vtu_export(config: OperatorConfig)



**DPF Framework Reference:** [vtu_export operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/vtu_export.md)

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
