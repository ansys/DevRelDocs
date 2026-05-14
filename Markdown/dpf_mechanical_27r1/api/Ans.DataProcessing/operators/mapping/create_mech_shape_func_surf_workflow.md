---
uid: Ans.DataProcessing.operators.mapping.create_mech_shape_func_surf_workflow
---

# *class* create_mech_shape_func_surf_workflow(source_mesh: object = None, target_mesh: object = None, target_scoping: object = None, options_data_tree: object = None, config: OperatorConfig = None)

Prepares a workflow able to map data from an input mesh to a target mesh.

available inputs: `source_mesh` (MeshedRegion) (optional), `target_mesh` (MeshedRegion) (optional), `target_scoping` (Scoping) (optional), `options_data_tree` (DataTree) (optional)

available outputs: `mapping_workflow` (Workflow)

**DPF Framework Reference:** [create_mech_shape_func_surf_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/create_mech_shape_func_surf_workflow.md)

**Parameters:**

* **source_mesh**
* **target_mesh**
* **target_scoping**
* **options_data_tree**
* **config**

**Example:**

```python
op = create_mech_shape_func_surf_workflow()

op = create_mech_shape_func_surf_workflow(source_mesh=my_source_mesh,target_mesh=my_target_mesh,target_scoping=my_target_scoping,options_data_tree=my_options_data_tree)
```

## Inputs

### source_mesh

Mesh where the source data is defined.

**Type:** *LinkableInput*

### target_mesh

Mesh the data should be mapped on.

**Type:** *LinkableInput*

### target_scoping

Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh.

**Type:** *LinkableInput*

### options_data_tree

DataTree that contains a 'mapping_options' subtree with the mapping options, and a 'data_definition' subtree with 'dimensionality' int and 'location' string attributes that are required by the 'prepare mechanical native mapping' operator (see documentation of this operator to know more about the supported options).

**Type:** *LinkableInput*

## Outputs

### mapping_workflow

Workflow with input pin 'source_data'; optionally 'source_mesh', 'target_mesh', 'target_scoping', and 'options_data_tree'; and output pins 'target_data','unmapped_nodes_data','outside_nodes_data','mapping_error_codes', 'source_mesh_id' and 'target_mesh_id.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
