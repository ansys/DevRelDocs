---
uid: Ans.DataProcessing.operators.math.modal_damping_ratio
title: modal_damping_ratio
---

# modal_damping_ratio Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

modal_damping_ratio()
modal_damping_ratio(natural_freq: object, const_ratio: object, ratio_by_modes: object, m_coefficient: object, k_coefficient: object, config: OperatorConfig)
modal_damping_ratio(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
modal_damping_ratio()
```

#### Constructor

```python
modal_damping_ratio(natural_freq, const_ratio, ratio_by_modes, m_coefficient, k_coefficient, config)
```

**Parameters:**

- `natural_freq` (*object*)
- `const_ratio` (*object*)
- `ratio_by_modes` (*object*)
- `m_coefficient` (*object*)
- `k_coefficient` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
modal_damping_ratio(config)
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
