---
uid: Ans.DataProcessing.operators.utility.get_operators
---

# *class* get_operators(workflow: object = None, config: OperatorConfig = None)

Getter on operators inside a workflow.

available inputs: `workflow` (Workflow)

available outputs: `operators` (GenericDataContainer)

**DPF Framework Reference:** [get_operators operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/get_operators.md)

**Parameters:**

* **workflow**
* **config**

**Example:**

```python
op = get_operators()

op = get_operators(workflow=my_workflow)
```

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### operators

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
