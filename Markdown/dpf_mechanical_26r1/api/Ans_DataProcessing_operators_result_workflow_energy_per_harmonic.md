---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_harmonic
title: workflow_energy_per_harmonic
---

# workflow_energy_per_harmonic Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping) (optional), energy_type (Int32) (optional), stream (Stream), data_sources (DataSources)
            available outputs: harmonic_energy (FieldsContainer), harmonic_energy_percentage (FieldsContainer)

workflow_energy_per_harmonic()
workflow_energy_per_harmonic(time_scoping: object, mesh_scoping: object, energy_type: object, stream: object, data_sources: object, config: OperatorConfig)
workflow_energy_per_harmonic(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
workflow_energy_per_harmonic()
```

#### Constructor

```python
workflow_energy_per_harmonic(time_scoping, mesh_scoping, energy_type, stream, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `energy_type` (*object*)
- `stream` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_energy_per_harmonic(config)
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
