---
uid: Ans.DataProcessing.operators.metadata.coordinate_system_data_provider
---

# coordinate_system_data_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads coordinate systems data from the result files contained in the streams or data sources.   ///available inputs: solver_coordinate_system_ids (Int32, IList int, System.Collections.IEnumerable) (optional), streams (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: coordinate_system_data1 (GenericDataContainer), coordinate_system_data2 (GenericDataContainer)

coordinate_system_data_provider()
coordinate_system_data_provider(solver_coordinate_system_ids: object, streams: object, data_sources: object, config: OperatorConfig)
coordinate_system_data_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
coordinate_system_data_provider()
```

#### Constructor

```python
coordinate_system_data_provider(solver_coordinate_system_ids, streams, data_sources, config)
```

**Parameters:**

- `solver_coordinate_system_ids` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
coordinate_system_data_provider(config)
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
