---
uid: Ans.DataProcessing.operators.utility.html_doc
title: html_doc
---

# html_doc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Create dpf's html documentation. Only on Windows.   ///available inputs: output_path (string) (optional), exposure_level (Int32) (optional)
            available outputs:

html_doc()
html_doc(output_path: object, exposure_level: object, config: OperatorConfig)
html_doc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Documentation_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
html_doc()
```

#### Constructor

```python
html_doc(output_path, exposure_level, config)
```

**Parameters:**

- `output_path` (*object*)
- `exposure_level` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
html_doc(config)
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
