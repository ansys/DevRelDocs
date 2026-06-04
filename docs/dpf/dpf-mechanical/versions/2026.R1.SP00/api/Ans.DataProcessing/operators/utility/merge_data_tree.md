---
uid: Ans.DataProcessing.operators.utility.merge_data_tree
---

# merge_data_tree Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

available inputs: `data_tree1` (DataTree), `data_tree2` (DataTree)

available outputs: `any` (object)

## Example

```python
op = merge_data_tree()

op = merge_data_tree(data_tree1=my_data_tree1,data_tree2=my_data_tree2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_tree1

Either a vector of data trees or data trees from pin 0 to ... to merge.

**Type:** *LinkableInput*

### data_tree2

Either a vector of data trees or data trees from pin 0 to ... to merge.

**Type:** *LinkableInput*

## Outputs

### any

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_data_tree()
```

#### Constructor

```python
merge_data_tree(data_tree1, data_tree2, config)
```

**Parameters:**

- `data_tree1` (*object*)
- `data_tree2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_data_tree(config)
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
