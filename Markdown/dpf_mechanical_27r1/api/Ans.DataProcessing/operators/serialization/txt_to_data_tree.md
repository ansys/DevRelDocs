---
uid: Ans.DataProcessing.operators.serialization.txt_to_data_tree
---

# *class* txt_to_data_tree(string_or_path: object = None, config: OperatorConfig = None)

Reads a txt file or string to a DataTree

available inputs: `string_or_path` (string, DataSources)

available outputs: `data_tree` (DataTree)

**DPF Framework Reference:** [txt_to_data_tree operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/txt_to_data_tree.md)

**Parameters:**

* **string_or_path**
* **config**

**Example:**

```python
op = txt_to_data_tree()

op = txt_to_data_tree(string_or_path=my_string_or_path)
```

## Inputs

### string_or_path

**Type:** *LinkableInput*

## Outputs

### data_tree

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
