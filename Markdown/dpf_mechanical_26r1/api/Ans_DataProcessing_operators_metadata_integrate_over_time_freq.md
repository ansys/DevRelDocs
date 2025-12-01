---
uid: Ans.DataProcessing.operators.metadata.integrate_over_time_freq
---

# integrate_over_time_freq Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Integration of an input field over timefreq.   ///available inputs: field (Field), scoping (Scoping) (optional), time_freq_support (TimeFreqSupport) (optional)
            available outputs: field (Field)

integrate_over_time_freq()
integrate_over_time_freq(field: object, scoping: object, time_freq_support: object, config: OperatorConfig)
integrate_over_time_freq(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
integrate_over_time_freq()
```

#### Constructor

```python
integrate_over_time_freq(field, scoping, time_freq_support, config)
```

**Parameters:**

- `field` (*object*)
- `scoping` (*object*)
- `time_freq_support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
integrate_over_time_freq(config)
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
