---
uid: Ans.DataProcessing.operators.utility.remote_workflow_instantiate
---

# remote_workflow_instantiate Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.

available inputs: `workflow_to_send` (Workflow, Int32), `streams_to_remote` (StreamsContainer), `data_sources_to_remote` (DataSources) (optional)

available outputs: `remote_workflow` (Workflow)

## Example

```python
op = remote_workflow_instantiate()

op = remote_workflow_instantiate(workflow_to_send=my_workflow_to_send,streams_to_remote=my_streams_to_remote,data_sources_to_remote=my_data_sources_to_remote)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
remote_workflow_instantiate()
```

#### Constructor

```python
remote_workflow_instantiate(workflow_to_send, streams_to_remote, data_sources_to_remote, config)
```

**Parameters:**

- `workflow_to_send` (*object*)
- `streams_to_remote` (*object*)
- `data_sources_to_remote` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remote_workflow_instantiate(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
