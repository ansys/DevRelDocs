---
uid: Ans.DataProcessing.operators.math.fft_eval
---

# fft_eval Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Evaluate the fast fourier transforms at a given set of fields.   ///available inputs: field_t (Field), time_scoping (Scoping) (optional)
            available outputs: field (Field), offset (Field)

fft_eval()
fft_eval(field_t: object, time_scoping: object, config: OperatorConfig)
fft_eval(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fft_eval()
```

#### Constructor

```python
fft_eval(field_t, time_scoping, config)
```

**Parameters:**

- `field_t` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft_eval(config)
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
