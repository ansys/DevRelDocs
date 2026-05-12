---
uid: Ans.DataProcessing.operators.result.recombine_harmonic_indeces_cyclic
---

# *class* recombine_harmonic_indeces_cyclic(fields_container: object = None, is_constant: object = None, config: OperatorConfig = None)

Add the fields corresponding to different load steps with the same frequencies to compute the response.

available inputs: `fields_container` (FieldsContainer), `is_constant` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [recombine_harmonic_indeces_cyclic operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/recombine_harmonic_indeces_cyclic.md)

**Parameters:**

* **fields_container**
* **is_constant**
* **config**

**Example:**

```python
op = recombine_harmonic_indeces_cyclic()

op = recombine_harmonic_indeces_cyclic(fields_container=my_fields_container,is_constant=my_is_constant)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### is_constant

If the result is constant, it will only copy the first result found.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
