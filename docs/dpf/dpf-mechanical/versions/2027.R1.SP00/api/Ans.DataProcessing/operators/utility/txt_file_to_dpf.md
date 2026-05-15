---
uid: Ans.DataProcessing.operators.utility.txt_file_to_dpf
---

# *class* txt_file_to_dpf(input_string: object = None, config: OperatorConfig = None)

Take an input string and parse it into dataProcessing type

available inputs: `input_string` (string)

available outputs: `any_output1` (Any), `any_output2` (Any)

**DPF Framework Reference:** [txt_file_to_dpf operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/txt_file_to_dpf.md)

**Parameters:**

* **input_string**
* **config**

**Example:**

```python
op = txt_file_to_dpf()

op = txt_file_to_dpf(input_string=my_input_string)
```

## Inputs

### input_string

**Type:** *LinkableInput*

## Outputs

### any_output1

any output

**Type:** *LinkableOutput*

### any_output2

any output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
