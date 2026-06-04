---
uid: Ans.DataProcessing.operators.scoping.adapt_with_scopings_container
---

# adapt_with_scopings_container Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Rescopes/splits a fields container to correspond to a scopings container. Each field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped fields.

available inputs: `field_or_fields_container` (FieldsContainer, Field), `scopings_container` (ScopingsContainer), `keep_empty_fields` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = adapt_with_scopings_container()

op = adapt_with_scopings_container(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container,keep_empty_fields=my_keep_empty_fields)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_or_fields_container

Fields container to rescope, or a single field (which will be converted to a container)

**Type:** *LinkableInput*

### scopings_container

Container with target scopings for rescoping operations

**Type:** *LinkableInput*

### keep_empty_fields

Whether to keep fields that become empty after rescoping. Default is false.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with rescoped fields, combining labels from input fields and scopings

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
adapt_with_scopings_container()
```

#### Constructor

```python
adapt_with_scopings_container(field_or_fields_container, scopings_container, keep_empty_fields, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `scopings_container` (*object*)
- `keep_empty_fields` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
adapt_with_scopings_container(config)
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
