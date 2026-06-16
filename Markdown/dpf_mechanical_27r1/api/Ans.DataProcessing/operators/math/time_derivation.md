---
uid: Ans.DataProcessing.operators.math.time_derivation
---

# *class* time_derivation(field: object = None, spline_fitting: object = None, config: OperatorConfig = None)

Derives a field of time varying quantities with respect to time

available inputs: `field` (Field), `spline_fitting` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [time_derivation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/time_derivation.md)

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

field

**Type:** *LinkableInput*

### spline_fitting

Uses spline fitting on the input field to compute smooth derivatives

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
