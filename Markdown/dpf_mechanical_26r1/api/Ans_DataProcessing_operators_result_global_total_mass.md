---
uid: Ans.DataProcessing.operators.result.global_total_mass
title: global_total_mass
---

# global_total_mass Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read Global Total Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional)
            available outputs: fields_container (FieldsContainer)

global_total_mass()
global_total_mass(data_sources: object, unit_system: object, config: OperatorConfig)
global_total_mass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
global_total_mass()
```

#### Constructor

```python
global_total_mass(data_sources, unit_system, config)
```

**Parameters:**

- `data_sources` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
global_total_mass(config)
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
