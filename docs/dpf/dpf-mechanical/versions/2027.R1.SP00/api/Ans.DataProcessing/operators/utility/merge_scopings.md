---
uid: Ans.DataProcessing.operators.utility.merge_scopings
---

# *class* merge_scopings(scopings1: object = None, scopings2: object = None, config: OperatorConfig = None)

Assembles a set of scopings into a unique one.

available inputs: `scopings1` (Scoping, ScopingsContainer), `scopings2` (Scoping, ScopingsContainer)

available outputs: `merged_scoping` (Scoping)

**DPF Framework Reference:** [merge_scopings operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_scopings.md)

**Parameters:**

* **scopings1**
* **scopings2**
* **config**

**Example:**

```python
op = merge_scopings()

op = merge_scopings(scopings1=my_scopings1,scopings2=my_scopings2)
```

## Inputs

### scopings1

Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ...

**Type:** *LinkableInput*

### scopings2

Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
