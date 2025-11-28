---
uid: Ans.DataProcessing.operators.geo.gauss_to_node
---

# gauss_to_node Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral    ///available inputs: field (Field), scoping (Scoping) (optional), mesh (MeshedRegion) (optional)
            available outputs: field (Field)

gauss_to_node()
gauss_to_node(field: object, scoping: object, mesh: object, config: OperatorConfig)
gauss_to_node(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
gauss_to_node()
```

#### Constructor

```python
gauss_to_node(field, scoping, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
gauss_to_node(config)
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
