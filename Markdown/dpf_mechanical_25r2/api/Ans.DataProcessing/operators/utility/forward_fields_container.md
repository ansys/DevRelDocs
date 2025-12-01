---
uid: Ans.DataProcessing.operators.utility.forward_fields_container
---

# forward_fields_container Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Returns the input field or fields container.

available inputs: `fields` (FieldsContainer, Field)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = forward_fields_container()

op = forward_fields_container(fields=my_fields)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
forward_fields_container()
```

#### Constructor

```python
forward_fields_container(fields, config)
```

**Parameters:**

- `fields` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
forward_fields_container(config)
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
