---
uid: Ans.DataProcessing.operators.averaging.force_summation_psd
---

# force_summation_psd Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System for a PSD analysis. Equivalent to MAPDL FSUM/NFORCE.

available inputs: `nodal_scoping` (Scoping, ScopingsContainer) (optional), `elemental_scoping` (Scoping, ScopingsContainer) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources), `spoint` (Field, FieldsContainer) (optional), `abs_rel_key` (Int32) (optional), `signif` (double) (optional)

available outputs: `force_accumulation` (FieldsContainer), `moment_accumulation` (FieldsContainer), `forces_on_nodes` (FieldsContainer), `moments_on_nodes` (FieldsContainer)

## Example

```python
op = force_summation_psd()

op = force_summation_psd(nodal_scoping=my_nodal_scoping,elemental_scoping=my_elemental_scoping,streams=my_streams,data_sources=my_data_sources,spoint=my_spoint,abs_rel_key=my_abs_rel_key,signif=my_signif)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0).

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

## Constructors

#### Constructor

```python
force_summation_psd()
```

#### Constructor

```python
force_summation_psd(nodal_scoping, elemental_scoping, streams, data_sources, spoint, abs_rel_key, signif, config)
```

**Parameters:**

- `nodal_scoping` (*object*)
- `elemental_scoping` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `spoint` (*object*)
- `abs_rel_key` (*object*)
- `signif` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
force_summation_psd(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
