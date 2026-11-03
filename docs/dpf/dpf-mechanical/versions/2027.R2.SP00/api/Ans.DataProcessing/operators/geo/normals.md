---
uid: Ans.DataProcessing.operators.geo.normals
---

# *class* normals(mesh: object = None, mesh_scoping: object = None, field: object = None, requested_location: object = None, config: OperatorConfig = None)

Computes normals on skin, face, or shell meshes using the enhanced normals implementation.

Supports nodal, face, elemental, and elemental-nodal locations, including quadratic elements.

available inputs: `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional), `field` (Field) (optional), `requested_location` (string) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [normals operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/geo/normals.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **field**
* **requested_location**
* **config**

**Example:**

```python
op = normals()

op = normals(mesh=my_mesh,mesh_scoping=my_mesh_scoping,field=my_field,requested_location=my_requested_location)
```

## Inputs

### mesh

Skin, face, or shell mesh region. If omitted, the mesh is taken from the field input.

**Type:** *LinkableInput*

### mesh_scoping

Optional scoping. If omitted with a field input, the field scoping is used.

**Type:** *LinkableInput*

### field

If mesh pin 0 is not connected, the field support supplies mesh and scoping unless pin 1 is connected.

**Type:** *LinkableInput*

### requested_location

Selects output location when scoping is omitted or is Elemental or ElementalNodal. Defaults to Elemental for element meshes and Faces for face-only meshes.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
