---
uid: Ans.DataProcessing.operators.result.members_in_bending_not_certified
---

# members_in_bending_not_certified Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), field_yield_strength (Field), class_cross_section (bool), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), partial_factor (double), mesh (MeshedRegion), bending_moment_y (FieldsContainer), bending_moment_z (FieldsContainer)
            available outputs: buckling_resistance_bending_yy (FieldsContainer), buckling_resistance_bending_zz (FieldsContainer)

members_in_bending_not_certified()
members_in_bending_not_certified(time_scoping: object, field_yield_strength: object, class_cross_section: object, streams: object, data_sources: object, partial_factor: object, mesh: object, bending_moment_y: object, bending_moment_z: object, config: OperatorConfig)
members_in_bending_not_certified(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
