---
uid: Ans.DataProcessing.operators.utility.merge_result_infos
---

# merge_result_infos Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of result information into a unique one.   ///available inputs: result_infos1 (ResultInfo), result_infos2 (ResultInfo)
            available outputs: merged_result_infos (ResultInfo)

merge_result_infos()
merge_result_infos(result_infos1: object, result_infos2: object, config: OperatorConfig)
merge_result_infos(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_result_infos()
```

#### Constructor

```python
merge_result_infos(result_infos1, result_infos2, config)
```

**Parameters:**

- `result_infos1` (*object*)
- `result_infos2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_result_infos(config)
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
