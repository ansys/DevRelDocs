---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_component
title: workflow_energy_per_component
---

# workflow_energy_per_component Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), energy_type (Int32) (optional), streams_container (StreamsContainer), data_sources (DataSources), named_selection1 (string) (optional), named_selection2 (string) (optional)
            available outputs: component_energy (FieldsContainer), component_energy_percentage (FieldsContainer), component_total_energy (FieldsContainer), component_total_energy_percentage (FieldsContainer), component_strain_energy (FieldsContainer), component_strain_energy_percentage (FieldsContainer), component_kinetic_energy (FieldsContainer), component_kinetic_energy_percentage (FieldsContainer)

workflow_energy_per_component()
workflow_energy_per_component(time_scoping: object, mesh_scoping: object, energy_type: object, streams_container: object, data_sources: object, named_selection1: object, named_selection2: object, config: OperatorConfig)
workflow_energy_per_component(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
workflow_energy_per_component()
```

#### Constructor

```python
workflow_energy_per_component(time_scoping, mesh_scoping, energy_type, streams_container, data_sources, named_selection1, named_selection2, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `energy_type` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `named_selection1` (*object*)
- `named_selection2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_energy_per_component(config)
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
