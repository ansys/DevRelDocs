---
uid: Ans.DataProcessing.operators.mapping.on_coordinates
---

# *class* on_coordinates(fields_container: object = None, coordinates: object = None, create_support: object = None, mapping_on_scoping: object = None, tolerance: object = None, mesh: object = None, use_quadratic_elements: object = None, config: OperatorConfig = None)

Evaluates field values at arbitrary physical coordinates by performing element search and shape function interpolation in a single optimized operation. Coordinates for which no element can be found are omitted from the output.

## Mathematical formulation

For each query point $\mathbf{x}_q$ and field $\mathbf{u}(\mathbf{x})$, this operator computes the interpolated value:

$$\mathbf{u}(\mathbf{x}_q) = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}_q) \cdot \mathbf{u}_i$$

where:

- $\mathbf{x}_q$ is the physical coordinate where interpolation is requested

- $\boldsymbol{\xi}_q$ are the reduced coordinates of $\mathbf{x}_q$ within its containing element (computed internally)

- $N_i(\boldsymbol{\xi})$ are the element shape functions evaluated at $\boldsymbol{\xi}_q$

- $\mathbf{u}_i$ are the field values at element nodes

## Comparison with two-step workflow

This operator provides a convenient all-in-one solution for field interpolation. For more control over the interpolation process, use the two-step workflow:

1. `find_reduced_coordinates` - locates the element containing each coordinate and returns its parametric coordinates

2. `on_reduced_coordinates` - interpolates field values at those parametric coordinates

Key differences from the two-step approach:

- **Tolerance**: Uses a progressively relaxed tolerance when no element is found, vs. fixed tolerance in `find_reduced_coordinates`

- **Performance**: More efficient when intermediate reduced coordinates are not needed

Both approaches omit output entries for coordinates where no element can be found.

## Field location handling

- **Nodal fields**: Interpolates using nodal values and standard shape functions. Automatically detects whether quadratic (midside) nodes have data.

- **Elemental fields**: Uses element-averaged values with shape function evaluation at the query coordinates.

- **Shell layers**: Interpolates through shell thickness layers independently, preserving layer structure in output.

## Output structure

The output fields container preserves the label structure of input fields and coordinates. When both inputs have labels (e.g., time steps), outputs are generated for all label combinations. Output fields have nodal location with scoping corresponding to successfully interpolated coordinates.

available inputs: `fields_container` (FieldsContainer), `coordinates` (Field, FieldsContainer, MeshedRegion, MeshesContainer), `create_support` (bool) (optional), `mapping_on_scoping` (bool) (optional), `tolerance` (double) (optional), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [on_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/on_coordinates.md)

**Parameters:**

* **fields_container**
* **coordinates**
* **create_support**
* **mapping_on_scoping**
* **tolerance**
* **mesh**
* **use_quadratic_elements**
* **config**

**Example:**

```python
op = on_coordinates()

op = on_coordinates(fields_container=my_fields_container,coordinates=my_coordinates,create_support=my_create_support,mapping_on_scoping=my_mapping_on_scoping,tolerance=my_tolerance,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### coordinates

**Type:** *LinkableInput*

### create_support

**Type:** *LinkableInput*

### mapping_on_scoping

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### use_quadratic_elements

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
