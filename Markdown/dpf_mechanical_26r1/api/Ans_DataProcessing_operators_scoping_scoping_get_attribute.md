---
uid: Ans.DataProcessing.operators.scoping.scoping_get_attribute
title: scoping_get_attribute
---

# scoping_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Uses the Scoping APIs to return a given attribute of the scoping in input.   ///available inputs: scoping (Scoping), property_name (string)
            available outputs: property (IList int  ,string ,System.Collections.IEnumerable)

scoping_get_attribute()
scoping_get_attribute(scoping: object, property_name: object, config: OperatorConfig)
scoping_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
scoping_get_attribute()
```

#### Constructor

```python
scoping_get_attribute(scoping, property_name, config)
```

**Parameters:**

- `scoping` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scoping_get_attribute(config)
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
