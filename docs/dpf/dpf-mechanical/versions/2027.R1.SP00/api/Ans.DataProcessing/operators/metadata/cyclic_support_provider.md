---
uid: Ans.DataProcessing.operators.metadata.cyclic_support_provider
---

# *class* cyclic_support_provider(streams_container: object = None, data_sources: object = None, sector_meshed_region: object = None, expanded_meshed_region: object = None, sectors_to_expand: object = None, config: OperatorConfig = None)

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `sector_meshed_region` (MeshedRegion, MeshesContainer) (optional), `expanded_meshed_region` (MeshedRegion, MeshesContainer) (optional), `sectors_to_expand` (Scoping, ScopingsContainer, IList int, System.Collections.IEnumerable) (optional)

available outputs: `cyclic_support` (CyclicSupport), `sector_meshes` (MeshesContainer)

**DPF Framework Reference:** [cyclic_support_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/cyclic_support_provider.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **sector_meshed_region**
* **expanded_meshed_region**
* **sectors_to_expand**
* **config**

**Example:**

```python
op = cyclic_support_provider()

op = cyclic_support_provider(streams_container=my_streams_container,data_sources=my_data_sources,sector_meshed_region=my_sector_meshed_region,expanded_meshed_region=my_expanded_meshed_region,sectors_to_expand=my_sectors_to_expand)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
