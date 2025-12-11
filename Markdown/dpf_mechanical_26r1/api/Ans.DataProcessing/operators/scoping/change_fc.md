---
uid: Ans.DataProcessing.operators.scoping.change_fc
---

# change_fc Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a fields container to correspond to a scopings container.

available inputs: `field_or_fields_container` (FieldsContainer, Field), `scopings_container` (ScopingsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = change_fc()

op = change_fc(field_or_fields_container=my_field_or_fields_container,scopings_container=my_scopings_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_or_fields_container

Field or fields container to rescope

**Type:** *LinkableInput*

### scopings_container

Scopings container for rescoping operation

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer rescoped according to scopings container (DEPRECATED - use adapt with scopings container)

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
change_fc()
```

#### Constructor

```python
change_fc(field_or_fields_container, scopings_container, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `scopings_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_fc(config)
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
