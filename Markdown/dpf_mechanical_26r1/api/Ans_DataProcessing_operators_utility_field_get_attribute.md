---
uid: Ans.DataProcessing.operators.utility.field_get_attribute
title: field_get_attribute
---

# field_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Gets a property from an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 are expected as inputs   ///available inputs: field (Field, FieldsContainer), property_name (string)
            available outputs: property (string ,TimeFreqSupport ,Scoping ,DataTree)

field_get_attribute()
field_get_attribute(field: object, property_name: object, config: OperatorConfig)
field_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
field_get_attribute()
```

#### Constructor

```python
field_get_attribute(field, property_name, config)
```

**Parameters:**

- `field` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_get_attribute(config)
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
