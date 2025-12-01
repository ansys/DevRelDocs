---
uid: Ans.DataProcessing.operators.scoping.rescope_custom_type_field
---

# rescope_custom_type_field Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Rescopes a custom type field on the given scoping. If an ID does not exist in the original custom type field, the default value (in 2) is used when defined.

available inputs: `fields` (CustomTypeFieldsContainer, CustomTypeField), `mesh_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `default_value` (CustomTypeFieldCustomTypeField) (optional)

available outputs: `fields` (CustomTypeFieldsContainer ,CustomTypeField)

## Example

```python
op = rescope_custom_type_field()

op = rescope_custom_type_field(fields=my_fields,mesh_scoping=my_mesh_scoping,default_value=my_default_value)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### default_value

If pin 2 is used, the IDs not found in the custom type field are added with this default value.

**Type:** *LinkableInput*

## Outputs

### fields

**Type:** *LinkableOutput*

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
