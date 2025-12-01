---
uid: Ans.DataProcessing.operators.mapping.find_reduced_coordinates
---

# find_reduced_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.   ///available inputs: coordinates (Field, FieldsContainer, MeshedRegion, MeshesContainer), mesh (MeshedRegion, MeshesContainer) (optional), use_quadratic_elements (bool) (optional)
            available outputs: reduced_coordinates (FieldsContainer), element_ids (ScopingsContainer)

find_reduced_coordinates()
find_reduced_coordinates(coordinates: object, mesh: object, use_quadratic_elements: object, config: OperatorConfig)
find_reduced_coordinates(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
find_reduced_coordinates()
```

#### Constructor

```python
find_reduced_coordinates(coordinates, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `coordinates` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
find_reduced_coordinates(config)
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
