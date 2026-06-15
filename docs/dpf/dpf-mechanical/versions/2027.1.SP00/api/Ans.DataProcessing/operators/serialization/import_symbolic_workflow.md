---
uid: Ans.DataProcessing.operators.serialization.import_symbolic_workflow
---

# *class* import_symbolic_workflow(workflow_path: object = None, workflow_as_string: object = None, format: object = None, config: OperatorConfig = None)

Reads a file or string holding a Symbolic Workflow and instantiates a WorkFlow with its data. Pin 'workflow_path' refers to a file path, either as a string or as DataSources. Pin 'workflow_as_string' refers to the string representation of the workflow itself. Both pins are mutually exclusive.

available inputs: `workflow_path` (string, DataSources) (optional), `workflow_as_string` (string) (optional), `format` (Int32) (optional)

available outputs: `workflow` (Workflow)

**DPF Framework Reference:** [import_symbolic_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027.1.sp00/operator-specifications/serialization/import_symbolic_workflow.md)

**Parameters:**

* **workflow_path**
* **workflow_as_string**
* **format**
* **config**

**Example:**

```python
op = import_symbolic_workflow()

op = import_symbolic_workflow(workflow_path=my_workflow_path,workflow_as_string=my_workflow_as_string,format=my_format)
```

## Inputs

### workflow_path

File path (string) or DataSources pointing to a workflow file. Pin 'format' is used only if this pin is connected.

**Type:** *LinkableInput*

### string_or_path

Deprecated alias of: workflow_path

**Type:** *LinkableInput*

### workflow_as_string

String representation of the workflow as provided by the 'export_symbolic_workflow' operator with string output or the 'writeToString' Workflow API.

**Type:** *LinkableInput*

### format

-1 is auto-detection, 0 is ASCII format, 1 is binary, 2 is json, default is -1 (auto-detection).

**Type:** *LinkableInput*

## Outputs

### workflow

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
