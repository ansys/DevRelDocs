---
uid: Ans.DataProcessing.operators.math.hdf5.topo.elemental_density
---

# elemental_density Class

**Namespace:** [Ans.DataProcessing.operators.math.hdf5.topo](Ans_DataProcessing_operators_math_hdf5_topo.md)

## Summary

Extract Elemental Topology Density result from topo solver output. Default behavior is to use graphical density.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `custom_ponderation_name` (string)

available outputs: `field` (Field)

## Example

```python
op = elemental_density()

op = elemental_density(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,streams=my_streams,data_sources=my_data_sources,custom_ponderation_name=my_custom_ponderation_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math.hdf5.topo` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### streams

topo file stream.

**Type:** *LinkableInput*

### data_sources

topo file data source.

**Type:** *LinkableInput*

### custom_ponderation_name

take custom ponderation_field from the topo file by name

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_density()
```

#### Constructor

```python
elemental_density(time_scoping, mesh_scoping, streams, data_sources, custom_ponderation_name, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `custom_ponderation_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_density(config)
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
