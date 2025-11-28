---
uid: Ans.DataProcessing.operators.utility.set_property
title: set_property
---

# set_property Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Sets a property to an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 and a valid property value in pin 2 are expected as inputs   ///available inputs: field (Field, FieldsContainer), property_name (string), property (string, TimeFreqSupport, Scoping, DataTree, Int32, double)
            available outputs: field (Field ,FieldsContainer)

set_property()
set_property(field: object, property_name: object, property: object, config: OperatorConfig)
set_property(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
