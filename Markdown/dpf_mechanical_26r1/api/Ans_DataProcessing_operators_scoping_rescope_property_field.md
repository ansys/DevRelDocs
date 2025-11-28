---
uid: Ans.DataProcessing.operators.scoping.rescope_property_field
title: rescope_property_field
---

# rescope_property_field Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Rescopes a property field on the given scoping. If an ID does not exist in the original property field, the default value (in 2) is used when defined.   ///available inputs: fields (PropertyFieldsContainer, PropertyField), mesh_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), default_value (Int32, IList int, System.Collections.IEnumerable) (optional)
            available outputs: fields (PropertyFieldsContainer ,PropertyField)

rescope_property_field()
rescope_property_field(fields: object, mesh_scoping: object, default_value: object, config: OperatorConfig)
rescope_property_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
rescope_property_field()
```

#### Constructor

```python
rescope_property_field(fields, mesh_scoping, default_value, config)
```

**Parameters:**

- `fields` (*object*)
- `mesh_scoping` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rescope_property_field(config)
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
