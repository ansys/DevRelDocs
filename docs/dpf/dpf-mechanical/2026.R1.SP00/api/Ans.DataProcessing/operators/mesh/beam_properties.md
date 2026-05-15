---
uid: Ans.DataProcessing.operators.mesh.beam_properties
---

# beam_properties Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Reads the beam's properties from the result files contained in the streams or data sources.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_out` (MeshedRegion), `field_type_section_id` (Field), `field_area` (Field), `field_moment_inertia` (Field), `field_geometry` (Field), `field_young_modulus` (Field), `field_poisson_ratio` (Field), `field_shear_modulus` (Field), `field_beam_length` (Field), `field_torsion_constant` (Field), `field_warping_constant` (Field), `field_offset_type` (Field), `field_offset_y` (Field), `field_offset_z` (Field)

## Example

```python
op = beam_properties()

op = beam_properties(streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### mesh_out

This mesh updates a new map containing a field of the beam's properties if there is at least one beam in mesh.

**Type:** *LinkableOutput*

### field_type_section_id

This field contains the section ID of beams. 1:REC; 3:CSOLID, 4:CTUBE, 5:CHAN, 6:Z, 7:L, 8:I, 9:T, 11:HATS, 12:HREC.

**Type:** *LinkableOutput*

### field_area

This field contains the area of beams.

**Type:** *LinkableOutput*

### field_moment_inertia

This field contains the inertia moment of beams. Iyy, Iyz, Izz.

**Type:** *LinkableOutput*

### field_geometry

This field contains the geometry of beams. REC:b,h. CSOLID:Ri. CTUBE:Ri, Re. CHAN:w1,w2,w3,t1,t2,t3. Z:w1,w2,w3,t1,t2,t3. L:w1,w2,t1,t2. I:w1,w2,w3,t1,t2,t3. T:w1,w2,t1,t2. HATS: w1,w2,w3,w4,t1,t2,t3,t4. HREC:w1,w2,t1,t2,t3,t4.

**Type:** *LinkableOutput*

### field_young_modulus

This field contains the Young's modulus of beams.

**Type:** *LinkableOutput*

### field_poisson_ratio

This field contains the Poisson's ratio of beams.

**Type:** *LinkableOutput*

### field_shear_modulus

This field contains the Shear Modulus of beams.

**Type:** *LinkableOutput*

### field_beam_length

This field contains the length of beams.

**Type:** *LinkableOutput*

### field_torsion_constant

This field contains the Torsion Constant of beams.

**Type:** *LinkableOutput*

### field_warping_constant

This field contains the Warping Constant of beams.

**Type:** *LinkableOutput*

### field_offset_type

This field contains offset type of beams.

**Type:** *LinkableOutput*

### field_offset_y

This field contains offset y of beams.

**Type:** *LinkableOutput*

### field_offset_z

This field contains offset z of beams.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
beam_properties()
```

#### Constructor

```python
beam_properties(streams, data_sources, config)
```

**Parameters:**

- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
beam_properties(config)
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
