---
uid: Ans.DataProcessing.operators.scoping.rescope_custom_type_field
---

# rescope_custom_type_field Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Rescopes a custom type field on the given scoping. If an ID does not exist in the original custom type field, the default value (in 2) is used when defined.   ///available inputs: fields (CustomTypeFieldsContainer, CustomTypeField), mesh_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), default_value (CustomTypeFieldCustomTypeField) (optional)
            available outputs: fields (CustomTypeFieldsContainer ,CustomTypeField)

rescope_custom_type_field()
rescope_custom_type_field(fields: object, mesh_scoping: object, default_value: object, config: OperatorConfig)
rescope_custom_type_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
rescope_custom_type_field()
```

#### Constructor

```python
rescope_custom_type_field(fields, mesh_scoping, default_value, config)
```

**Parameters:**

- `fields` (*object*)
- `mesh_scoping` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rescope_custom_type_field(config)
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
