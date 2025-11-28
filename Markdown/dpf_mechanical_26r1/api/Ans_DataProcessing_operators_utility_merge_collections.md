---
uid: Ans.DataProcessing.operators.utility.merge_collections
title: merge_collections
---

# merge_collections Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Merges a set of collections into a unique one.   ///available inputs: collections1 (AnyCollection), collections2 (AnyCollection)
            available outputs: merged_collections (AnyCollection)

merge_collections()
merge_collections(collections1: object, collections2: object, config: OperatorConfig)
merge_collections(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_collections()
```

#### Constructor

```python
merge_collections(collections1, collections2, config)
```

**Parameters:**

- `collections1` (*object*)
- `collections2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_collections(config)
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
