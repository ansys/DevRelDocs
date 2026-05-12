---
uid: Ans.DataProcessing.operators.math.fft_eval
---

# *class* fft_eval(field_t: object = None, time_scoping: object = None, config: OperatorConfig = None)

Evaluate the fast fourier transforms at a given set of fields.

available inputs: `field_t` (Field), `time_scoping` (Scoping) (optional)

available outputs: `field` (Field), `offset` (Field)

**DPF Framework Reference:** [fft_eval operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_eval.md)

**Parameters:**

* **field_t**
* **time_scoping**
* **config**

**Example:**

```python
op = fft_eval()

op = fft_eval(field_t=my_field_t,time_scoping=my_time_scoping)
```

## Inputs

### field_t

field of values to evaluate

**Type:** *LinkableInput*

### time_scoping

if specified only the results at these set ids are used

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### offset

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
