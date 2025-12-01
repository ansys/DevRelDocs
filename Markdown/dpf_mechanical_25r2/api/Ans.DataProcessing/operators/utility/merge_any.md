---
uid: Ans.DataProcessing.operators.utility.merge_any
---

# merge_any Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.   ///available inputs: any1 (object), any2 (object)
            available outputs: any (object)

merge_any()
merge_any(any1: object, any2: object, config: OperatorConfig)
merge_any(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_any()
```

#### Constructor

```python
merge_any(any1, any2, config)
```

**Parameters:**

- `any1` (*object*)
- `any2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_any(config)
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
