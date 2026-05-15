---
uid: Ans.DataProcessing.operators.utility.propertyfield_get_attribute
---

# propertyfield_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs

available inputs: `property_field` (PropertyField, PropertyFieldsContainer), `property_name` (string)

available outputs: `property` (string ,TimeFreqSupport ,Scoping ,DataTree)

## Example

```python
op = propertyfield_get_attribute()

op = propertyfield_get_attribute(property_field=my_property_field,property_name=my_property_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### property_field

**Type:** *LinkableInput*

### property_name

Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping' and 'header'.

**Type:** *LinkableInput*

## Outputs

### property

Property value that is returned. Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
propertyfield_get_attribute()
```

#### Constructor

```python
propertyfield_get_attribute(property_field, property_name, config)
```

**Parameters:**

- `property_field` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
propertyfield_get_attribute(config)
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
