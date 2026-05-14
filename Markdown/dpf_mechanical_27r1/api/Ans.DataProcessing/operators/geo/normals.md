---
uid: Ans.DataProcessing.operators.geo.normals
---

# *class* normals(mesh: object = None, mesh_scoping: object = None, field: object = None, config: OperatorConfig = None)

compute the normals at the given nodes or element scoping based on the given mesh (first version, the element normal is only handled on the shell elements)

available inputs: `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional), `field` (Field) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [normals operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/normals.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **field**
* **config**

**Example:**

```python
op = normals()

op = normals(mesh=my_mesh,mesh_scoping=my_mesh_scoping,field=my_field)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### field

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
