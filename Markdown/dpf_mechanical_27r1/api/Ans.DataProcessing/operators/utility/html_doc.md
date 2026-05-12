---
uid: Ans.DataProcessing.operators.utility.html_doc
---

# *class* html_doc(output_path: object = None, exposure_level: object = None, config: OperatorConfig = None)

Create dpf's html documentation. Only on Windows.

available inputs: `output_path` (string) (optional), `exposure_level` (Int32) (optional)

available outputs:

**DPF Framework Reference:** [html_doc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/html_doc.md)

**Parameters:**

* **output_path**
* **exposure_level**
* **config**

**Example:**

```python
op = html_doc()

op = html_doc(output_path=my_output_path,exposure_level=my_exposure_level)
```

## Inputs

### output_path

default is {working directory}/dataProcessingDoc.html

**Type:** *LinkableInput*

### exposure_level

Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications.

**Type:** *LinkableInput*

## Outputs

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
