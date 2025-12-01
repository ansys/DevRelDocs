---
uid: Ans.DataProcessing.operators.mesh.mesh_provider
---

# mesh_provider Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Reads a mesh from result files.

available inputs: `time_scoping` (Int32) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `read_cyclic` (Int32) (optional), `region_scoping` (Scoping, Int32, IList int, System.Collections.IEnumerable) (optional), `laziness` (DataTree) (optional)

available outputs: `mesh` (MeshedRegion)

## Example

```python
op = mesh_provider()

op = mesh_provider(time_scoping=my_time_scoping,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

Optional time/frequency set ID of the mesh, supported for adaptative meshes.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### read_cyclic

If 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1).

**Type:** *LinkableInput*

### region_scoping

region id (integer) or vector of region ids with one entity (vector) or region scoping with one id (scoping) (region corresponds to zone for Fluid results or part for LSDyna results).

**Type:** *LinkableInput*

### laziness

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_provider()
```

#### Constructor

```python
mesh_provider(time_scoping, streams_container, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_provider(config)
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
