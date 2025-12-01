---
uid: Ans.DataProcessing.operators.result.erp_radiation_efficiency
---

# erp_radiation_efficiency Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Compute the radiation efficiency (enhanced erp divided by classical erp)   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), mass_density (double), speed_of_sound (double)
            available outputs: fields_container (FieldsContainer)

erp_radiation_efficiency()
erp_radiation_efficiency(fields_container: object, mesh: object, time_scoping: object, mass_density: object, speed_of_sound: object, config: OperatorConfig)
erp_radiation_efficiency(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
erp_radiation_efficiency()
```

#### Constructor

```python
erp_radiation_efficiency(fields_container, mesh, time_scoping, mass_density, speed_of_sound, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `time_scoping` (*object*)
- `mass_density` (*object*)
- `speed_of_sound` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
erp_radiation_efficiency(config)
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
