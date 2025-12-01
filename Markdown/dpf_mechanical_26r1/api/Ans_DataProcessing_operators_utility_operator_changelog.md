---
uid: Ans.DataProcessing.operators.utility.operator_changelog
---

# operator_changelog Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.   ///available inputs: operator_name (string)
            available outputs: changelog_gdc (GenericDataContainer)

operator_changelog()
operator_changelog(operator_name: object, config: OperatorConfig)
operator_changelog(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
operator_changelog()
```

#### Constructor

```python
operator_changelog(operator_name, config)
```

**Parameters:**

- `operator_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
operator_changelog(config)
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
