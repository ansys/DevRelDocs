---
uid: Ans.DataProcessing.operators.utility.extract_scoping
---

# extract_scoping Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Takes a field type object, mesh or a collection of them and extracts its scoping or scopings container.

available inputs: `field_or_fields_container` (Field, FieldsContainer, PropertyField, PropertyFieldsContainer, CustomTypeField, CustomTypeFieldsContainer, StringField, Scoping, ScopingsContainer, MeshedRegion, MeshesContainer) (optional), `requested_location` (Int32) (optional)

available outputs: `mesh_scoping` (Scoping ,ScopingsContainer)

## Example

```python
op = extract_scoping()

op = extract_scoping(field_or_fields_container=my_field_or_fields_container,requested_location=my_requested_location)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_or_fields_container

**Type:** *LinkableInput*

### requested_location

If input 0 is a mesh or a meshes_container, the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
extract_scoping()
```

#### Constructor

```python
extract_scoping(field_or_fields_container, requested_location, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_scoping(config)
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
