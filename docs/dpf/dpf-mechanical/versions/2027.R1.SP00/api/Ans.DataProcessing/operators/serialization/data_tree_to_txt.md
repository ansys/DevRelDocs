---
uid: Ans.DataProcessing.operators.serialization.data_tree_to_txt
---

# *class* data_tree_to_txt(data_tree: object = None, path: object = None, config: OperatorConfig = None)

Writes a txt file or string from a DataTree

available inputs: `data_tree` (DataTree), `path` (string) (optional)

available outputs: `data_sources` (DataSources ,string)

**DPF Framework Reference:** [data_tree_to_txt operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/data_tree_to_txt.md)

**Parameters:**

* **data_tree**
* **path**
* **config**

**Example:**

```python
op = data_tree_to_txt()

op = data_tree_to_txt(data_tree=my_data_tree,path=my_path)
```

## Inputs

### data_tree

**Type:** *LinkableInput*

### path

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
