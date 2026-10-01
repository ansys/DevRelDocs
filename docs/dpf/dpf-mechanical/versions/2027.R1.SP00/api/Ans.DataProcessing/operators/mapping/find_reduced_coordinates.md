---
uid: Ans.DataProcessing.operators.mapping.find_reduced_coordinates
---

# *class* find_reduced_coordinates(coordinates: object = None, locate_tolerance: object = None, search_tolerance: object = None, mesh: object = None, use_quadratic_elements: object = None, config: OperatorConfig = None)

Performs the inverse isoparametric mapping from physical (global) coordinates to reduced (natural/parametric) coordinates within finite elements.

This is the first stage in field interpolation workflows, determining which element contains each query point and computing its local coordinates within that element.

## Mathematical formulation

For a query point $\mathbf{x}_q$ in physical space, this operator finds the element $e$ containing the point and solves the inverse mapping:

$$\mathbf{x}_q = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}) \cdot \mathbf{x}_i^{(e)}$$

to compute the reduced coordinates $\boldsymbol{\xi} = (\xi, \eta, \zeta)$ where:

- $N_i(\boldsymbol{\xi})$ are the element shape functions

- $\mathbf{x}_i^{(e)}$ are the nodal coordinates of element $e$

- $\boldsymbol{\xi}$ are the parametric coordinates in the reference element space (typically $[-1, 1]$ for most elements)

## Output format

The operator produces two synchronized outputs:

- **Reduced coordinates**: 3D vectors in parametric space, stored with the same labels/scoping structure as input coordinates

- **Element IDs**: Corresponding element identifiers, enabling subsequent interpolation operations

This operator is typically paired with `on_reduced_coordinates` to complete field interpolation: first find where points are located (`find_reduced_coordinates`), then evaluate field values at those locations (`on_reduced_coordinates`).

## Element selection at boundaries

When a query point lies near the boundary between adjacent elements, the operator uses a distance-based selection strategy:

- If the point passes the tolerant box containment test for multiple elements, the operator selects the element with the smallest computed distance to the point

- This ensures physically accurate element assignment, particularly important for points on element edges/faces where numerical tolerance could otherwise cause ambiguous assignments

- Among multiple candidates, Point Elements are only used if no other candidate is available; if no candidate strictly contains the point, permissivity is allowed only when a single candidate was found

available inputs: `coordinates` (Field, FieldsContainer, MeshedRegion, MeshesContainer), `locate_tolerance` (double) (optional), `search_tolerance` (double) (optional), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `reduced_coordinates` (FieldsContainer), `element_ids` (ScopingsContainer)

**DPF Framework Reference:** [find_reduced_coordinates operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/find_reduced_coordinates.md)

**Parameters:**

* **coordinates**
* **locate_tolerance**
* **search_tolerance**
* **mesh**
* **use_quadratic_elements**
* **config**

**Example:**

```python
op = find_reduced_coordinates()

op = find_reduced_coordinates(coordinates=my_coordinates,locate_tolerance=my_locate_tolerance,search_tolerance=my_search_tolerance,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
```

## Inputs

### coordinates

**Type:** *LinkableInput*

### locate_tolerance

**Type:** *LinkableInput*

### search_tolerance

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### use_quadratic_elements

**Type:** *LinkableInput*

## Outputs

### reduced_coordinates

**Type:** *LinkableOutput*

### element_ids

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
