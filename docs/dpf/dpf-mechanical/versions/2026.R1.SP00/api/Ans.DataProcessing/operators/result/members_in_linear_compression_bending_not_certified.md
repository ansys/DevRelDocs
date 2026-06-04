---
uid: Ans.DataProcessing.operators.result.members_in_linear_compression_bending_not_certified
---

# members_in_linear_compression_bending_not_certified Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

available inputs: `time_scoping` (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), `field_yield_strength` (Field), `field_end_condition` (DataSources, Field) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `manufacture` (bool) (optional), `partial_factor` (double) (optional), `mesh` (MeshedRegion), `bending_moment_y` (FieldsContainer), `bending_moment_z` (FieldsContainer), `axial_force` (FieldsContainer), `class_cross_section` (bool), `fabrication_type` (bool) (optional)

available outputs: `buckling_resistance_linear_summation_utilization_ratios` (FieldsContainer)

## Example

```python
op = members_in_linear_compression_bending_not_certified()

op = members_in_linear_compression_bending_not_certified(time_scoping=my_time_scoping,field_yield_strength=my_field_yield_strength,field_end_condition=my_field_end_condition,streams=my_streams,data_sources=my_data_sources,manufacture=my_manufacture,partial_factor=my_partial_factor,mesh=my_mesh,bending_moment_y=my_bending_moment_y,bending_moment_z=my_bending_moment_z,axial_force=my_axial_force,class_cross_section=my_class_cross_section,fabrication_type=my_fabrication_type)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

**Type:** *LinkableInput*

### field_yield_strength

This pin contains field of beam's Yield Strength defined by the user.

**Type:** *LinkableInput*

### field_end_condition

This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end conditions value of all beams as 1

**Type:** *LinkableInput*

### streams

 result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set.

**Type:** *LinkableInput*

### manufacture

Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished.

**Type:** *LinkableInput*

### partial_factor

partial factor for resistance of members to instability assessed by member checks. Default value: 1.0

**Type:** *LinkableInput*

### mesh

 Mesh containing beam's properties defined by user

**Type:** *LinkableInput*

### bending_moment_y

Fields Container of bending moment on axis y defined by user

**Type:** *LinkableInput*

### bending_moment_z

Fields Container of bending moment on axis z defined by user

**Type:** *LinkableInput*

### axial_force

Fields Container of axial force defined by user

**Type:** *LinkableInput*

### class_cross_section

Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

**Type:** *LinkableInput*

### fabrication_type

Selection of fabrication's type if there are beams I in the structure. TRUE: Rolled Section, False: Welded Section. Default: Rolled Section.

**Type:** *LinkableInput*

## Outputs

### buckling_resistance_linear_summation_utilization_ratios

Linear summation of the utilization ratios in all members submitted under a combination of both bending and compression. These factors should be less than 1 and positive.

**Type:** *LinkableOutput*

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
