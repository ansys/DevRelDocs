---
uid: Ans.DataProcessing.operators.logic.split_data_sources
---

# split_data_sources Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.   ///available inputs: data_sources (DataSources), output_count (Int32)
            available outputs: output_count (Int32), outputs1 (DataSources), outputs2 (DataSources)

split_data_sources()
split_data_sources(data_sources: object, output_count: object, config: OperatorConfig)
split_data_sources(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
split_data_sources()
```

#### Constructor

```python
split_data_sources(data_sources, output_count, config)
```

**Parameters:**

- `data_sources` (*object*)
- `output_count` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_data_sources(config)
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
