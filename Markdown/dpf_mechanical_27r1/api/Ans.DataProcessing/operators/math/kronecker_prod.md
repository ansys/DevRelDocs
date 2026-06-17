---
uid: Ans.DataProcessing.operators.math.kronecker_prod
---

# *class* kronecker_prod(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes the [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product)

of two matrix-valued fields per entity.

For each entity, if $A$ is an $(m \times n)$ matrix and $B$ is a $(p \times q)$ matrix,

the result is an $(mp \times nq)$ matrix:

$(A \otimes B)_{(ip+k),(jq+l)} = A_{i,j} \cdot B_{k,l}$.

Both input fields must have the same number of entities.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [kronecker_prod operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/kronecker_prod.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = kronecker_prod()

op = kronecker_prod(fieldA=my_fieldA,fieldB=my_fieldB)
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

Matrix field containing the Kronecker product $A \otimes B$ for each entity; unit is $u_A \cdot u_B$.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
