---
uid: Ans.DataProcessing.operators.utility.get_active_operators
---

# *class* get_active_operators(workflow: object = None, config: OperatorConfig = None)

Get all active operators in the evaluation chain of a workflow's output pins. Returns a GenericDataContainer with keys 'opName_opId' and int values corresponding to E_OperatorState.

available inputs: `workflow` (Workflow)

available outputs: `active_operators` (GenericDataContainer)

**DPF Framework Reference:** [get_active_operators operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/get_active_operators.md)

**Parameters:**

* **workflow**
* **config**

**Example:**

```python
op = get_active_operators()

op = get_active_operators(workflow=my_workflow)
```

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### active_operators

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
