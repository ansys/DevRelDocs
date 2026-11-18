---
uid: Ans.DataProcessing.operators.mapping.prepare_mapping_workflow
---

# *class* prepare_mapping_workflow(input_support: object = None, output_support: object = None, filter_radius: object = None, influence_box: object = None, config: OperatorConfig = None)

Generates a workflow for mapping field or fields-container results from a source support to a target support using

[radial basis function](https://en.wikipedia.org/wiki/Radial_basis_function) (RBF) interpolation.

The workflow exposes `source`, `optional_target_support`, and `target` pins for the mapping operation.

If `filter_radius` is omitted and the source support is or carries a mesh region, the radius is derived from the source

mesh. If no mesh can be obtained from the source support, `filter_radius` must be provided explicitly.

available inputs: `input_support` (Field, MeshedRegion), `output_support` (Field, MeshedRegion) (optional), `filter_radius` (double) (optional), `influence_box` (double) (optional)

available outputs: `mapping_workflow` (Workflow)

**DPF Framework Reference:** [prepare_mapping_workflow operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mapping/prepare_mapping_workflow.md)

**Parameters:**

* **input_support**
* **output_support**
* **filter_radius**
* **influence_box**
* **config**

**Example:**

```python
op = prepare_mapping_workflow()

op = prepare_mapping_workflow(input_support=my_input_support,output_support=my_output_support,filter_radius=my_filter_radius,influence_box=my_influence_box)
```

## Inputs

### input_support

Source support from which to map results. Provide a mesh region or a one-dimensional vector field with three components containing 3D coordinates. If a field is provided, its coordinate data is used directly for RBF construction. If the field has an associated mesh support, that mesh is used to derive the automatic filter radius.

**Type:** *LinkableInput*

### output_support

Target support to which results will be mapped. Provide a mesh region or a one-dimensional vector field with three components containing 3D target coordinates. If a field is provided, its coordinate data is used directly as target locations. If a mesh region is provided, its coordinates are extracted and a mesh support is attached to the output. The output workflow exposes an `optional_target_support` input pin. When this pin is provided, it is used as the default target support; when omitted, the exposed pin must be supplied before the workflow runs.

**Type:** *LinkableInput*

### filter_radius

Radius used by the RBF filter. If omitted and the source support is or carries a mesh region, the value is derived from the source mesh. If no mesh is accessible from the source support, this pin must be supplied explicitly. An explicitly supplied value takes precedence over the mesh-derived value.

**Type:** *LinkableInput*

### influence_box

Size of the influence box for RBF interpolation. Defines the spatial extent for neighbor search. If not provided, defaults to 4 times the filter radius.

**Type:** *LinkableInput*

## Outputs

### mapping_workflow

Workflow configured for mapping operations. Exposes `source` as a field or fields container to map. Exposes `optional_target_support` as the target coordinates or mesh support. Exposes `target` as the corresponding mapped field or fields container.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
