---
uid: Ans.DataProcessing.operators.result.global_internal_energy
title: global_internal_energy
---

# global_internal_energy Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read Global Internal Energy (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional)
            available outputs: fields_container (FieldsContainer)

global_internal_energy()
global_internal_energy(data_sources: object, unit_system: object, config: OperatorConfig)
global_internal_energy(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
global_internal_energy()
```

#### Constructor

```python
global_internal_energy(data_sources, unit_system, config)
```

**Parameters:**

- `data_sources` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
global_internal_energy(config)
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
