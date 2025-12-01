---
uid: Ans.DataProcessing.operators.utility.extract_time_freq
---

# extract_time_freq Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Extract timefreqs with sets scoping from a time freq support   ///available inputs: time_freq_support (TimeFreqSupport), time_scoping (Scoping) (optional), real_or_complex (bool) (optional)
            available outputs: field (Field ,FieldsContainer)

extract_time_freq()
extract_time_freq(time_freq_support: object, time_scoping: object, real_or_complex: object, config: OperatorConfig)
extract_time_freq(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
extract_time_freq()
```

#### Constructor

```python
extract_time_freq(time_freq_support, time_scoping, real_or_complex, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `time_scoping` (*object*)
- `real_or_complex` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_time_freq(config)
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
