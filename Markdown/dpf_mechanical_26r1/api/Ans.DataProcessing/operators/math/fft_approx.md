---
uid: Ans.DataProcessing.operators.math.fft_approx
---

# fft_approx Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.

available inputs: `time_scoping` (IList int, Scoping, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `entity_to_fit` (FieldsContainer), `component_number` (Int32), `first_derivative` (bool), `second_derivative` (bool), `fit_data` (bool), `cutoff_fr` (double, Int32) (optional)

available outputs: `fitted_entity_y` (FieldsContainer), `first_der_dy` (FieldsContainer), `second_der_d2y` (FieldsContainer)

## Example

```python
op = fft_approx()

op = fft_approx(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,entity_to_fit=my_entity_to_fit,component_number=my_component_number,first_derivative=my_first_derivative,second_derivative=my_second_derivative,fit_data=my_fit_data,cutoff_fr=my_cutoff_fr)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

A time scoping to rescope / split the fields container given as input.

**Type:** *LinkableInput*

### mesh_scoping

A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input.

**Type:** *LinkableInput*

### entity_to_fit

Data changing in time to be fitted.

**Type:** *LinkableInput*

### component_number

Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on.

**Type:** *LinkableInput*

### first_derivative

Calculate the first derivative (bool). The default is false.

**Type:** *LinkableInput*

### second_derivative

Calculate the second derivative (bool). The default is false.

**Type:** *LinkableInput*

### fit_data

Calculate the fitted values (bool). The default is false

**Type:** *LinkableInput*

### cutoff_fr

Cutoff frequency.

**Type:** *LinkableInput*

## Outputs

### fitted_entity_y

The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data.

**Type:** *LinkableOutput*

### first_der_dy

The first derivative (dY) from the fitted Y.

**Type:** *LinkableOutput*

### second_der_d2y

The second derivative (d2Y) from the fitted Y.

**Type:** *LinkableOutput*

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
