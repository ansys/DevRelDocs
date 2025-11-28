---
uid: Ans.DataProcessing.operators.utility.merge_supports
title: merge_supports
---

# merge_supports Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of supports into a unique one.   ///available inputs: should_merge_named_selections (bool) (optional), supports1 (AbstractFieldSupport), supports2 (AbstractFieldSupport)
            available outputs: merged_support (AbstractFieldSupport)

merge_supports()
merge_supports(should_merge_named_selections: object, supports1: object, supports2: object, config: OperatorConfig)
merge_supports(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_supports()
```

#### Constructor

```python
merge_supports(should_merge_named_selections, supports1, supports2, config)
```

**Parameters:**

- `should_merge_named_selections` (*object*)
- `supports1` (*object*)
- `supports2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_supports(config)
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
