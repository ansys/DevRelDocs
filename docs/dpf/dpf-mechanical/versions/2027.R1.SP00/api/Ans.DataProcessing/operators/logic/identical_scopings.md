---
uid: Ans.DataProcessing.operators.logic.identical_scopings
---

# *class* identical_scopings(scopingA: object = None, scopingB: object = None, config: OperatorConfig = None)

Check if two scopings are identical.

available inputs: `scopingA` (Scoping), `scopingB` (Scoping)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_scopings operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_scopings.md)

**Parameters:**

* **scopingA**
* **scopingB**
* **config**

**Example:**

```python
op = identical_scopings()

op = identical_scopings(scopingA=my_scopingA,scopingB=my_scopingB)
```

## Inputs

### scopingA

**Type:** *LinkableInput*

### scopingB

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
