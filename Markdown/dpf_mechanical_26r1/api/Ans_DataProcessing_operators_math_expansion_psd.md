---
uid: Ans.DataProcessing.operators.math.expansion_psd
title: expansion_psd
---

# expansion_psd Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the PSD response for one-sigma solution.   ///available inputs: mode_shapes (FieldsContainer), static_shapes (FieldsContainer) (optional), rel_rel_covar_matrix (FieldsContainer), stat_stat_covar_matrix (FieldsContainer) (optional), rel_stat_covar_matrix (FieldsContainer) (optional)
            available outputs: psd (FieldsContainer)

expansion_psd()
expansion_psd(mode_shapes: object, static_shapes: object, rel_rel_covar_matrix: object, stat_stat_covar_matrix: object, rel_stat_covar_matrix: object, config: OperatorConfig)
expansion_psd(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
expansion_psd()
```

#### Constructor

```python
expansion_psd(mode_shapes, static_shapes, rel_rel_covar_matrix, stat_stat_covar_matrix, rel_stat_covar_matrix, config)
```

**Parameters:**

- `mode_shapes` (*object*)
- `static_shapes` (*object*)
- `rel_rel_covar_matrix` (*object*)
- `stat_stat_covar_matrix` (*object*)
- `rel_stat_covar_matrix` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
expansion_psd(config)
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
