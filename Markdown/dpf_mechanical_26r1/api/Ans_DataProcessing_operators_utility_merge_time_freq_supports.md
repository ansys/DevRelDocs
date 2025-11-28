---
uid: Ans.DataProcessing.operators.utility.merge_time_freq_supports
title: merge_time_freq_supports
---

# merge_time_freq_supports Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of time/frequency supports into a unique one.   ///available inputs: time_freq_supports1 (TimeFreqSupport), time_freq_supports2 (TimeFreqSupport)
            available outputs: merged_support (TimeFreqSupport)

merge_time_freq_supports()
merge_time_freq_supports(time_freq_supports1: object, time_freq_supports2: object, config: OperatorConfig)
merge_time_freq_supports(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_time_freq_supports()
```

#### Constructor

```python
merge_time_freq_supports(time_freq_supports1, time_freq_supports2, config)
```

**Parameters:**

- `time_freq_supports1` (*object*)
- `time_freq_supports2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_time_freq_supports(config)
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
