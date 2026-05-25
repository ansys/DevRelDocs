---
uid: Ans.DataProcessing.operators.utility.merge_scopings_containers
---

# *class* merge_scopings_containers(scopings_containers1: object = None, scopings_containers2: object = None, config: OperatorConfig = None)

Assembles a set of scopings containers into a unique one.

available inputs: `scopings_containers1` (ScopingsContainer), `scopings_containers2` (ScopingsContainer)

available outputs: `merged_scopings_container` (ScopingsContainer)

**DPF Framework Reference:** [merge_scopings_containers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_scopings_containers.md)

**Parameters:**

* **scopings_containers1**
* **scopings_containers2**
* **config**

**Example:**

```python
op = merge_scopings_containers()

op = merge_scopings_containers(scopings_containers1=my_scopings_containers1,scopings_containers2=my_scopings_containers2)
```

## Inputs

### scopings_containers1

A vector of scopings containers to merge or scopings containers from pin 0 to ...

**Type:** *LinkableInput*

### scopings_containers2

A vector of scopings containers to merge or scopings containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_scopings_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
