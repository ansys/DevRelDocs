---
uid: Ans.DataProcessing.operators.serialization.export_symbolic_workflow
---

# *class* export_symbolic_workflow(workflow: object = None, path: object = None, format: object = None, options: object = None, config: OperatorConfig = None)

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string

available inputs: `workflow` (Workflow), `path` (string) (optional), `format` (Int32) (optional), `options` (Int32) (optional)

available outputs: `data_sources` (DataSources ,string)

**DPF Framework Reference:** [export_symbolic_workflow operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/export_symbolic_workflow.md)

**Parameters:**

* **workflow**
* **path**
* **format**
* **options**
* **config**

**Example:**

```python
op = export_symbolic_workflow()

op = export_symbolic_workflow(workflow=my_workflow,path=my_path,format=my_format,options=my_options)
```

## Inputs

### workflow

**Type:** *LinkableInput*

### path

**Type:** *LinkableInput*

### format

0 is ASCII format and 1 is binary, default is 0.

**Type:** *LinkableInput*

### options

1 copies connections with its data, 2 forwards named inputs and outputs names, 7 copies connections of named inputs and ouputs with their data. default is 7.

**Type:** *LinkableInput*

## Outputs

### data_sources

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
