---
uid: Ans.DataProcessing.operators.math.modal_damping_ratio
---

# *class* modal_damping_ratio(natural_freq: object = None, const_ratio: object = None, ratio_by_modes: object = None, m_coefficient: object = None, k_coefficient: object = None, config: OperatorConfig = None)

modal_damping_ratio()
modal_damping_ratio(natural_freq: object, const_ratio: object, ratio_by_modes: object, m_coefficient: object, k_coefficient: object, config: OperatorConfig)
modal_damping_ratio(config: OperatorConfig)


**DPF Framework Reference:** [modal_damping_ratio operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/modal_damping_ratio.md)

**Parameters:**

* **natural_freq**
* **const_ratio**
* **ratio_by_modes**
* **m_coefficient**
* **k_coefficient**
* **config**

## Inputs

### natural_freq

input vector expects natural frequencies.

**Type:** *LinkableInput*

### const_ratio

constant modal damping ratio

**Type:** *LinkableInput*

### ratio_by_modes

modal damping ratio for each mode shape

**Type:** *LinkableInput*

### m_coefficient

global mass matrix multiplier

**Type:** *LinkableInput*

### k_coefficient

global stiffness matrix multiplier

**Type:** *LinkableInput*

## Outputs

### field

field of modal damping ratio.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
