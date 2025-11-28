---
uid: Ans.DataProcessing.operators.mapping.on_coordinates
title: on_coordinates
---

# on_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Evaluates a result on specified coordinates (interpolates results inside elements with shape functions).   ///available inputs: fields_container (FieldsContainer), coordinates (Field, FieldsContainer, MeshedRegion, MeshesContainer), create_support (bool) (optional), mapping_on_scoping (bool) (optional), tolerance (double) (optional), mesh (MeshedRegion, MeshesContainer) (optional), use_quadratic_elements (bool) (optional)
            available outputs: fields_container (FieldsContainer)

on_coordinates()
on_coordinates(fields_container: object, coordinates: object, create_support: object, mapping_on_scoping: object, tolerance: object, mesh: object, use_quadratic_elements: object, config: OperatorConfig)
on_coordinates(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
on_coordinates()
```

#### Constructor

```python
on_coordinates(fields_container, coordinates, create_support, mapping_on_scoping, tolerance, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `fields_container` (*object*)
- `coordinates` (*object*)
- `create_support` (*object*)
- `mapping_on_scoping` (*object*)
- `tolerance` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_coordinates(config)
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
