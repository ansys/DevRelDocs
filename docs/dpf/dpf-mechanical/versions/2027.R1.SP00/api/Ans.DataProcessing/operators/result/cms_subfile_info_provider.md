---
uid: Ans.DataProcessing.operators.result.cms_subfile_info_provider
---

# *class* cms_subfile_info_provider(data_sources: object = None, cms_subfile_data: object = None, output_maxdof_on_masternodes: object = None, config: OperatorConfig = None)

Read required information from a subfile.

available inputs: `data_sources` (DataSources), `cms_subfile_data` (bool), `output_maxdof_on_masternodes` (bool) (optional)

available outputs: `int32` (Int32), `field` (PropertyField)

**DPF Framework Reference:** [cms_subfile_info_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cms_subfile_info_provider.md)

**Parameters:**

* **data_sources**
* **cms_subfile_data**
* **output_maxdof_on_masternodes**
* **config**

**Example:**

```python
op = cms_subfile_info_provider()

op = cms_subfile_info_provider(data_sources=my_data_sources,cms_subfile_data=my_cms_subfile_data,output_maxdof_on_masternodes=my_output_maxdof_on_masternodes)
```

## Inputs

### data_sources

Data_sources (must contain at least one subfile).

**Type:** *LinkableInput*

### cms_subfile_data

If this pin i set to true, data are return in a field.

**Type:** *LinkableInput*

### output_maxdof_on_masternodes

If this pin is set to true, compute and add field with max degrees of freedom on master nodes

**Type:** *LinkableInput*

## Outputs

### int32

returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes

**Type:** *LinkableOutput*

### field

returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
