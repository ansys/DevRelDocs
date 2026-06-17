---
uid: Ans.DataProcessing.operators.averaging.force_summation
---

# *class* force_summation(time_scoping: object = None, nodal_scoping: object = None, elemental_scoping: object = None, streams_container: object = None, data_sources: object = None, force_type: object = None, spoint: object = None, scoping_filter: object = None, sectors_to_expand: object = None, phi: object = None, config: OperatorConfig = None)

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom. The moment is computed in the unit system of the data source.

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `nodal_scoping` (Scoping, ScopingsContainer) (optional), `elemental_scoping` (Scoping, ScopingsContainer) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `force_type` (Int32) (optional), `spoint` (Field, FieldsContainer) (optional), `scoping_filter` (Int32) (optional), `read_cyclic` (Int32) (optional), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), `phi` (double) (optional)

available outputs: `force_accumulation` (FieldsContainer), `moment_accumulation` (FieldsContainer), `heat_accumulation` (FieldsContainer), `forces_on_nodes` (FieldsContainer), `moments_on_nodes` (FieldsContainer), `heats_on_nodes` (FieldsContainer)

**DPF Framework Reference:** [force_summation operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/force_summation.md)

**Parameters:**

* **time_scoping**
* **nodal_scoping**
* **elemental_scoping**
* **streams_container**
* **data_sources**
* **force_type**
* **spoint**
* **scoping_filter**
* **sectors_to_expand**
* **phi**
* **config**

**Example:**

```python
op = force_summation()

op = force_summation(time_scoping=my_time_scoping,nodal_scoping=my_nodal_scoping,elemental_scoping=my_elemental_scoping,streams_container=my_streams_container,data_sources=my_data_sources,force_type=my_force_type,spoint=my_spoint,scoping_filter=my_scoping_filter,sectors_to_expand=my_sectors_to_expand,phi=my_phi)
```

## Inputs

### time_scoping

default = all time steps

**Type:** *LinkableInput*

### nodal_scoping

Nodal Scoping or Scopings Container with a single label. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes)

**Type:** *LinkableInput*

### elemental_scoping

Elemental Scoping or Scopings Container with a single label. Set of elements contributing to the force calculation. (default = all elements)

**Type:** *LinkableInput*

### streams_container

Streams container. Optional if using data sources.

**Type:** *LinkableInput*

### data_sources

Data sources. Optional if using a streams container.

**Type:** *LinkableInput*

### force_type

Type of force to be processed (0: Total forces (static, damping, and inertia)., 1 (default): Static forces, 2: Damping forces, 3: Inertia forces)

**Type:** *LinkableInput*

### spoint

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters.

**Type:** *LinkableInput*

### scoping_filter

**Type:** *LinkableInput*

### read_cyclic

if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1)

**Type:** *LinkableInput*

### sectors_to_expand

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label, use if cyclic expansion is to be done.

**Type:** *LinkableInput*

### phi

angle phi in degrees (default value 0.0), use if cyclic expansion is to be done.

**Type:** *LinkableInput*

## Outputs

### force_accumulation

**Type:** *LinkableOutput*

### moment_accumulation

**Type:** *LinkableOutput*

### heat_accumulation

**Type:** *LinkableOutput*

### forces_on_nodes

**Type:** *LinkableOutput*

### moments_on_nodes

**Type:** *LinkableOutput*

### heats_on_nodes

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
