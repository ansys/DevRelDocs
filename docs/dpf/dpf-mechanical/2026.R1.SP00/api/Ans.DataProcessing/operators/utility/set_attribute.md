---
uid: Ans.DataProcessing.operators.utility.set_attribute
---

# set_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Uses the FieldsContainer APIs to modify it.

available inputs: `fields_container` (FieldsContainer), `property_name` (string), `property_identifier` (LabelSpace) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = set_attribute()

op = set_attribute(fields_container=my_fields_container,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### property_name

Supported property names are: "labels".

**Type:** *LinkableInput*

### property_identifier

Value of the property to be set : vector of string or LabelSpace for "labels".

**Type:** *LinkableInput*

## Outputs

### fields_container

Returns the modified FieldsContainer.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
set_attribute()
```

#### Constructor

```python
set_attribute(fields_container, property_name, property_identifier, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
set_attribute(config)
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
