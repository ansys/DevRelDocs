---
uid: Ans.DataProcessing.operators.result.members_in_compression_not_certified
---

# *class* members_in_compression_not_certified(time_scoping: object = None, field_yield_strength: object = None, field_end_condition: object = None, streams: object = None, data_sources: object = None, manufacture: object = None, partial_factor: object = None, mesh: object = None, axial_force: object = None, fabrication_type: object = None, config: OperatorConfig = None)

This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

available inputs: `time_scoping` (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), `field_yield_strength` (DataSources, Field), `field_end_condition` (DataSources, Field), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `manufacture` (bool), `partial_factor` (double), `mesh` (MeshedRegion), `axial_force` (FieldsContainer), `fabrication_type` (bool)

available outputs: `buckling_resistance_compression_yy` (FieldsContainer), `buckling_resistance_compression_zz` (FieldsContainer)

**DPF Framework Reference:** [members_in_compression_not_certified operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/members_in_compression_not_certified.md)

**Parameters:**

* **time_scoping**
* **field_yield_strength**
* **field_end_condition**
* **streams**
* **data_sources**
* **manufacture**
* **partial_factor**
* **mesh**
* **axial_force**
* **fabrication_type**
* **config**

**Example:**

```python
op = members_in_compression_not_certified()

op = members_in_compression_not_certified(time_scoping=my_time_scoping,field_yield_strength=my_field_yield_strength,field_end_condition=my_field_end_condition,streams=my_streams,data_sources=my_data_sources,manufacture=my_manufacture,partial_factor=my_partial_factor,mesh=my_mesh,axial_force=my_axial_force,fabrication_type=my_fabrication_type)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
