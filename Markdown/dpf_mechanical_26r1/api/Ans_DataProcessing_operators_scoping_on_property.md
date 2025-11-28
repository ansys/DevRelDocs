---
uid: Ans.DataProcessing.operators.scoping.on_property
title: on_property
---

# on_property Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Provides a scoping at a given location based on a given property name and a property number.   ///available inputs: requested_location (string), property_name (string), property_id (Int32), streams_container (StreamsContainer) (optional), data_sources (DataSources), inclusive (Int32) (optional)
            available outputs: mesh_scoping (Scoping)

on_property()
on_property(requested_location: object, property_name: object, property_id: object, streams_container: object, data_sources: object, inclusive: object, config: OperatorConfig)
on_property(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
on_property()
```

#### Constructor

```python
on_property(requested_location, property_name, property_id, streams_container, data_sources, inclusive, config)
```

**Parameters:**

- `requested_location` (*object*)
- `property_name` (*object*)
- `property_id` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `inclusive` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_property(config)
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
