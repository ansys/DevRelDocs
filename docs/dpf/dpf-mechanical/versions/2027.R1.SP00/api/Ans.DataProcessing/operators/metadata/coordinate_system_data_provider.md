---
uid: Ans.DataProcessing.operators.metadata.coordinate_system_data_provider
---

# *class* coordinate_system_data_provider(solver_coordinate_system_ids: object = None, streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads coordinate systems data from the result files contained in the streams or data sources.

available inputs: `solver_coordinate_system_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `coordinate_system_data1` (GenericDataContainer), `coordinate_system_data2` (GenericDataContainer)

**DPF Framework Reference:** [coordinate_system_data_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/coordinate_system_data_provider.md)

**Parameters:**

* **solver_coordinate_system_ids**
* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = coordinate_system_data_provider()

op = coordinate_system_data_provider(solver_coordinate_system_ids=my_solver_coordinate_system_ids,streams=my_streams,data_sources=my_data_sources)
```

## Inputs

### solver_coordinate_system_ids

Coorfinate System ids to recover used by the solver. If not set, all available materials to be recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### coordinate_system_data1

**Type:** *LinkableOutput*

### coordinate_system_data2

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
