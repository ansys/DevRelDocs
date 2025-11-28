---
uid: Ans.DataProcessing.operators.utility.ints_to_scoping
---

# ints_to_scoping Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Creates a scoping from integer data. Converts single integers, integer vectors, or existing scopings into a properly formatted DPF scoping.   ///available inputs: ids (Int32, IList int, Scoping, System.Collections.IEnumerable), location (string) (optional), upper_bound (Int32, Scoping) (optional)
            available outputs: scoping (Scoping)

ints_to_scoping()
ints_to_scoping(ids: object, location: object, upper_bound: object, config: OperatorConfig)
ints_to_scoping(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
ints_to_scoping()
```

#### Constructor

```python
ints_to_scoping(ids, location, upper_bound, config)
```

**Parameters:**

- `ids` (*object*)
- `location` (*object*)
- `upper_bound` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ints_to_scoping(config)
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
