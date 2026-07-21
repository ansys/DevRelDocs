---
uid: Ans.DataProcessing.operators.utility.get_workflow_step_index_current_memory
---

# *class* get_workflow_step_index_current_memory(workflow: object = None, config: OperatorConfig = None)

Get the current heap memory (in MB) held by the workflow's step index.

available inputs: `workflow` (Workflow)

available outputs: `memory_mb` (Int32)

**DPF Framework Reference:** [get_workflow_step_index_current_memory operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/get_workflow_step_index_current_memory.md)

**Parameters:**

* **workflow**
* **config**

**Example:**

```python
op = get_workflow_step_index_current_memory()

op = get_workflow_step_index_current_memory(workflow=my_workflow)
```

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### memory_mb

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
