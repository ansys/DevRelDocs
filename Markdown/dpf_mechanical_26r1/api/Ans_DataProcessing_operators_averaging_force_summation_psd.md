---
uid: Ans.DataProcessing.operators.averaging.force_summation_psd
title: force_summation_psd
---

# force_summation_psd Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System for a PSD analysis. Equivalent to MAPDL FSUM/NFORCE.   ///available inputs: nodal_scoping (Scoping, ScopingsContainer) (optional), elemental_scoping (Scoping, ScopingsContainer) (optional), streams (StreamsContainer) (optional), data_sources (DataSources), spoint (Field, FieldsContainer) (optional), abs_rel_key (Int32) (optional), signif (double) (optional)
            available outputs: moment_accumulation (FieldsContainer), forces_on_nodes (FieldsContainer), moments_on_nodes (FieldsContainer)

force_summation_psd()
force_summation_psd(nodal_scoping: object, elemental_scoping: object, streams: object, data_sources: object, spoint: object, abs_rel_key: object, signif: object, config: OperatorConfig)
force_summation_psd(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
