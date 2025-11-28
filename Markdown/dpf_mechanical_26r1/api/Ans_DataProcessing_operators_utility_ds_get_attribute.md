---
uid: Ans.DataProcessing.operators.utility.ds_get_attribute
title: ds_get_attribute
---

# ds_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

A DataSources in pin 0 and a property name (string) in pin 1 are expected in input. An index refering to the property can also be provided.   ///available inputs: data_sources (DataSources), property_name (string), property_index (Int32) (optional), property_key (string) (optional), property_result_key (string) (optional)
            available outputs: property (string ,Int32)

ds_get_attribute()
ds_get_attribute(data_sources: object, property_name: object, property_index: object, property_key: object, property_result_key: object, config: OperatorConfig)
ds_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
ds_get_attribute()
```

#### Constructor

```python
ds_get_attribute(data_sources, property_name, property_index, property_key, property_result_key, config)
```

**Parameters:**

- `data_sources` (*object*)
- `property_name` (*object*)
- `property_index` (*object*)
- `property_key` (*object*)
- `property_result_key` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ds_get_attribute(config)
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
