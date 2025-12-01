---
uid: Ans.DataProcessing.operators.metadata.real_constants_provider
---

# real_constants_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Reads real constants from the result files contained in the streams or data sources.

available inputs: `solver_real_constants_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `real_constants1` (Field), `real_constants2` (Field)

## Example

```python
op = real_constants_provider()

op = real_constants_provider(solver_real_constants_ids=my_solver_real_constants_ids,streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### solver_real_constants_ids

Real Constant ids to recover used by the solver. If not set, all available real constants to be recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### real_constants1

**Type:** *LinkableOutput*

### real_constants2

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
real_constants_provider()
```

#### Constructor

```python
real_constants_provider(solver_real_constants_ids, streams, data_sources, config)
```

**Parameters:**

- `solver_real_constants_ids` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
real_constants_provider(config)
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
