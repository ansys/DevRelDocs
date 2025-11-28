---
uid: Ans.DataProcessing.operators.averaging.gauss_to_node_fc
title: gauss_to_node_fc
---

# gauss_to_node_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Extrapolates results available at Gauss or quadrature points to nodal points for a field container. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral.    ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer) (optional), scoping (Scoping) (optional)
            available outputs: fields_container (FieldsContainer)

gauss_to_node_fc()
gauss_to_node_fc(fields_container: object, mesh: object, scoping: object, config: OperatorConfig)
gauss_to_node_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
gauss_to_node_fc()
```

#### Constructor

```python
gauss_to_node_fc(fields_container, mesh, scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
gauss_to_node_fc(config)
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
