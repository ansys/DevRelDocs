---
uid: Ans.DataProcessing.operators.geo.element_nodal_contribution
---

# *class* element_nodal_contribution(mesh: object = None, scoping: object = None, volume_fraction: object = None, config: OperatorConfig = None)

Compute the fraction of the element measure attributed to each node of each element (fraction of the volume for 3D elements, fraction of the area for 2D elements or fraction of the length for 1D elements). It is computed by taking the integral of the shape function associated to each node within each element.

available inputs: `mesh` (MeshedRegion), `scoping` (Scoping) (optional), `volume_fraction` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [element_nodal_contribution operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/element_nodal_contribution.md)

**Parameters:**

* **mesh**
* **scoping**
* **volume_fraction**
* **config**

**Example:**

```python
op = element_nodal_contribution()

op = element_nodal_contribution(mesh=my_mesh,scoping=my_scoping,volume_fraction=my_volume_fraction)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### scoping

Integrate the input field over a specific scoping.

**Type:** *LinkableInput*

### volume_fraction

If true, returns influence volume, area or length. If false, the values are normalized with the element volume, area or length. Default: true.

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
