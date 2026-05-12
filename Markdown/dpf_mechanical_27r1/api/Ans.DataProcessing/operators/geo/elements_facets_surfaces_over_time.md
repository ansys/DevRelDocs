---
uid: Ans.DataProcessing.operators.geo.elements_facets_surfaces_over_time
---

# *class* elements_facets_surfaces_over_time(scoping: object = None, displacement: object = None, mesh: object = None, config: OperatorConfig = None)

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

available inputs: `scoping` (Scoping) (optional), `displacement` (FieldsContainer) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion)

**DPF Framework Reference:** [elements_facets_surfaces_over_time operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_facets_surfaces_over_time.md)

**Parameters:**

* **scoping**
* **displacement**
* **mesh**
* **config**

**Example:**

```python
op = elements_facets_surfaces_over_time()

op = elements_facets_surfaces_over_time(scoping=my_scoping,displacement=my_displacement,mesh=my_mesh)
```

## Inputs

### scoping

**Type:** *LinkableInput*

### displacement

Displacement field's container.

**Type:** *LinkableInput*

### mesh

Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.

**Type:** *LinkableInput*

## Outputs

### fields_container

Surfaces field.

**Type:** *LinkableOutput*

### mesh

Mesh made of surface elements only.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
