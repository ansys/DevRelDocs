---
uid: Ans.DataProcessing.operators.result.cms_dst_table_provider
---

# *class* cms_dst_table_provider(data_sources: object = None, config: OperatorConfig = None)

Read CST table from a subfile.

available inputs: `data_sources` (DataSources)

available outputs: `dst_table` (PropertyField)

**DPF Framework Reference:** [cms_dst_table_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cms_dst_table_provider.md)

**Parameters:**

* **data_sources**
* **config**

**Example:**

```python
op = cms_dst_table_provider()

op = cms_dst_table_provider(data_sources=my_data_sources)
```

## Inputs

### data_sources

Data_sources (must contain at least one subfile).

**Type:** *LinkableInput*

## Outputs

### dst_table

returns integer values of the dst table

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
