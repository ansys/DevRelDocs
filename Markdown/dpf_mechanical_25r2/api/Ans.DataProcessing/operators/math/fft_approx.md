---
uid: Ans.DataProcessing.operators.math.fft_approx
---

# fft_approx Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.   ///available inputs: time_scoping (IList int, Scoping, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), entity_to_fit (FieldsContainer), component_number (Int32), first_derivative (bool), second_derivative (bool), fit_data (bool), cutoff_fr (double, Int32) (optional)
            available outputs: fitted_entity_y (FieldsContainer), first_der_dy (FieldsContainer), second_der_d2y (FieldsContainer)

fft_approx()
fft_approx(time_scoping: object, mesh_scoping: object, entity_to_fit: object, component_number: object, first_derivative: object, second_derivative: object, fit_data: object, cutoff_fr: object, config: OperatorConfig)
fft_approx(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fft_approx()
```

#### Constructor

```python
fft_approx(time_scoping, mesh_scoping, entity_to_fit, component_number, first_derivative, second_derivative, fit_data, cutoff_fr, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `entity_to_fit` (*object*)
- `component_number` (*object*)
- `first_derivative` (*object*)
- `second_derivative` (*object*)
- `fit_data` (*object*)
- `cutoff_fr` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft_approx(config)
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
