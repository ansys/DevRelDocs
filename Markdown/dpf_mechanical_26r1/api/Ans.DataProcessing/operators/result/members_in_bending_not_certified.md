---
uid: Ans.DataProcessing.operators.result.members_in_bending_not_certified
---

# members_in_bending_not_certified Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.

available inputs: `time_scoping` (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), `field_yield_strength` (Field), `class_cross_section` (bool), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `partial_factor` (double), `mesh` (MeshedRegion), `bending_moment_y` (FieldsContainer), `bending_moment_z` (FieldsContainer)

available outputs: `buckling_resistance_bending_yy` (FieldsContainer), `buckling_resistance_bending_zz` (FieldsContainer)

## Example

```python
op = members_in_bending_not_certified()

op = members_in_bending_not_certified(time_scoping=my_time_scoping,field_yield_strength=my_field_yield_strength,class_cross_section=my_class_cross_section,streams=my_streams,data_sources=my_data_sources,partial_factor=my_partial_factor,mesh=my_mesh,bending_moment_y=my_bending_moment_y,bending_moment_z=my_bending_moment_z)
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

### class_cross_section

Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

**Type:** *LinkableInput*

### streams

 result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set.

**Type:** *LinkableInput*

### partial_factor

partial safety factor for resistance of members to instability assessed by member checks. Default value: 1.

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

## Outputs

### buckling_resistance_bending_yy

Fields Container of buckling resistance factor on axis y-y in case of bending(M). These factors should be less than 1 and positive.

**Type:** *LinkableOutput*

### buckling_resistance_bending_zz

Fields Container of buckling resistance factor on axis z-z in case of bending(M). These factors should be less than 1 and positive.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
members_in_bending_not_certified()
```

#### Constructor

```python
members_in_bending_not_certified(time_scoping, field_yield_strength, class_cross_section, streams, data_sources, partial_factor, mesh, bending_moment_y, bending_moment_z, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `field_yield_strength` (*object*)
- `class_cross_section` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `partial_factor` (*object*)
- `mesh` (*object*)
- `bending_moment_y` (*object*)
- `bending_moment_z` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
members_in_bending_not_certified(config)
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
