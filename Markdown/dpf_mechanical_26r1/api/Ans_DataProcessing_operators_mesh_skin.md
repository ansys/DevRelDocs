---
uid: Ans.DataProcessing.operators.mesh.skin
title: skin
---

# skin Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping) (optional), duplicate_shell (bool) (optional), add_beam_point (bool) (optional)
            available outputs: mesh (MeshedRegion), nodes_mesh_scoping (Scoping), map_new_elements_to_old (), property_field_new_elements_to_old (PropertyField), facet_indices (PropertyField)

skin()
skin(mesh: object, mesh_scoping: object, duplicate_shell: object, add_beam_point: object, config: OperatorConfig)
skin(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
skin()
```

#### Constructor

```python
skin(mesh, mesh_scoping, duplicate_shell, add_beam_point, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `duplicate_shell` (*object*)
- `add_beam_point` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
skin(config)
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
