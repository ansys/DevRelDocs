---
uid: Ans.DataProcessing.operators.utility.cyclic_support_get_attribute
title: cyclic_support_get_attribute
---

# cyclic_support_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.   ///available inputs: cyclic_support (CyclicSupport), property_name (string)
            available outputs: property (string ,Int32)

cyclic_support_get_attribute()
cyclic_support_get_attribute(cyclic_support: object, property_name: object, config: OperatorConfig)
cyclic_support_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cyclic_support_get_attribute()
```

#### Constructor

```python
cyclic_support_get_attribute(cyclic_support, property_name, config)
```

**Parameters:**

- `cyclic_support` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cyclic_support_get_attribute(config)
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
