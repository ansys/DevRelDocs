---
uid: Ans.DataProcessing.operators.utility.remote_operator_instantiate
---

# *class* remote_operator_instantiate(operator_to_send: object = None, output_pin: object = None, streams_to_remote: object = None, data_sources_to_remote: object = None, output_name: object = None, config: OperatorConfig = None)

Create a local image of an existing remote operator (identified by an id and an address) for a given protocol registered in the streams. A workflow is created with this operator and returned in output

available inputs: `operator_to_send` (Int32), `output_pin` (Int32), `streams_to_remote` (StreamsContainer), `data_sources_to_remote` (DataSources) (optional), `output_name` (string)

available outputs: `remote_workflow` (Workflow)

**DPF Framework Reference:** [remote_operator_instantiate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/remote_operator_instantiate.md)

**Parameters:**

* **operator_to_send**
* **output_pin**
* **streams_to_remote**
* **data_sources_to_remote**
* **output_name**
* **config**

**Example:**

```python
op = remote_operator_instantiate()

op = remote_operator_instantiate(operator_to_send=my_operator_to_send,output_pin=my_output_pin,streams_to_remote=my_streams_to_remote,data_sources_to_remote=my_data_sources_to_remote,output_name=my_output_name)
```

## Inputs

### operator_to_send

local workflow to push to a remote or id of a remote workflow

**Type:** *LinkableInput*

### output_pin

pin number of the output to name

**Type:** *LinkableInput*

### streams_to_remote

**Type:** *LinkableInput*

### data_sources_to_remote

**Type:** *LinkableInput*

### output_name

output's name of the workflow to return

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
