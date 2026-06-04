---
uid: Ans.DataProcessing.operators.utility.merge_any
---

# *class* merge_any(any1: object = None, any2: object = None, config: OperatorConfig = None)

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

available inputs: `any1` (Any), `any2` (Any)

available outputs: `any` (Any)

**DPF Framework Reference:** [merge_any operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_any.md)

**Parameters:**

* **any1**
* **any2**
* **config**

**Example:**

```python
op = merge_any()

op = merge_any(any1=my_any1,any2=my_any2)
```

## Inputs

### any1

Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

### any2

Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.

**Type:** *LinkableInput*

## Outputs

### any

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
