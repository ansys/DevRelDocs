---
uid: Ans.DataProcessing.operators.metadata.cyclic_support_provider
---

# cyclic_support_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), sector_meshed_region (MeshedRegion, MeshesContainer) (optional), expanded_meshed_region (MeshedRegion, MeshesContainer) (optional), sectors_to_expand (Scoping, ScopingsContainer, IList int, System.Collections.IEnumerable) (optional)
            available outputs: cyclic_support (CyclicSupport), sector_meshes (MeshesContainer)

cyclic_support_provider()
cyclic_support_provider(streams_container: object, data_sources: object, sector_meshed_region: object, expanded_meshed_region: object, sectors_to_expand: object, config: OperatorConfig)
cyclic_support_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
