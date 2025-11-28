---
uid: Ans.DataProcessing.operators.result.equivalent_radiated_power
---

# equivalent_radiated_power Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Compute the Equivalent Radiated Power (ERP)   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer), time_scoping (Int32, IList int, Scoping, System.Collections.IEnumerable), mass_density (double), speed_of_sound (double), erp_type (Int32), boolean (bool), factor (double)
            available outputs: fields_container (FieldsContainer)

equivalent_radiated_power()
equivalent_radiated_power(fields_container: object, mesh: object, time_scoping: object, mass_density: object, speed_of_sound: object, erp_type: object, boolean: object, factor: object, config: OperatorConfig)
equivalent_radiated_power(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
equivalent_radiated_power()
```

#### Constructor

```python
equivalent_radiated_power(fields_container, mesh, time_scoping, mass_density, speed_of_sound, erp_type, boolean, factor, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `time_scoping` (*object*)
- `mass_density` (*object*)
- `speed_of_sound` (*object*)
- `erp_type` (*object*)
- `boolean` (*object*)
- `factor` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
equivalent_radiated_power(config)
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
