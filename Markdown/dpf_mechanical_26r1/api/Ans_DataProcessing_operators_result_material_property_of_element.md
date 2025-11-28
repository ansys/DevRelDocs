---
uid: Ans.DataProcessing.operators.result.material_property_of_element
title: material_property_of_element
---

# material_property_of_element Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Loads the appropriate operator based on the data sources and retrieves material properties.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: material_properties (Field)

material_property_of_element()
material_property_of_element(streams_container: object, data_sources: object, config: OperatorConfig)
material_property_of_element(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
material_property_of_element()
```

#### Constructor

```python
material_property_of_element(streams_container, data_sources, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
material_property_of_element(config)
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
