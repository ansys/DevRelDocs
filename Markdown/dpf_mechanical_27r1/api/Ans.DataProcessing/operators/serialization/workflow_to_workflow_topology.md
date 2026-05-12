---
uid: Ans.DataProcessing.operators.serialization.workflow_to_workflow_topology
---

# *class* workflow_to_workflow_topology(workflow: object = None, config: OperatorConfig = None)

Creates a GenericDataContainer based on WorkflowTopology structure from a Workflow object, allowing to access its operators, operator connections, data connections, and exposed pins.

available inputs: `workflow` (Workflow)

available outputs: `workflow_topology` (GenericDataContainer)

**DPF Framework Reference:** [workflow_to_workflow_topology operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/workflow_to_workflow_topology.md)

**Parameters:**

* **workflow**
* **config**

**Example:**

```python
op = workflow_to_workflow_topology()

op = workflow_to_workflow_topology(workflow=my_workflow)
```

## Inputs

### workflow

**Type:** *LinkableInput*

## Outputs

### workflow_topology

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
