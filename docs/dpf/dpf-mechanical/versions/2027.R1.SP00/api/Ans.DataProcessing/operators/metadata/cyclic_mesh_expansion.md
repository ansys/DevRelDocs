---
uid: Ans.DataProcessing.operators.metadata.cyclic_mesh_expansion
---

# *class* cyclic_mesh_expansion(sector_meshed_region: object = None, cyclic_support: object = None, sectors_to_expand: object = None, config: OperatorConfig = None)

Expand the mesh.

available inputs: `sector_meshed_region` (MeshedRegion, MeshesContainer) (optional), `cyclic_support` (CyclicSupport), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional)

available outputs: `meshed_region` (MeshedRegion), `cyclic_support` (CyclicSupport)

**DPF Framework Reference:** [cyclic_mesh_expansion operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/cyclic_mesh_expansion.md)

**Parameters:**

* **sector_meshed_region**
* **cyclic_support**
* **sectors_to_expand**
* **config**

**Example:**

```python
op = cyclic_mesh_expansion()

op = cyclic_mesh_expansion(sector_meshed_region=my_sector_meshed_region,cyclic_support=my_cyclic_support,sectors_to_expand=my_sectors_to_expand)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
