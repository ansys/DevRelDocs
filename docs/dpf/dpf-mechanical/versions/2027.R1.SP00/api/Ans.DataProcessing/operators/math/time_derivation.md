---
uid: Ans.DataProcessing.operators.math.time_derivation
---

# *class* time_derivation(field: object = None, spline_fitting: object = None, config: OperatorConfig = None)

Computes the time [derivative](https://en.wikipedia.org/wiki/Derivative) of a scalar

time-varying field.

The input field must have a time-frequency support that provides the time values.

When `spline_fitting` (pin 1) is true, the derivative is computed from a

[cubic spline](https://en.wikipedia.org/wiki/Cubic_spline) fit through the input data,

producing smooth derivatives. When false (default), finite differences are used.

available inputs: `field` (Field), `spline_fitting` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [time_derivation operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/time_derivation.md)

**Parameters:**

* **field**
* **spline_fitting**
* **config**

**Example:**

```python
op = time_derivation()

op = time_derivation(field=my_field,spline_fitting=my_spline_fitting)
```

## Inputs

### field

Scalar time-varying field to differentiate. Must have a time-frequency support.

**Type:** *LinkableInput*

### spline_fitting

When true, fits a cubic spline to the input data and computes the derivative analytically from the spline. When false (default), uses finite differences.

**Type:** *LinkableInput*

## Outputs

### field

Time derivative field. Has the same time support and scoping as the input. Unit is (input unit / second).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
