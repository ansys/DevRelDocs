---
uid: Ans.DataProcessing.operators.logic.split_data_sources
---

# *class* split_data_sources(data_sources: object = None, output_count: object = None, config: OperatorConfig = None)

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

available inputs: `data_sources` (DataSources), `output_count` (Int32)

available outputs: `output_count` (Int32), `outputs1` (DataSources), `outputs2` (DataSources)

**DPF Framework Reference:** [split_data_sources operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/split_data_sources.md)

**Parameters:**

* **data_sources**
* **output_count**
* **config**

**Example:**

```python
op = split_data_sources()

op = split_data_sources(data_sources=my_data_sources,output_count=my_output_count)
```

## Inputs

### data_sources

Data sources to split.

**Type:** *LinkableInput*

### output_count

Number of desired outputs.

**Type:** *LinkableInput*

## Outputs

### output_count

Actual number of outputs.

**Type:** *LinkableOutput*

### outputs1

Data sources outputs.

**Type:** *LinkableOutput*

### outputs2

Data sources outputs.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
