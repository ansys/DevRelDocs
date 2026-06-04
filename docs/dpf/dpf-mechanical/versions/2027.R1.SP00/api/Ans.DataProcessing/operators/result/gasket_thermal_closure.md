---
uid: Ans.DataProcessing.operators.result.gasket_thermal_closure
---

# *class* gasket_thermal_closure(time_scoping: object = None, mesh_scoping: object = None, data_sources: object = None, requested_location: object = None, config: OperatorConfig = None)

gasket_thermal_closure()
gasket_thermal_closure(time_scoping: object, mesh_scoping: object, data_sources: object, requested_location: object, config: OperatorConfig)
gasket_thermal_closure(config: OperatorConfig)


**DPF Framework Reference:** [gasket_thermal_closure operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/gasket_thermal_closure.md)

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

Fields container already allocated modified inplace

**Type:** *LinkableInput*

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### mesh

prevents from reading the mesh in the result files

**Type:** *LinkableInput*

### requested_location

requested location Nodal, Elemental or ElementalNodal

**Type:** *LinkableInput*

### split_shells

If true, this pin forces the results to be split by element shape, indicated by the presence of the 'elshape' label in the output. If false, the results for all elements shapes are combined. Default value is false if averaging is not required and true if averaging is required.

**Type:** *LinkableInput*

### shell_layer

If connected, this pin allows you to extract the result only on the selected shell layer(s). The available values are: 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid.

**Type:** *LinkableInput*

### extend_to_mid_nodes

Compute mid nodes (when available) by averaging the neighbour corner nodes. Default: True

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
