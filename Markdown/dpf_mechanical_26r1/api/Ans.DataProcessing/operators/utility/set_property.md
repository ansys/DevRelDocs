---
uid: Ans.DataProcessing.operators.utility.set_property
---

# set_property Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Sets a property to an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 and a valid property value in pin 2 are expected as inputs

available inputs: `field` (Field, FieldsContainer), `property_name` (string), `property` (string, TimeFreqSupport, Scoping, DataTree, Int32, double)

available outputs: `field` (Field ,FieldsContainer)

## Example

```python
op = set_property()

op = set_property(field=my_field,property_name=my_property_name,property=my_property)
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

Property to set. Accepted inputs are specific strings namely: 'unit', 'name', 'time_freq_support', 'scoping', 'header'.

**Type:** *LinkableInput*

### property

Property Value to set. Accepted inputs on this pin are: CTimeFreqSupport, CScoping, DataTree, int, double, string.

**Type:** *LinkableInput*

## Outputs

### field

Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
set_property()
```

#### Constructor

```python
set_property(field, property_name, property, config)
```

**Parameters:**

- `field` (*object*)
- `property_name` (*object*)
- `property` (*object*)
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
