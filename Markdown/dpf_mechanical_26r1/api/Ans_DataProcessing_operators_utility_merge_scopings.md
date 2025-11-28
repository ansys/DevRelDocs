---
uid: Ans.DataProcessing.operators.utility.merge_scopings
title: merge_scopings
---

# merge_scopings Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of scopings into a unique one.   ///available inputs: scopings1 (Scoping, ScopingsContainer), scopings2 (Scoping, ScopingsContainer)
            available outputs: merged_scoping (Scoping)

merge_scopings()
merge_scopings(scopings1: object, scopings2: object, config: OperatorConfig)
merge_scopings(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_scopings()
```

#### Constructor

```python
merge_scopings(scopings1, scopings2, config)
```

**Parameters:**

- `scopings1` (*object*)
- `scopings2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_scopings(config)
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
