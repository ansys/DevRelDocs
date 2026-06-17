---
uid: Ans.DataProcessing.operators.mapping.apply_mechanical_native_mapping
---

# *class* apply_mechanical_native_mapping(source_mesh: object = None, source_mesh_id: object = None, target_mesh: object = None, target_mesh_id: object = None, mapping_manager_data: object = None, source_data: object = None, target_scoping: object = None, unnamed: object = None, threads_user_requested: object = None, config: OperatorConfig = None)

Applies pre-computed mapping weights to interpolate field data from a source mesh to a target mesh.

This is the second stage of the two-stage native mapping workflow; use `prepare_mechanical_native_mapping` (or a dedicated prepare operator) to compute the weights first.

For each target point $j$, the interpolated value is:

$$

u_{\text{target}}^{(j)} = \sum_{i \in S(j)} w_{ij} \cdot u_{\text{source}}^{(i)}

$$

where $S(j)$ is the set of source points influencing target point $j$, and $w_{ij}$ are algorithm-specific weights: shape function values (shape function algorithms), barycentric coordinates or inverse-distance values (point cloud algorithms), or optimal linear predictors (kriging).

For further details on the algorithms and their settings, see the Ansys Mechanical help page on

[Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

available inputs: `source_mesh` (MeshedRegion, Field), `source_mesh_id` (Int32), `target_mesh` (MeshedRegion, Field), `target_mesh_id` (Int32), `mapping_manager_data` (Any), `source_data` (FieldsContainer), `target_scoping` (Scoping) (optional), `unnamed` (Any) (optional), `threads_user_requested` (Int32) (optional)

available outputs: `mapped_data` (FieldsContainer), `apply_output` (Any)

**DPF Framework Reference:** [apply_mechanical_native_mapping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/apply_mechanical_native_mapping.md)

**Parameters:**

* **source_mesh**
* **source_mesh_id**
* **target_mesh**
* **target_mesh_id**
* **mapping_manager_data**
* **source_data**
* **target_scoping**
* **unnamed**
* **threads_user_requested**
* **config**

**Example:**

```python
op = apply_mechanical_native_mapping()

op = apply_mechanical_native_mapping(source_mesh=my_source_mesh,source_mesh_id=my_source_mesh_id,target_mesh=my_target_mesh,target_mesh_id=my_target_mesh_id,mapping_manager_data=my_mapping_manager_data,source_data=my_source_data,target_scoping=my_target_scoping,unnamed=my_unnamed,threads_user_requested=my_threads_user_requested)
```

## Inputs

### source_mesh

**Type:** *LinkableInput*

### source_mesh_id

**Type:** *LinkableInput*

### target_mesh

**Type:** *LinkableInput*

### target_mesh_id

**Type:** *LinkableInput*

### mapping_manager_data

**Type:** *LinkableInput*

### source_data

**Type:** *LinkableInput*

### target_scoping

**Type:** *LinkableInput*

### unnamed

**Type:** *LinkableInput*

### threads_user_requested

**Type:** *LinkableInput*

## Outputs

### mapped_data

**Type:** *LinkableOutput*

### apply_output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
