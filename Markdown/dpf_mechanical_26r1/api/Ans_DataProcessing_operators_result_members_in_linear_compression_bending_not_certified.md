---
uid: Ans.DataProcessing.operators.result.members_in_linear_compression_bending_not_certified
title: members_in_linear_compression_bending_not_certified
---

# members_in_linear_compression_bending_not_certified Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), field_yield_strength (Field), field_end_condition (DataSources, Field) (optional), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), manufacture (bool) (optional), partial_factor (double) (optional), mesh (MeshedRegion), bending_moment_y (FieldsContainer), bending_moment_z (FieldsContainer), axial_force (FieldsContainer), class_cross_section (bool), fabrication_type (bool) (optional)
            available outputs: buckling_resistance_linear_summation_utilization_ratios (FieldsContainer)

members_in_linear_compression_bending_not_certified()
members_in_linear_compression_bending_not_certified(time_scoping: object, field_yield_strength: object, field_end_condition: object, streams: object, data_sources: object, manufacture: object, partial_factor: object, mesh: object, bending_moment_y: object, bending_moment_z: object, axial_force: object, class_cross_section: object, fabrication_type: object, config: OperatorConfig)
members_in_linear_compression_bending_not_certified(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
members_in_linear_compression_bending_not_certified()
```

#### Constructor

```python
members_in_linear_compression_bending_not_certified(time_scoping, field_yield_strength, field_end_condition, streams, data_sources, manufacture, partial_factor, mesh, bending_moment_y, bending_moment_z, axial_force, class_cross_section, fabrication_type, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `field_yield_strength` (*object*)
- `field_end_condition` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `manufacture` (*object*)
- `partial_factor` (*object*)
- `mesh` (*object*)
- `bending_moment_y` (*object*)
- `bending_moment_z` (*object*)
- `axial_force` (*object*)
- `class_cross_section` (*object*)
- `fabrication_type` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
members_in_linear_compression_bending_not_certified(config)
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
