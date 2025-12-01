---
uid: Ans.DataProcessing.operators.utility.merge_scopings_containers
---

# merge_scopings_containers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of scopings containers into a unique one.   ///available inputs: scopings_containers1 (ScopingsContainer), scopings_containers2 (ScopingsContainer)
            available outputs: merged_scopings_container (ScopingsContainer)

merge_scopings_containers()
merge_scopings_containers(scopings_containers1: object, scopings_containers2: object, config: OperatorConfig)
merge_scopings_containers(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_scopings_containers()
```

#### Constructor

```python
merge_scopings_containers(scopings_containers1, scopings_containers2, config)
```

**Parameters:**

- `scopings_containers1` (*object*)
- `scopings_containers2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_scopings_containers(config)
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
