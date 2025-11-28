---
uid: Ans.DataProcessing.operators.result.interface_contact_mass
title: interface_contact_mass
---

# interface_contact_mass Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read Interface Contact Mass (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), entity_scoping (Scoping) (optional), unit_system (Int32, string) (optional)
            available outputs: fields_container (FieldsContainer)

interface_contact_mass()
interface_contact_mass(data_sources: object, entity_scoping: object, unit_system: object, config: OperatorConfig)
interface_contact_mass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
interface_contact_mass()
```

#### Constructor

```python
interface_contact_mass(data_sources, entity_scoping, unit_system, config)
```

**Parameters:**

- `data_sources` (*object*)
- `entity_scoping` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
interface_contact_mass(config)
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
