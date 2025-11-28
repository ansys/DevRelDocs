---
uid: Ans.DataProcessing.operators.serialization.data_tree_to_txt
title: data_tree_to_txt
---

# data_tree_to_txt Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Writes a txt file or string from a DataTree   ///available inputs: data_tree (DataTree), path (string) (optional)
            available outputs: data_sources (DataSources ,string)

data_tree_to_txt()
data_tree_to_txt(data_tree: object, path: object, config: OperatorConfig)
data_tree_to_txt(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
data_tree_to_txt()
```

#### Constructor

```python
data_tree_to_txt(data_tree, path, config)
```

**Parameters:**

- `data_tree` (*object*)
- `path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
data_tree_to_txt(config)
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
