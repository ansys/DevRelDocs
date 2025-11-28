---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_fc
title: elemental_nodal_to_nodal_fc
---

# elemental_nodal_to_nodal_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Elemental Nodal fields into Nodal fields using an averaging process. The result is computed on a given node's scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label depending on the merge_solid_shell input.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer) (optional), should_average (bool) (optional), scoping (Scoping, ScopingsContainer) (optional), extend_to_mid_nodes (bool) (optional), extend_weights_to_mid_nodes (bool) (optional), merge_solid_shell (bool) (optional), shell_layer (Int32) (optional)
            available outputs: fields_container (FieldsContainer), weights ()

elemental_nodal_to_nodal_fc()
elemental_nodal_to_nodal_fc(fields_container: object, mesh: object, should_average: object, scoping: object, extend_to_mid_nodes: object, extend_weights_to_mid_nodes: object, merge_solid_shell: object, shell_layer: object, config: OperatorConfig)
elemental_nodal_to_nodal_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_nodal_to_nodal_fc()
```

#### Constructor

```python
elemental_nodal_to_nodal_fc(fields_container, mesh, should_average, scoping, extend_to_mid_nodes, extend_weights_to_mid_nodes, merge_solid_shell, shell_layer, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `should_average` (*object*)
- `scoping` (*object*)
- `extend_to_mid_nodes` (*object*)
- `extend_weights_to_mid_nodes` (*object*)
- `merge_solid_shell` (*object*)
- `shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_nodal_to_nodal_fc(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
