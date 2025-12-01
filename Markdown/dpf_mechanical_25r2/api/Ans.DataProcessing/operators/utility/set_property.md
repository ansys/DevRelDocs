---
uid: Ans.DataProcessing.operators.utility.set_property
---

# set_property Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Sets a property to an input field/field container.

available inputs: `field` (Field, FieldsContainer), `property_name` (string), `property_value` (string, Int32, double)

available outputs: `field` (Field ,FieldsContainer)

## Example

```python
op = set_property()

op = set_property(field=my_field,property_name=my_property_name,property_value=my_property_value)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

**Type:** *LinkableInput*

### property_name

Property to set

**Type:** *LinkableInput*

### property_value

Property to set

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
set_property()
```

#### Constructor

```python
set_property(field, property_name, property_value, config)
```

**Parameters:**

- `field` (*object*)
- `property_name` (*object*)
- `property_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
set_property(config)
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
