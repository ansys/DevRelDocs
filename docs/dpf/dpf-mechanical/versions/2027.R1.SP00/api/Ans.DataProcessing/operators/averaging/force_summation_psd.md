---
uid: Ans.DataProcessing.operators.averaging.force_summation_psd
---

# *class* force_summation_psd(nodal_scoping: object = None, elemental_scoping: object = None, streams: object = None, data_sources: object = None, spoint: object = None, abs_rel_key: object = None, signif: object = None, config: OperatorConfig = None)

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System for a PSD analysis. Equivalent to MAPDL FSUM/NFORCE.  The moment is computed in the unit system of the data source.

available inputs: `nodal_scoping` (Scoping, ScopingsContainer) (optional), `elemental_scoping` (Scoping, ScopingsContainer) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources), `spoint` (Field, FieldsContainer) (optional), `abs_rel_key` (Int32) (optional), `signif` (double) (optional)

available outputs: `force_accumulation` (FieldsContainer), `moment_accumulation` (FieldsContainer), `forces_on_nodes` (FieldsContainer), `moments_on_nodes` (FieldsContainer)

**DPF Framework Reference:** [force_summation_psd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/force_summation_psd.md)

**Parameters:**

* **nodal_scoping**
* **elemental_scoping**
* **streams**
* **data_sources**
* **spoint**
* **abs_rel_key**
* **signif**
* **config**

**Example:**

```python
op = force_summation_psd()

op = force_summation_psd(nodal_scoping=my_nodal_scoping,elemental_scoping=my_elemental_scoping,streams=my_streams,data_sources=my_data_sources,spoint=my_spoint,abs_rel_key=my_abs_rel_key,signif=my_signif)
```

## Inputs

### nodal_scoping

Nodal scoping or scopings container with a single label. Set of nodes in which elemental contribution forces will be accumulated. Defaults to all nodes.

**Type:** *LinkableInput*

### elemental_scoping

Elemental scoping or scopings container with a single label. Set of elements contributing to the force calculation. Defaults to all elements.

**Type:** *LinkableInput*

### streams

Streams container for RST and PSD files (optional if using data sources). The operator supports both a single RST file and two separate RST files. See data sources pin specifications for details on how to define the streams for both cases.

**Type:** *LinkableInput*

### data_sources

Data sources containing RST and PSD files (optional if using a streams container). The operator supports both a single RST file (containing both modal and PSD results) and two separate RST files (one for modal and one for PSD analyses).The data source containing modal results must be defined as an upstream data source.If using a single RST file for PSD and modal analysis, the RST file must be in an upstream data source.If using two separate RST files, only the modal RST must be in an upstream data source.

**Type:** *LinkableInput*

### spoint

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters.

**Type:** *LinkableInput*

### abs_rel_key

Key to select the type of response: 0 for relative response (default) or 1 for absolute response.

**Type:** *LinkableInput*

### signif

Significance threshold, defaults to 0.0001. Any mode with a significance level above this value will be included in the combination.The significance level is defined as the modal covariance matrix term, divided by the maximum modal covariance matrix term.

**Type:** *LinkableInput*

## Outputs

### force_accumulation

Returns the sum of forces for the 1-sigma displacement solution on the scoped nodes/elements.

**Type:** *LinkableOutput*

### moment_accumulation

Returns the sum of moments for the 1-sigma displacement solution on the scoped nodes/elements.

**Type:** *LinkableOutput*

### forces_on_nodes

Returns the nodal forces for the 1-sigma displacement solution on the scoped nodes/elements.

**Type:** *LinkableOutput*

### moments_on_nodes

Returns the nodal moments for the 1-sigma displacement solution on the scoped nodes/elements.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
