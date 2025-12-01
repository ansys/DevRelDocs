---
uid: Ans.DataProcessing.operators.mesh.beam_properties
---

# beam_properties Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Reads the beam's properties from the result files contained in the streams or data sources.   ///available inputs: streams (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: mesh_out (MeshedRegion), field_type_section_id (Field), field_area (Field), field_moment_inertia (Field), field_geometry (Field), field_young_modulus (Field), field_poisson_ratio (Field), field_shear_modulus (Field), field_beam_length (Field), field_torsion_constant (Field), field_warping_constant (Field), field_offset_type (Field), field_offset_y (Field), field_offset_z (Field)

beam_properties()
beam_properties(streams: object, data_sources: object, config: OperatorConfig)
beam_properties(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
