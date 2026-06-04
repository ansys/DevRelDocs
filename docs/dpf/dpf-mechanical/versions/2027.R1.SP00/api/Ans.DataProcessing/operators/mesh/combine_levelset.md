---
uid: Ans.DataProcessing.operators.mesh.combine_levelset
---

# *class* combine_levelset(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Takes two level sets and computes their binary union.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [combine_levelset operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/combine_levelset.md)

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

**Type:** *LinkableInput*

### fieldB

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
