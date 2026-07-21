---
uid: Ans.DataProcessing.operators.utility.get_workflow_step_index_operator_statuses
---

# *class* get_workflow_step_index_operator_statuses(workflow: object = None, config: OperatorConfig = None)

Get the status of every operator tracked by the workflow's step index. Returns a GenericDataContainer with keys 'opName_opId' and int values corresponding to E_OperatorState.

available inputs: `workflow` (Workflow)

available outputs: `operator_statuses` (GenericDataContainer)

**DPF Framework Reference:** [get_workflow_step_index_operator_statuses operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/get_workflow_step_index_operator_statuses.md)

**Parameters:**

* **workflow**
* **config**

**Example:**

```python
op = get_workflow_step_index_operator_statuses()

op = get_workflow_step_index_operator_statuses(workflow=my_workflow)
```

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### operator_statuses

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
