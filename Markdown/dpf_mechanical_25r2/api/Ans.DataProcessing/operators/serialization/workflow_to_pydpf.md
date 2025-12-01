---
uid: Ans.DataProcessing.operators.serialization.workflow_to_pydpf
---

# workflow_to_pydpf Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Generates a PyDPF script that can recreate the given workflow.
            The script is returned as a string, and can optionally be saved to a specified path.   ///available inputs: workflow (Workflow), output_path (string) (optional)
            available outputs: pydpf_code (string)

workflow_to_pydpf()
workflow_to_pydpf(workflow: object, output_path: object, config: OperatorConfig)
workflow_to_pydpf(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
workflow_to_pydpf()
```

#### Constructor

```python
workflow_to_pydpf(workflow, output_path, config)
```

**Parameters:**

- `workflow` (*object*)
- `output_path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_to_pydpf(config)
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
