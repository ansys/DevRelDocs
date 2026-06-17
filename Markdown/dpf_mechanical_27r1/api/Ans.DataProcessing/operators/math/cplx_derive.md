---
uid: Ans.DataProcessing.operators.math.cplx_derive
---

# *class* cplx_derive(fields_container: object = None, config: OperatorConfig = None)

Computes the time derivative of a [phasor](https://en.wikipedia.org/wiki/Phasor) field

in the frequency domain by multiplying by $j\omega$,

where $\omega = 2\pi f$ and $f$ is taken from the fields container's time-frequency support.

The result components are:

$\mathrm{Re}(\dot{z})[i] = -\omega \cdot \mathrm{Im}(z)[i]$,

$\mathrm{Im}(\dot{z})[i] = \omega \cdot \mathrm{Re}(z)[i]$.

The output unit is the input field unit multiplied by the time-frequency support unit.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_derive operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_derive.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = cplx_derive()

op = cplx_derive(fields_container=my_fields_container)
```

## Inputs

### fields_container

Complex-valued fields container with a time-frequency support defining the frequencies.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container containing the frequency-domain time derivative $j\omega z$ (real and imaginary parts).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
