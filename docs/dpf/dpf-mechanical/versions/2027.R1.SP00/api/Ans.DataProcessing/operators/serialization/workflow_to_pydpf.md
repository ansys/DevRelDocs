---
uid: Ans.DataProcessing.operators.serialization.workflow_to_pydpf
---

# *class* workflow_to_pydpf(workflow: object = None, output_path: object = None, config: OperatorConfig = None)

Generates a PyDPF script that can recreate the given workflow.

The script is returned as a string, and can optionally be saved to a specified path.

available inputs: `workflow` (Workflow), `output_path` (string) (optional)

available outputs: `pydpf_code` (string)

**DPF Framework Reference:** [workflow_to_pydpf operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/workflow_to_pydpf.md)

**Parameters:**

* **workflow**
* **output_path**
* **config**

**Example:**

```python
op = workflow_to_pydpf()

op = workflow_to_pydpf(workflow=my_workflow,output_path=my_output_path)
```

## Inputs

### workflow

**Type:** *LinkableInput*

### output_path

**Type:** *LinkableInput*

## Outputs

### pydpf_code

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
