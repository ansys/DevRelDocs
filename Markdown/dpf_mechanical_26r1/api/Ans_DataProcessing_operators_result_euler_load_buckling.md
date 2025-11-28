---
uid: Ans.DataProcessing.operators.result.euler_load_buckling
title: euler_load_buckling
---

# euler_load_buckling Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L)    ///available inputs: field_beam_end_condition (DataSources, Field), field_beam_moment_inertia (Field), field_beam_young_modulus (Field), field_beam_length (Field)
            available outputs: field_euler_critical_load (Field), field_euler_critical_load_yy (Field), field_euler_critical_load_zz (Field)

euler_load_buckling()
euler_load_buckling(field_beam_end_condition: object, field_beam_moment_inertia: object, field_beam_young_modulus: object, field_beam_length: object, config: OperatorConfig)
euler_load_buckling(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
euler_load_buckling()
```

#### Constructor

```python
euler_load_buckling(field_beam_end_condition, field_beam_moment_inertia, field_beam_young_modulus, field_beam_length, config)
```

**Parameters:**

- `field_beam_end_condition` (*object*)
- `field_beam_moment_inertia` (*object*)
- `field_beam_young_modulus` (*object*)
- `field_beam_length` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
euler_load_buckling(config)
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
