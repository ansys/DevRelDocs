---
uid: Ans.DataProcessing.operators.scoping.on_named_selection
---

# on_named_selection Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

provides a scoping at a given location based on a given named selection

available inputs: `requested_location` (string), `named_selection_name` (string), `int_inclusive` (Int32) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_scoping` (Scoping)

## Example

```python
op = on_named_selection()

op = on_named_selection(requested_location=my_requested_location,named_selection_name=my_named_selection_name,int_inclusive=my_int_inclusive,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### requested_location

**Type:** *LinkableInput*

### named_selection_name

the string is expected to be in upper case

**Type:** *LinkableInput*

### int_inclusive

If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

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
