---
uid: Ans.DataProcessing.operators.utility.html_doc
---

# html_doc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Create dpf's html documentation. Only on Windows.

available inputs: `output_path` (string) (optional), `exposure_level` (Int32) (optional)

available outputs:

## Example

```python
op = html_doc()

op = html_doc(output_path=my_output_path,exposure_level=my_exposure_level)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Documentation_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### output_path

default is {working directory}/dataProcessingDoc.html

**Type:** *LinkableInput*

### exposure_level

Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications.

**Type:** *LinkableInput*

## Outputs

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
