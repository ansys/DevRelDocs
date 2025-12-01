---
uid: Ans.DataProcessing.operators.serialization.workflow_to_workflow_topology
---

# workflow_to_workflow_topology Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Creates a GenericDataContainer based on WorkflowTopology structure from a Workflow object, allowing to access its operators, operator connections, data connections, and exposed pins.   ///available inputs: workflow (Workflow)
            available outputs: workflow_topology (GenericDataContainer)

workflow_to_workflow_topology()
workflow_to_workflow_topology(workflow: object, config: OperatorConfig)
workflow_to_workflow_topology(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
workflow_to_workflow_topology()
```

#### Constructor

```python
workflow_to_workflow_topology(workflow, config)
```

**Parameters:**

- `workflow` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_to_workflow_topology(config)
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
