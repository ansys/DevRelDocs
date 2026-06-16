---
uid: Ans.DataProcessing.operators.logic.identical_sc
---

# *class* identical_sc(scopings_containerA: object = None, scopings_containerB: object = None, config: OperatorConfig = None)

Checks if two scopings_container are identical.

available inputs: `scopings_containerA` (ScopingsContainer), `scopings_containerB` (ScopingsContainer)

available outputs: `boolean` (bool), `message` (string)

**DPF Framework Reference:** [identical_sc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/identical_sc.md)

**Parameters:**

* **scopings_containerA**
* **scopings_containerB**
* **config**

**Example:**

```python
op = identical_sc()

op = identical_sc(scopings_containerA=my_scopings_containerA,scopings_containerB=my_scopings_containerB)
```

## Inputs

### scopings_containerA

**Type:** *LinkableInput*

### scopings_containerB

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
