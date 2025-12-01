---
uid: Ans.DataProcessing.operators.mapping.on_reduced_coordinates
---

# on_reduced_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).   ///available inputs: fields_container (FieldsContainer), reduced_coordinates (Field, FieldsContainer), element_ids (ScopingsContainer), mesh (MeshedRegion, MeshesContainer) (optional), use_quadratic_elements (bool) (optional)
            available outputs: fields_container (FieldsContainer)

on_reduced_coordinates()
on_reduced_coordinates(fields_container: object, reduced_coordinates: object, element_ids: object, mesh: object, use_quadratic_elements: object, config: OperatorConfig)
on_reduced_coordinates(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
on_reduced_coordinates()
```

#### Constructor

```python
on_reduced_coordinates(fields_container, reduced_coordinates, element_ids, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `fields_container` (*object*)
- `reduced_coordinates` (*object*)
- `element_ids` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_reduced_coordinates(config)
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
