---
uid: Ans.DataProcessing.operators.serialization.import_symbolic_workflow
---

# *class* import_symbolic_workflow(string_or_path: object = None, format: object = None, config: OperatorConfig = None)

Reads a file or string holding a Symbolic Workflow and instantiate a WorkFlow with its data.

available inputs: `string_or_path` (string, DataSources), `format` (Int32) (optional)

available outputs: `workflow` (Workflow)

**DPF Framework Reference:** [import_symbolic_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/import_symbolic_workflow.md)

**Parameters:**

* **string_or_path**
* **format**
* **config**

**Example:**

```python
op = import_symbolic_workflow()

op = import_symbolic_workflow(string_or_path=my_string_or_path,format=my_format)
```

## Inputs

### string_or_path

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
