---
uid: Ans.DataProcessing.operators.metadata.time_freq_provider
---

# time_freq_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads the time/frequency support from the results files contained in the streams or data sources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: time_freq_support (TimeFreqSupport)

time_freq_provider()
time_freq_provider(streams_container: object, data_sources: object, config: OperatorConfig)
time_freq_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
time_freq_provider()
```

#### Constructor

```python
time_freq_provider(streams_container, data_sources, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_freq_provider(config)
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
