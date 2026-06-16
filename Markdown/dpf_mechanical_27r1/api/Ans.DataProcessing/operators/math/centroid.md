---
uid: Ans.DataProcessing.operators.math.centroid
---

# *class* centroid(fieldA: object = None, fieldB: object = None, factor: object = None, config: OperatorConfig = None)

Computes a [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between two fields

using a scalar factor $t$: $\mathrm{out}[i] = (1 - t) \cdot A[i] + t \cdot B[i]$.

The interpolation is convex (no extrapolation) when $t \in [0, 1]$;

values outside this range extrapolate beyond the two input fields.

This operator works by index only.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer), `factor` (double)

available outputs: `field` (Field)

**DPF Framework Reference:** [centroid operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/centroid.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **factor**
* **config**

**Example:**

```python
op = centroid()

op = centroid(fieldA=my_fieldA,fieldB=my_fieldB,factor=my_factor)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

### factor

Interpolation factor $t$: $t = 0$ returns fieldA unchanged, $t = 1$ returns fieldB unchanged. Values in $[0, 1]$ interpolate; values outside extrapolate.

**Type:** *LinkableInput*

## Outputs

### field

Interpolated field $(1 - t) \cdot A + t \cdot B$, with the unit of pin A.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
