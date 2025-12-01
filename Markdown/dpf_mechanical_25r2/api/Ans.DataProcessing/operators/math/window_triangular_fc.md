---
uid: Ans.DataProcessing.operators.math.window_triangular_fc
---

# window_triangular_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Apply triangular windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

window_triangular_fc()
window_triangular_fc(fields_container: object, config: OperatorConfig)
window_triangular_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
window_triangular_fc()
```

#### Constructor

```python
window_triangular_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
window_triangular_fc(config)
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
