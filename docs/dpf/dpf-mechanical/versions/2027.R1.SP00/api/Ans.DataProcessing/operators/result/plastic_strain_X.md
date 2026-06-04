---
uid: Ans.DataProcessing.operators.result.plastic_strain_X
---

# *class* plastic_strain_X(time_scoping: object = None, mesh_scoping: object = None, data_sources: object = None, requested_location: object = None, config: OperatorConfig = None)

plastic_strain_X()
plastic_strain_X(time_scoping: object, mesh_scoping: object, data_sources: object, requested_location: object, config: OperatorConfig)
plastic_strain_X(config: OperatorConfig)


**DPF Framework Reference:** [plastic_strain_X operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_X.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **data_sources**
* **requested_location**
* **config**

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

**Type:** *LinkableInput*

### mesh_scoping

nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

**Type:** *LinkableInput*

### fields_container

FieldsContainer already allocated modified inplace

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### bool_rotate_to_global

if true the field is rotated to global coordinate system (default true)

**Type:** *LinkableInput*

### mesh

prevents from reading the mesh in the result files

**Type:** *LinkableInput*

### requested_location

requested location, default is Nodal

**Type:** *LinkableInput*

### read_cyclic

if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1)

**Type:** *LinkableInput*

### read_beams

elemental nodal beam results are read if this pin is set to true (default is false)

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
