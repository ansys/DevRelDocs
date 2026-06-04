---
uid: Ans.DataProcessing.operators.metadata.real_constants_provider
---

# *class* real_constants_provider(solver_real_constants_ids: object = None, streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads real constants from the result files contained in the streams or data sources.

available inputs: `solver_real_constants_ids` (Int32, IList int, System.Collections.IEnumerable) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `real_constants` (Field)

**DPF Framework Reference:** [real_constants_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/real_constants_provider.md)

**Parameters:**

* **solver_real_constants_ids**
* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = real_constants_provider()

op = real_constants_provider(solver_real_constants_ids=my_solver_real_constants_ids,streams=my_streams,data_sources=my_data_sources)
```

## Inputs

### solver_real_constants_ids

Real Constant ids to recover used by the solver. If not set, all available real constants to be recovered.

**Type:** *LinkableInput*

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### real_constants

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
