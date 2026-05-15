---
uid: Ans.DataProcessing.operators.mapping.prepare_mapping_workflow
---

# *class* prepare_mapping_workflow(input_support: object = None, output_support: object = None, filter_radius: object = None, influence_box: object = None, config: OperatorConfig = None)

Generates a workflow that can map field results from a source support to a target support using RBF (Radial Basis Function) interpolation. The workflow exposes 'source', 'optional_target_support', and 'target' pins that can be used to perform mapping operations.

**Filter radius**: Uses an automatic value if not specified and the source support provides access to a mesh region. If no mesh is accessible from the source support, the filter radius must be provided explicitly via pin 2.

available inputs: `input_support` (Field, MeshedRegion), `output_support` (Field, MeshedRegion) (optional), `filter_radius` (double) (optional), `influence_box` (double) (optional)

available outputs: `mapping_workflow` (Workflow)

**DPF Framework Reference:** [prepare_mapping_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mapping_workflow.md)

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

Source support from which to map results. Can be a mesh region or a field containing 3D coordinates (vector field with 3 components). If a field is provided, its coordinate data is used directly for RBF construction. If the field has an associated mesh support, it will be used for automatic filter radius calculation.

**Type:** *LinkableInput*

### output_support

Target support to which results will be mapped. Can be a mesh region or a field containing 3D target coordinates (vector field with 3 components). If a field is provided, its coordinate data is used directly as target locations. If a mesh region is provided, its coordinates are extracted and a mesh support is attached to the output. The output workflow always exposes an 'optional_target_support' input pin. When this pin is provided, it acts as the default for that exposed pin, so the workflow can execute without further input; when omitted, 'optional_target_support' must be connected before the workflow is executed.

**Type:** *LinkableInput*

### filter_radius

Radius size for the RBF filter. If not provided and the source support (pin 0) is or carries a mesh region, automatically calculated from the source mesh tetrahedra as the average tetrahedron volume divided by 2. If no mesh is accessible from pin 0, this pin must be supplied explicitly.

**Type:** *LinkableInput*

### influence_box

Size of the influence box for RBF interpolation. Defines the spatial extent for neighbor search. If not provided, defaults to 4 times the filter radius.

**Type:** *LinkableInput*

## Outputs

### mapping_workflow

Workflow configured for mapping operations. Exposes input pins 'source' (field to map), 'optional_target_support' (target coordinates), and output pin 'target' (mapped result).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
