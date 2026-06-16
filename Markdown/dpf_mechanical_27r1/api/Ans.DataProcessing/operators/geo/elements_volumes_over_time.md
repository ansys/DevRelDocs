---
uid: Ans.DataProcessing.operators.geo.elements_volumes_over_time
---

# *class* elements_volumes_over_time(scoping: object = None, displacement: object = None, mesh: object = None, config: OperatorConfig = None)

Calculates for a mesh, the volume of each element over time for each specified time step.

available inputs: `scoping` (Scoping) (optional), `displacement` (FieldsContainer) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elements_volumes_over_time operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_volumes_over_time.md)

**Parameters:**

* **scoping**
* **displacement**
* **mesh**
* **config**

**Example:**

```python
op = elements_volumes_over_time()

op = elements_volumes_over_time(scoping=my_scoping,displacement=my_displacement,mesh=my_mesh)
```

## Inputs

### scoping

**Type:** *LinkableInput*

### displacement

Displacement field's container. Must contain the mesh if mesh not specified in input.

**Type:** *LinkableInput*

### mesh

Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
