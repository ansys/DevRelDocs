---
uid: Ans.DataProcessing.operators.result.total_strain
---

# *class* total_strain(time_scoping: object = None, mesh_scoping: object = None, data_sources: object = None, config: OperatorConfig = None)

total_strain()
total_strain(time_scoping: object, mesh_scoping: object, data_sources: object, config: OperatorConfig)
total_strain(config: OperatorConfig)


**DPF Framework Reference:** [total_strain operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/total_strain.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **data_sources**
* **config**

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

**Type:** *LinkableInput*

### mesh_scoping

nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

**Type:** *LinkableInput*

### fields_container

Fields container already allocated modified inplace

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### bool_rotate_to_global

Rotate the result to the global coordinate system if rotations are available (default true). Please check your results carefully if 'false' is used for Elemental or ElementalNodal results averaged to the Nodes when adjacent elements do not share the same coordinate system, as results may be incorrect.

**Type:** *LinkableInput*

### mesh

prevents from reading the mesh in the result files

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
