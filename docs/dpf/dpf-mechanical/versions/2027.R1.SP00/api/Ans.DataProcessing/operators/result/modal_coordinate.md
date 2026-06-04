---
uid: Ans.DataProcessing.operators.result.modal_coordinate
---

# *class* modal_coordinate(time_scoping: object = None, data_sources: object = None, config: OperatorConfig = None)

modal_coordinate()
modal_coordinate(time_scoping: object, data_sources: object, config: OperatorConfig)
modal_coordinate(config: OperatorConfig)


**DPF Framework Reference:** [modal_coordinate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/modal_coordinate.md)

**Parameters:**

* **time_scoping**
* **data_sources**
* **config**

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

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
