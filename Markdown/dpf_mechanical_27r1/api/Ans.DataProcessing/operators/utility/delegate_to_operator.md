---
uid: Ans.DataProcessing.operators.utility.delegate_to_operator
---

# *class* delegate_to_operator(operator_name: object = None, config: OperatorConfig = None)

Delegate the run to an Operator instantiated by the name in input (forwards all the input of this Operator to the sub Operator).

available inputs: `operator_name` (string)

available outputs: `any1` (Any), `any2` (Any)

**DPF Framework Reference:** [delegate_to_operator operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/delegate_to_operator.md)

**Parameters:**

* **operator_name**
* **config**

**Example:**

```python
op = delegate_to_operator()

op = delegate_to_operator(operator_name=my_operator_name)
```

## Inputs

### operator_name

**Type:** *LinkableInput*

## Outputs

### any1

inputs

**Type:** *LinkableOutput*

### any2

inputs

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
