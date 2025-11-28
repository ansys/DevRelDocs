---
uid: Ans.DataProcessing.operators.utility.merge_property_fields
title: merge_property_fields
---

# merge_property_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assembles a set of property fields into a unique one.   ///available inputs: naive_merge (bool), property_fields1 (PropertyField, PropertyFieldsContainer), property_fields2 (PropertyField, PropertyFieldsContainer)
            available outputs: property_field (PropertyField)

merge_property_fields()
merge_property_fields(naive_merge: object, property_fields1: object, property_fields2: object, config: OperatorConfig)
merge_property_fields(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_property_fields()
```

#### Constructor

```python
merge_property_fields(naive_merge, property_fields1, property_fields2, config)
```

**Parameters:**

- `naive_merge` (*object*)
- `property_fields1` (*object*)
- `property_fields2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_property_fields(config)
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
