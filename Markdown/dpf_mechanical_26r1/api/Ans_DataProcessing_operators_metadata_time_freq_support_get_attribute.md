---
uid: Ans.DataProcessing.operators.metadata.time_freq_support_get_attribute
---

# time_freq_support_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.   ///available inputs: time_freq_support (TimeFreqSupport), property_name (string), property_identifier (Int32, Scoping) (optional), property_identifier_2 (Int32) (optional)
            available outputs: property (double ,Field ,Scoping)

time_freq_support_get_attribute()
time_freq_support_get_attribute(time_freq_support: object, property_name: object, property_identifier: object, property_identifier_2: object, config: OperatorConfig)
time_freq_support_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
time_freq_support_get_attribute()
```

#### Constructor

```python
time_freq_support_get_attribute(time_freq_support, property_name, property_identifier, property_identifier_2, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `property_identifier_2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_freq_support_get_attribute(config)
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
