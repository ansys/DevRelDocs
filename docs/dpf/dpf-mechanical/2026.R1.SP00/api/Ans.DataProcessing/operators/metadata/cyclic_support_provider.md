---
uid: Ans.DataProcessing.operators.metadata.cyclic_support_provider
---

# cyclic_support_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `sector_meshed_region` (MeshedRegion, MeshesContainer) (optional), `expanded_meshed_region` (MeshedRegion, MeshesContainer) (optional), `sectors_to_expand` (Scoping, ScopingsContainer, IList int, System.Collections.IEnumerable) (optional)

available outputs: `cyclic_support` (CyclicSupport), `sector_meshes` (MeshesContainer)

## Example

```python
op = cyclic_support_provider()

op = cyclic_support_provider(streams_container=my_streams_container,data_sources=my_data_sources,sector_meshed_region=my_sector_meshed_region,expanded_meshed_region=my_expanded_meshed_region,sectors_to_expand=my_sectors_to_expand)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams_container

Streams containing the result file.

**Type:** *LinkableInput*

### data_sources

data sources containing the result file.

**Type:** *LinkableInput*

### sector_meshed_region

mesh of the first sector.

**Type:** *LinkableInput*

### expanded_meshed_region

if this pin is set, expanding the mesh is not necessary.

**Type:** *LinkableInput*

### sectors_to_expand

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.

**Type:** *LinkableInput*

## Outputs

### cyclic_support

**Type:** *LinkableOutput*

### sector_meshes

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
cyclic_support_provider()
```

#### Constructor

```python
cyclic_support_provider(streams_container, data_sources, sector_meshed_region, expanded_meshed_region, sectors_to_expand, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `sector_meshed_region` (*object*)
- `expanded_meshed_region` (*object*)
- `sectors_to_expand` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cyclic_support_provider(config)
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
