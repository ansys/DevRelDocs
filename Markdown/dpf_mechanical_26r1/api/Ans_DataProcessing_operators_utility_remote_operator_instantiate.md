---
uid: Ans.DataProcessing.operators.utility.remote_operator_instantiate
---

# remote_operator_instantiate Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Create a local image of an existing remote operator (identified by an id and an address) for a given protocol registered in the streams. A workflow is created with this operator and returned in output   ///available inputs: operator_to_send (Int32), output_pin (Int32), streams_to_remote (StreamsContainer), data_sources_to_remote (DataSources) (optional), output_name (string)
            available outputs: remote_workflow (Workflow)

remote_operator_instantiate()
remote_operator_instantiate(operator_to_send: object, output_pin: object, streams_to_remote: object, data_sources_to_remote: object, output_name: object, config: OperatorConfig)
remote_operator_instantiate(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
remote_operator_instantiate()
```

#### Constructor

```python
remote_operator_instantiate(operator_to_send, output_pin, streams_to_remote, data_sources_to_remote, output_name, config)
```

**Parameters:**

- `operator_to_send` (*object*)
- `output_pin` (*object*)
- `streams_to_remote` (*object*)
- `data_sources_to_remote` (*object*)
- `output_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remote_operator_instantiate(config)
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
