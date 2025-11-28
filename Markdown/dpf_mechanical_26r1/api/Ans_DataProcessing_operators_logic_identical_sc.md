---
uid: Ans.DataProcessing.operators.logic.identical_sc
title: identical_sc
---

# identical_sc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Checks if two scopings_container are identical.   ///available inputs: scopings_containerA (ScopingsContainer), scopings_containerB (ScopingsContainer)
            available outputs: boolean (bool), message (string)

identical_sc()
identical_sc(scopings_containerA: object, scopings_containerB: object, config: OperatorConfig)
identical_sc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_sc()
```

#### Constructor

```python
identical_sc(scopings_containerA, scopings_containerB, config)
```

**Parameters:**

- `scopings_containerA` (*object*)
- `scopings_containerB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_sc(config)
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
