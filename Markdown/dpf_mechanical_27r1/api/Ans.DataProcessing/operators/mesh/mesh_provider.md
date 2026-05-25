---
uid: Ans.DataProcessing.operators.mesh.mesh_provider
---

# *class* mesh_provider(time_scoping: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads a mesh from result files.

The operator attempts to read mesh data from the provided data sources.

When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces.

If `permissive` is disabled (default), errors are thrown for invalid files.

available inputs: `time_scoping` (Int32) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `read_cyclic` (Int32) (optional), `region_scoping` (Scoping, Int32, IList int, System.Collections.IEnumerable) (optional), `laziness` (DataTree) (optional)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [mesh_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_provider.md)

**Parameters:**

* **time_scoping**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = mesh_provider()

op = mesh_provider(time_scoping=my_time_scoping,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### time_scoping

Optional time/frequency set ID of the mesh, supported for adaptative meshes.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
