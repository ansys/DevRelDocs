---
uid: Ans.DataProcessing.operators.result.contact_surface_heat_flux
title: contact_surface_heat_flux
---

# contact_surface_heat_flux Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

contact_surface_heat_flux()
contact_surface_heat_flux(time_scoping: object, mesh_scoping: object, data_sources: object, requested_location: object, expanded_meshed_region: object, sectors_to_expand: object, phi: object, config: OperatorConfig)
contact_surface_heat_flux(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
contact_surface_heat_flux()
```

#### Constructor

```python
contact_surface_heat_flux(time_scoping, mesh_scoping, data_sources, requested_location, expanded_meshed_region, sectors_to_expand, phi, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `data_sources` (*object*)
- `requested_location` (*object*)
- `expanded_meshed_region` (*object*)
- `sectors_to_expand` (*object*)
- `phi` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
contact_surface_heat_flux(config)
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
