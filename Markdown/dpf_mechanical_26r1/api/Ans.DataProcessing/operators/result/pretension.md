---
uid: Ans.DataProcessing.operators.result.pretension
---

# pretension Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Reads the pretension adjustment and tension force. Rotation is not allowed for these results.

available inputs: `time_scoping` (ScopingsContainer, Scoping) (optional), `mesh_scoping` (ScopingsContainer, Scoping) (optional), `fields_container` (FieldsContainer) (optional), `streams_container` (StreamsContainer, Stream), `data_sources` (DataSources), `mesh` (MeshedRegion, MeshesContainer) (optional), `read_cyclic` (Int32) (optional), `expanded_meshed_region` (MeshedRegion, MeshesContainer) (optional), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), `phi` (double) (optional)

available outputs: `adjustment` (FieldsContainer), `tension_force` (FieldsContainer)

## Example

```python
op = pretension()

op = pretension(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,fields_container=my_fields_container,streams_container=my_streams_container,data_sources=my_data_sources,expanded_meshed_region=my_expanded_meshed_region,sectors_to_expand=my_sectors_to_expand,phi=my_phi)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### fields_container

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### mesh

mesh. If cylic expansion is to be done, mesh of the base sector

**Type:** *LinkableInput*

### read_cyclic

if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1)

**Type:** *LinkableInput*

### expanded_meshed_region

mesh expanded, use if cyclic expansion is to be done.

**Type:** *LinkableInput*

### sectors_to_expand

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label, use if cyclic expansion is to be done.

**Type:** *LinkableInput*

### phi

angle phi in degrees (default value 0.0), use if cyclic expansion is to be done.

**Type:** *LinkableInput*

## Outputs

### adjustment

Adjustment

**Type:** *LinkableOutput*

### tension_force

Tension Force

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
pretension()
```

#### Constructor

```python
pretension(time_scoping, mesh_scoping, fields_container, streams_container, data_sources, expanded_meshed_region, sectors_to_expand, phi, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `fields_container` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `expanded_meshed_region` (*object*)
- `sectors_to_expand` (*object*)
- `phi` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
pretension(config)
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
