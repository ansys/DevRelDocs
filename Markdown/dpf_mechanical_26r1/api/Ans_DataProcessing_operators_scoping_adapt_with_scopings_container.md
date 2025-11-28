---
uid: Ans.DataProcessing.operators.scoping.adapt_with_scopings_container
title: adapt_with_scopings_container
---

# adapt_with_scopings_container Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Rescopes/splits a fields container to correspond to a scopings container. Each field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped fields.   ///available inputs: field_or_fields_container (FieldsContainer, Field), scopings_container (ScopingsContainer), keep_empty_fields (bool) (optional)
            available outputs: fields_container (FieldsContainer)

adapt_with_scopings_container()
adapt_with_scopings_container(field_or_fields_container: object, scopings_container: object, keep_empty_fields: object, config: OperatorConfig)
adapt_with_scopings_container(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
