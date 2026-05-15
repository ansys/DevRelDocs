---
uid: Ans.DataProcessing.operators.averaging.force_summation
---

# *class* force_summation(time_scoping: object = None, nodal_scoping: object = None, elemental_scoping: object = None, streams_container: object = None, data_sources: object = None, force_type: object = None, spoint: object = None, scoping_filter: object = None, config: OperatorConfig = None)

force_summation()
force_summation(time_scoping: object, nodal_scoping: object, elemental_scoping: object, streams_container: object, data_sources: object, force_type: object, spoint: object, scoping_filter: object, config: OperatorConfig)
force_summation(config: OperatorConfig)


**DPF Framework Reference:** [force_summation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/force_summation.md)

**Parameters:**

* **time_scoping**
* **nodal_scoping**
* **elemental_scoping**
* **streams_container**
* **data_sources**
* **force_type**
* **spoint**
* **scoping_filter**
* **config**

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
