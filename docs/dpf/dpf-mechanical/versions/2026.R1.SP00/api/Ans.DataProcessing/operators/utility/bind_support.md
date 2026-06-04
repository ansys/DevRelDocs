---
uid: Ans.DataProcessing.operators.utility.bind_support
---

# bind_support Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Ties a support to a field.

available inputs: `field` (Field, FieldsContainer), `support` (MeshedRegion, AbstractFieldSupport)

available outputs: `field` (Field)

## Example

```python
op = bind_support()

op = bind_support(field=my_field,support=my_support)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### support

Meshed region or a support of the field

**Type:** *LinkableInput*

## Outputs

### field

Field with the attached support

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
bind_support()
```

#### Constructor

```python
bind_support(field, support, config)
```

**Parameters:**

- `field` (*object*)
- `support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
bind_support(config)
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
