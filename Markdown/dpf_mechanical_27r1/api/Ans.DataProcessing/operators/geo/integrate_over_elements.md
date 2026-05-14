---
uid: Ans.DataProcessing.operators.geo.integrate_over_elements
---

# *class* integrate_over_elements(field: object = None, scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Integration of an input field over mesh.

available inputs: `field` (Field), `scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [integrate_over_elements operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/integrate_over_elements.md)

**Parameters:**

* **field**
* **scoping**
* **mesh**
* **config**

**Example:**

```python
op = integrate_over_elements()

op = integrate_over_elements(field=my_field,scoping=my_scoping,mesh=my_mesh)
```

## Inputs

### field

**Type:** *LinkableInput*

### scoping

Integrate the input field over a specific scoping.

**Type:** *LinkableInput*

### mesh

Mesh to integrate on. If not provided, the one from input field is employed.

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
