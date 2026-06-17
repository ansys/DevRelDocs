---
uid: Ans.DataProcessing.operators.math.component_wise_divide
---

# *class* component_wise_divide(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes the component-wise fraction $\mathrm{out}[k] = A[k] / B[k]$

(also known as the [Hadamard division](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations))

for fields of the same dimensionality.

If one field's scoping has the 'overall' location, its values are broadcast across all entities of the other field.

When $|B[k]| < 10^{-14}$ the corresponding output component is set to $0$.

Inplace execution is supported when working with constants or using 'work_by_index'.

The output unit is $u_A / u_B$.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [component_wise_divide operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/component_wise_divide.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = component_wise_divide()

op = component_wise_divide(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field with $A[k] / B[k]$ for each component (zero where $|B[k]| < 10^{-14}$); unit is $u_A / u_B$.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
