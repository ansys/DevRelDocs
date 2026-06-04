---
uid: Ans.DataProcessing.operators.serialization.json_to_data_tree
---

# json_to_data_tree Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Reads a json file or string to a DataTree

available inputs: `string_or_path` (string, DataSources)

available outputs: `data_tree` (DataTree)

## Example

```python
op = json_to_data_tree()

op = json_to_data_tree(string_or_path=my_string_or_path)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### string_or_path

**Type:** *LinkableInput*

## Outputs

### data_tree

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
json_to_data_tree()
```

#### Constructor

```python
json_to_data_tree(string_or_path, config)
```

**Parameters:**

- `string_or_path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
json_to_data_tree(config)
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
