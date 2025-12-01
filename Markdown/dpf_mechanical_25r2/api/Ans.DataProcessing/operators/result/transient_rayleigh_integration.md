---
uid: Ans.DataProcessing.operators.result.transient_rayleigh_integration
---

# transient_rayleigh_integration Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Computes the transient Rayleigh integral   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), field (Field), observation_mesh (MeshedRegion), mass_density (double), speed_of_sound (double)
            available outputs: fields_container (FieldsContainer)

transient_rayleigh_integration()
transient_rayleigh_integration(fields_container: object, mesh: object, time_scoping: object, field: object, observation_mesh: object, mass_density: object, speed_of_sound: object, config: OperatorConfig)
transient_rayleigh_integration(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
transient_rayleigh_integration()
```

#### Constructor

```python
transient_rayleigh_integration(fields_container, mesh, time_scoping, field, observation_mesh, mass_density, speed_of_sound, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `time_scoping` (*object*)
- `field` (*object*)
- `observation_mesh` (*object*)
- `mass_density` (*object*)
- `speed_of_sound` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
transient_rayleigh_integration(config)
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
