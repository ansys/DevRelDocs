---
uid: Ans.DataProcessing.operators.scoping.on_named_selection
---

# on_named_selection Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

provides a scoping at a given location based on a given named selection   ///available inputs: requested_location (string), named_selection_name (string), int_inclusive (Int32) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: mesh_scoping (Scoping)

on_named_selection()
on_named_selection(requested_location: object, named_selection_name: object, int_inclusive: object, streams_container: object, data_sources: object, config: OperatorConfig)
on_named_selection(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
on_named_selection()
```

#### Constructor

```python
on_named_selection(requested_location, named_selection_name, int_inclusive, streams_container, data_sources, config)
```

**Parameters:**

- `requested_location` (*object*)
- `named_selection_name` (*object*)
- `int_inclusive` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_named_selection(config)
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
