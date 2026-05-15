---
uid: Ans.DataProcessing.operators.metadata.datasources_provider
---

# *class* datasources_provider(data_sources: object = None, config: OperatorConfig = None)

Creates a DataSources by expanding another.

available inputs: `data_sources` (DataSources)

available outputs: `data_sources` (DataSources)

**DPF Framework Reference:** [datasources_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/datasources_provider.md)

**Parameters:**

* **data_sources**
* **config**

**Example:**

```python
op = datasources_provider()

op = datasources_provider(data_sources=my_data_sources)
```

## Inputs

### data_sources

**Type:** *LinkableInput*

## Outputs

### data_sources

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
