---
uid: Ans.DataProcessing.operators.math.time_integration
---

# time_integration Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Integrates a field of time varying quantities over time   ///available inputs: field (Field), resample_output (bool) (optional), absolute_error (double) (optional), minimum_step_size (double) (optional), integration_constant (double) (optional)
            available outputs: field (Field)

time_integration()
time_integration(field: object, resample_output: object, absolute_error: object, minimum_step_size: object, integration_constant: object, config: OperatorConfig)
time_integration(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
time_integration()
```

#### Constructor

```python
time_integration(field, resample_output, absolute_error, minimum_step_size, integration_constant, config)
```

**Parameters:**

- `field` (*object*)
- `resample_output` (*object*)
- `absolute_error` (*object*)
- `minimum_step_size` (*object*)
- `integration_constant` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_integration(config)
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
