---
uid: Ans.DataProcessing.operators.metadata.cyclic_mesh_expansion
---

# cyclic_mesh_expansion Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Expand the mesh.

available inputs: `sector_meshed_region` (MeshedRegion, MeshesContainer) (optional), `cyclic_support` (CyclicSupport), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional)

available outputs: `meshed_region` (MeshedRegion), `cyclic_support` (CyclicSupport)

## Example

```python
op = cyclic_mesh_expansion()

op = cyclic_mesh_expansion(sector_meshed_region=my_sector_meshed_region,cyclic_support=my_cyclic_support,sectors_to_expand=my_sectors_to_expand)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### sector_meshed_region

**Type:** *LinkableInput*

### cyclic_support

**Type:** *LinkableInput*

### sectors_to_expand

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.

**Type:** *LinkableInput*

## Outputs

### meshed_region

expanded meshed region.

**Type:** *LinkableOutput*

### cyclic_support

input cyclic support modified in place containing the new expanded meshed regions.

**Type:** *LinkableOutput*

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
