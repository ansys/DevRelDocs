---
uid: Ans.DataProcessing.operators.result.euler_nodes
---

# euler_nodes Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.

available inputs: `streams_container` (StreamsContainer, Stream) (optional), `data_sources` (DataSources), `filter_zeros` (bool), `coord_and_euler` (bool), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = euler_nodes()

op = euler_nodes(streams_container=my_streams_container,data_sources=my_data_sources,filter_zeros=my_filter_zeros,coord_and_euler=my_coord_and_euler,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### filter_zeros

if true, then the field will only contain the scoping if any rotation is not zero. (default is false).

**Type:** *LinkableInput*

### coord_and_euler

if true, then the field has ncomp=6 with 3 coordinates and 3 Euler angles, else there is only the Euler angles (default is true).

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
euler_nodes()
```

#### Constructor

```python
euler_nodes(streams_container, data_sources, filter_zeros, coord_and_euler, mesh, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `filter_zeros` (*object*)
- `coord_and_euler` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
euler_nodes(config)
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
