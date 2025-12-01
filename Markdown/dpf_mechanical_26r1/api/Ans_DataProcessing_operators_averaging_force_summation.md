---
uid: Ans.DataProcessing.operators.averaging.force_summation
---

# force_summation Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

force_summation()
force_summation(time_scoping: object, nodal_scoping: object, elemental_scoping: object, streams_container: object, data_sources: object, force_type: object, spoint: object, scoping_filter: object, config: OperatorConfig)
force_summation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
force_summation()
```

#### Constructor

```python
force_summation(time_scoping, nodal_scoping, elemental_scoping, streams_container, data_sources, force_type, spoint, scoping_filter, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `nodal_scoping` (*object*)
- `elemental_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `force_type` (*object*)
- `spoint` (*object*)
- `scoping_filter` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
force_summation(config)
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
