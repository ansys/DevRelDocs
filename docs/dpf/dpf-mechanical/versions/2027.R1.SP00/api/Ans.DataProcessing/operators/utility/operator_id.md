---
uid: Ans.DataProcessing.operators.utility.operator_id
---

# *class* operator_id(op: object = None, config: OperatorConfig = None)

Return the id of an Operator.

available inputs: `op` (Operator)

available outputs: `id` (Int32)

**DPF Framework Reference:** [operator_id operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/operator_id.md)

**Parameters:**

* **op**
* **config**

**Example:**

```python
op = operator_id()

op = operator_id(op=my_op)
```

## Inputs

### op

**Type:** *LinkableInput*

## Outputs

### id

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
