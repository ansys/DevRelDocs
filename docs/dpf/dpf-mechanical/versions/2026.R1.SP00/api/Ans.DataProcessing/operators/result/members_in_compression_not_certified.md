---
uid: Ans.DataProcessing.operators.result.members_in_compression_not_certified
---

# members_in_compression_not_certified Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

available inputs: `time_scoping` (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), `field_yield_strength` (DataSources, Field), `field_end_condition` (DataSources, Field), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `manufacture` (bool), `partial_factor` (double), `mesh` (MeshedRegion), `axial_force` (FieldsContainer), `fabrication_type` (bool)

available outputs: `buckling_resistance_compression_yy` (FieldsContainer), `buckling_resistance_compression_zz` (FieldsContainer)

## Example

```python
op = members_in_compression_not_certified()

op = members_in_compression_not_certified(time_scoping=my_time_scoping,field_yield_strength=my_field_yield_strength,field_end_condition=my_field_end_condition,streams=my_streams,data_sources=my_data_sources,manufacture=my_manufacture,partial_factor=my_partial_factor,mesh=my_mesh,axial_force=my_axial_force,fabrication_type=my_fabrication_type)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

time/freq set ids (use ints or scoping)

**Type:** *LinkableInput*

### field_yield_strength

This pin contains file csv or field of beam's Yield Strength.

**Type:** *LinkableInput*

### field_end_condition

This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end condition's value of all beams as 1.

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

partial safety factor for resistance of members to instability assessed by member checks. Default value: 1.

**Type:** *LinkableInput*

### mesh

 Mesh containing beam's properties defined by user

**Type:** *LinkableInput*

### axial_force

Fields Container of axial force defined by user

**Type:** *LinkableInput*

### fabrication_type

If there is beam I in the structure, please define its fabrication type. True: Rolled section, False: Welded section

**Type:** *LinkableInput*

## Outputs

### buckling_resistance_compression_yy

Fields Container of buckling resistance factor on axis y-y in case of compression. These factors should be less than 1 and positive.

**Type:** *LinkableOutput*

### buckling_resistance_compression_zz

Fields Container of buckling resistance factor on axis z-z in case of compression. These factors should be less than 1 and positive.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
members_in_compression_not_certified()
```

#### Constructor

```python
members_in_compression_not_certified(time_scoping, field_yield_strength, field_end_condition, streams, data_sources, manufacture, partial_factor, mesh, axial_force, fabrication_type, config)
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
- `axial_force` (*object*)
- `fabrication_type` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
members_in_compression_not_certified(config)
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
