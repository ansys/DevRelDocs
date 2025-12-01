---
uid: Ans.DataProcessing.operators.serialization.export_symbolic_workflow
---

# export_symbolic_workflow Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string   ///available inputs: workflow (Workflow), path (string) (optional), format (Int32) (optional), options (Int32) (optional)
            available outputs: data_sources (DataSources ,string)

export_symbolic_workflow()
export_symbolic_workflow(workflow: object, path: object, format: object, options: object, config: OperatorConfig)
export_symbolic_workflow(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
export_symbolic_workflow()
```

#### Constructor

```python
export_symbolic_workflow(workflow, path, format, options, config)
```

**Parameters:**

- `workflow` (*object*)
- `path` (*object*)
- `format` (*object*)
- `options` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
export_symbolic_workflow(config)
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
