---
uid: Ans.DataProcessing.operators.metadata.boundary_condition_provider
---

# *class* boundary_condition_provider(time_scoping: object = None, streams_container: object = None, data_sources: object = None, property: object = None, config: OperatorConfig = None)

Reads boundary conditions from the results files contained in the streams or data sources.

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property` (Int32)

available outputs: `field_or_fields_container` (Field ,FieldsContainer)

**DPF Framework Reference:** [boundary_condition_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/boundary_condition_provider.md)

**Parameters:**

* **time_scoping**
* **streams_container**
* **data_sources**
* **property**
* **config**

**Example:**

```python
op = boundary_condition_provider()

op = boundary_condition_provider(time_scoping=my_time_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property=my_property)
```

## Inputs

### time_scoping

Time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output.

**Type:** *LinkableInput*

### streams_container

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

### property

**Type:** *LinkableInput*

## Outputs

### field_or_fields_container

Value of the boundary condition at each node (0 if there is not). It is a field if there is only one time step, and a fields container otherwise.

**Type:** *LinkableOutput*

### result_info

Deprecated alias of: field_or_fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
