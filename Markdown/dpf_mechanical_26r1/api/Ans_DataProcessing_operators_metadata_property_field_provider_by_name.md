---
uid: Ans.DataProcessing.operators.metadata.property_field_provider_by_name
title: property_field_provider_by_name
---

# property_field_provider_by_name Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Provides the property values for a set of elements for a defined property name.   ///available inputs: mesh_scoping (Scoping) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), property_name (string)
            available outputs: property_field (PropertyField)

property_field_provider_by_name()
property_field_provider_by_name(mesh_scoping: object, streams_container: object, data_sources: object, property_name: object, config: OperatorConfig)
property_field_provider_by_name(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
property_field_provider_by_name()
```

#### Constructor

```python
property_field_provider_by_name(mesh_scoping, streams_container, data_sources, property_name, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
property_field_provider_by_name(config)
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
