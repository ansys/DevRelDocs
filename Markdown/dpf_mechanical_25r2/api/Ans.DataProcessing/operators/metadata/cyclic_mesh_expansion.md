---
uid: Ans.DataProcessing.operators.metadata.cyclic_mesh_expansion
---

# cyclic_mesh_expansion Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Expand the mesh.   ///available inputs: sector_meshed_region (MeshedRegion, MeshesContainer) (optional), cyclic_support (CyclicSupport), sectors_to_expand (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional)
            available outputs: meshed_region (MeshedRegion), cyclic_support (CyclicSupport)

cyclic_mesh_expansion()
cyclic_mesh_expansion(sector_meshed_region: object, cyclic_support: object, sectors_to_expand: object, config: OperatorConfig)
cyclic_mesh_expansion(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cyclic_mesh_expansion()
```

#### Constructor

```python
cyclic_mesh_expansion(sector_meshed_region, cyclic_support, sectors_to_expand, config)
```

**Parameters:**

- `sector_meshed_region` (*object*)
- `cyclic_support` (*object*)
- `sectors_to_expand` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cyclic_mesh_expansion(config)
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
