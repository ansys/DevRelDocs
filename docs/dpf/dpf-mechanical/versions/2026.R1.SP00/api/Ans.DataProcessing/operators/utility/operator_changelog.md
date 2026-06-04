---
uid: Ans.DataProcessing.operators.utility.operator_changelog
---

# operator_changelog Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

available inputs: `operator_name` (string)

available outputs: `changelog_gdc` (GenericDataContainer)

## Example

```python
op = operator_changelog()

op = operator_changelog(operator_name=my_operator_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### operator_name

Operator internal name.

**Type:** *LinkableInput*

## Outputs

### changelog_gdc

GenericDataContainer used to instantiate a Changelog.

**Type:** *LinkableOutput*

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
