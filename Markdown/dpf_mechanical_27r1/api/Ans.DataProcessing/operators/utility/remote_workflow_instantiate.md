---
uid: Ans.DataProcessing.operators.utility.remote_workflow_instantiate
---

# *class* remote_workflow_instantiate(workflow_to_send: object = None, streams_to_remote: object = None, data_sources_to_remote: object = None, config: OperatorConfig = None)

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.

available inputs: `workflow_to_send` (Workflow, Int32), `streams_to_remote` (StreamsContainer), `data_sources_to_remote` (DataSources) (optional)

available outputs: `remote_workflow` (Workflow)

**DPF Framework Reference:** [remote_workflow_instantiate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/remote_workflow_instantiate.md)

**Parameters:**

* **workflow_to_send**
* **streams_to_remote**
* **data_sources_to_remote**
* **config**

**Example:**

```python
op = remote_workflow_instantiate()

op = remote_workflow_instantiate(workflow_to_send=my_workflow_to_send,streams_to_remote=my_streams_to_remote,data_sources_to_remote=my_data_sources_to_remote)
```

## Inputs

### workflow_to_send

local workflow to push to a remote or id of a remote workflow

**Type:** *LinkableInput*

### streams_to_remote

**Type:** *LinkableInput*

### data_sources_to_remote

**Type:** *LinkableInput*

## Outputs

### remote_workflow

remote workflow containing an image of the remote workflow and the protocols streams

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
