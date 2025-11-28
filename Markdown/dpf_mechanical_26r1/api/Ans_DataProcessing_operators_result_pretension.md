---
uid: Ans.DataProcessing.operators.result.pretension
title: pretension
---

# pretension Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Reads the pretension adjustment and tension force. Rotation is not allowed for these results.   ///available inputs: time_scoping (ScopingsContainer, Scoping) (optional), mesh_scoping (ScopingsContainer, Scoping) (optional), fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), read_cyclic (Int32) (optional), expanded_meshed_region (MeshedRegion, MeshesContainer) (optional), sectors_to_expand (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), phi (double) (optional)
            available outputs: adjustment (FieldsContainer), tension_force (FieldsContainer)

pretension()
pretension(time_scoping: object, mesh_scoping: object, fields_container: object, streams_container: object, data_sources: object, expanded_meshed_region: object, sectors_to_expand: object, phi: object, config: OperatorConfig)
pretension(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
