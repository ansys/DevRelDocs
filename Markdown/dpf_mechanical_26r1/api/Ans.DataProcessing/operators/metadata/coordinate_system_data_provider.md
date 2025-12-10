---
uid: Ans.DataProcessing.operators.metadata.coordinate_system_data_provider
---

# coordinate_system_data_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Reads coordinate systems data from the result files contained in the streams or data sources.

available inputs: `solver_coordinate_system_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `coordinate_system_data1` (GenericDataContainer), `coordinate_system_data2` (GenericDataContainer)

## Example

```python
op = coordinate_system_data_provider()

op = coordinate_system_data_provider(solver_coordinate_system_ids=my_solver_coordinate_system_ids,streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### solver_coordinate_system_ids

Coorfinate System ids to recover used by the solver. If not set, all available materials to be recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### coordinate_system_data1

**Type:** *LinkableOutput*

### coordinate_system_data2

**Type:** *LinkableOutput*

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
