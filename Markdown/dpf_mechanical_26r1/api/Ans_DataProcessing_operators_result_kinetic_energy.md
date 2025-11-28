---
uid: Ans.DataProcessing.operators.result.kinetic_energy
title: kinetic_energy
---

# kinetic_energy Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

kinetic_energy()
kinetic_energy(time_scoping: object, mesh_scoping: object, data_sources: object, expanded_meshed_region: object, sectors_to_expand: object, phi: object, config: OperatorConfig)
kinetic_energy(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
kinetic_energy()
```

#### Constructor

```python
kinetic_energy(time_scoping, mesh_scoping, data_sources, expanded_meshed_region, sectors_to_expand, phi, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `data_sources` (*object*)
- `expanded_meshed_region` (*object*)
- `sectors_to_expand` (*object*)
- `phi` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
kinetic_energy(config)
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
