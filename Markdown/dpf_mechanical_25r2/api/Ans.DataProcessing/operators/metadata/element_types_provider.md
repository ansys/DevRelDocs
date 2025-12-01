---
uid: Ans.DataProcessing.operators.metadata.element_types_provider
---

# element_types_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads element types data from the result files contained in the streams or data sources.   ///available inputs: solver_element_types_ids (Int32, IList int, System.Collections.IEnumerable) (optional), streams (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: element_types_data (GenericDataContainer)

element_types_provider()
element_types_provider(solver_element_types_ids: object, streams: object, data_sources: object, config: OperatorConfig)
element_types_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
element_types_provider()
```

#### Constructor

```python
element_types_provider(solver_element_types_ids, streams, data_sources, config)
```

**Parameters:**

- `solver_element_types_ids` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
element_types_provider(config)
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
