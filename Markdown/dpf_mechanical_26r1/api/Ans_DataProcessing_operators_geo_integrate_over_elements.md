---
uid: Ans.DataProcessing.operators.geo.integrate_over_elements
title: integrate_over_elements
---

# integrate_over_elements Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Integration of an input field over mesh.   ///available inputs: field (Field), scoping (Scoping) (optional), mesh (MeshedRegion) (optional)
            available outputs: field (Field)

integrate_over_elements()
integrate_over_elements(field: object, scoping: object, mesh: object, config: OperatorConfig)
integrate_over_elements(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
integrate_over_elements()
```

#### Constructor

```python
integrate_over_elements(field, scoping, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
integrate_over_elements(config)
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
