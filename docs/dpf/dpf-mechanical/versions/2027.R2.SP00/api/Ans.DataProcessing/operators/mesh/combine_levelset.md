---
uid: Ans.DataProcessing.operators.mesh.combine_levelset
---

# *class* combine_levelset(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes the binary union of two signed level-set fields using the entity-wise (component-wise) minimum, also known as

the [pointwise minimum](https://en.wikipedia.org/wiki/Minimum).

For corresponding values, the output is $\min(fieldA[i], fieldB[i])$.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [combine_levelset operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/combine_levelset.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = combine_levelset()

op = combine_levelset(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

A field containing level-set values. The output is copied from this field and uses its scoping and field definition.

**Type:** *LinkableInput*

### fieldB

A second level-set field whose values are combined entity-wise with fieldA values to compute the binary union.

**Type:** *LinkableInput*

## Outputs

### field

A field containing the entity-wise minimum of corresponding fieldA and fieldB values. It uses fieldA's scoping and field definition.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
