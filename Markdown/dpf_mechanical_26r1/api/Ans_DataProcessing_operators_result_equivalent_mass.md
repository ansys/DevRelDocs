---
uid: Ans.DataProcessing.operators.result.equivalent_mass
title: equivalent_mass
---

# equivalent_mass Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

equivalent_mass()
equivalent_mass(time_scoping: object, mesh_scoping: object, data_sources: object, all_dofs: object, expanded_meshed_region: object, sectors_to_expand: object, phi: object, config: OperatorConfig)
equivalent_mass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
equivalent_mass()
```

#### Constructor

```python
equivalent_mass(time_scoping, mesh_scoping, data_sources, all_dofs, expanded_meshed_region, sectors_to_expand, phi, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `data_sources` (*object*)
- `all_dofs` (*object*)
- `expanded_meshed_region` (*object*)
- `sectors_to_expand` (*object*)
- `phi` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
equivalent_mass(config)
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
