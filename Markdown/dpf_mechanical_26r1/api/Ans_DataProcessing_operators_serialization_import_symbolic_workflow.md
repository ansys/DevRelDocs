---
uid: Ans.DataProcessing.operators.serialization.import_symbolic_workflow
---

# import_symbolic_workflow Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Reads a file or string holding a Symbolic Workflow and instantiate a WorkFlow with its data.   ///available inputs: string_or_path (string, DataSources), format (Int32) (optional)
            available outputs: workflow (Workflow)

import_symbolic_workflow()
import_symbolic_workflow(string_or_path: object, format: object, config: OperatorConfig)
import_symbolic_workflow(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
import_symbolic_workflow()
```

#### Constructor

```python
import_symbolic_workflow(string_or_path, format, config)
```

**Parameters:**

- `string_or_path` (*object*)
- `format` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
import_symbolic_workflow(config)
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
