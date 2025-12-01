---
uid: Ans.DataProcessing.operators.utility.incremental.merge.property_field
---

# property_field Class

**Namespace:** [Ans.DataProcessing.operators.utility.incremental.merge](Ans_DataProcessing_operators_utility_incremental_merge.md)

## Summary

Incrementaly merge the input.

available inputs: `input` (PropertyField)

available outputs: `incremented_result` (object)

## Example

```python
op = property_field()

op = property_field(input=my_input)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility.incremental.merge` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### input

**Type:** *LinkableInput*

## Outputs

### incremented_result

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
property_field()
```

#### Constructor

```python
property_field(input, config)
```

**Parameters:**

- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
property_field(config)
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
