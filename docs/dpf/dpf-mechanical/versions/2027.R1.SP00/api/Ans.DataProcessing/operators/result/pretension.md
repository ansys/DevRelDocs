---
uid: Ans.DataProcessing.operators.result.pretension
---

# *class* pretension(time_scoping: object = None, mesh_scoping: object = None, fields_container: object = None, streams_container: object = None, data_sources: object = None, expanded_meshed_region: object = None, sectors_to_expand: object = None, phi: object = None, config: OperatorConfig = None)

Reads the pretension adjustment and tension force. Rotation is not allowed for these results.

available inputs: `time_scoping` (ScopingsContainer, Scoping) (optional), `mesh_scoping` (ScopingsContainer, Scoping) (optional), `fields_container` (FieldsContainer) (optional), `streams_container` (StreamsContainer, Stream), `data_sources` (DataSources), `mesh` (MeshedRegion, MeshesContainer) (optional), `read_cyclic` (Int32) (optional), `expanded_meshed_region` (MeshedRegion, MeshesContainer) (optional), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), `phi` (double) (optional)

available outputs: `adjustment` (FieldsContainer), `tension_force` (FieldsContainer)

**DPF Framework Reference:** [pretension operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/pretension.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **fields_container**
* **streams_container**
* **data_sources**
* **expanded_meshed_region**
* **sectors_to_expand**
* **phi**
* **config**

**Example:**

```python
op = pretension()

op = pretension(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,fields_container=my_fields_container,streams_container=my_streams_container,data_sources=my_data_sources,expanded_meshed_region=my_expanded_meshed_region,sectors_to_expand=my_sectors_to_expand,phi=my_phi)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
