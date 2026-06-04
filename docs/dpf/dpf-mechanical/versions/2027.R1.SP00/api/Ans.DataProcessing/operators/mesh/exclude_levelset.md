---
uid: Ans.DataProcessing.operators.mesh.exclude_levelset
---

# *class* exclude_levelset(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Takes two level sets and excludes the second one from the first.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [exclude_levelset operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/exclude_levelset.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = exclude_levelset()

op = exclude_levelset(fieldA=my_fieldA,fieldB=my_fieldB)
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
