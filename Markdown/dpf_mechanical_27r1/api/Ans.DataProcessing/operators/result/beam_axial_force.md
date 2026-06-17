---
uid: Ans.DataProcessing.operators.result.beam_axial_force
---

# *class* beam_axial_force(time_scoping: object = None, mesh_scoping: object = None, data_sources: object = None, unit_system: object = None, config: OperatorConfig = None)

beam_axial_force()
beam_axial_force(time_scoping: object, mesh_scoping: object, data_sources: object, unit_system: object, config: OperatorConfig)
beam_axial_force(config: OperatorConfig)


**DPF Framework Reference:** [beam_axial_force operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/beam_axial_force.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **data_sources**
* **unit_system**
* **config**

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

**Type:** *LinkableInput*

### mesh_scoping

elements scoping required in output.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### unit_system

(LSDyna) Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance

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
