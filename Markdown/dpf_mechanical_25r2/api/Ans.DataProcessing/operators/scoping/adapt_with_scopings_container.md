---
uid: Ans.DataProcessing.operators.scoping.adapt_with_scopings_container
---

# adapt_with_scopings_container Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Rescopes/splits a fields container to correspond to a scopings container.   ///available inputs: field_or_fields_container (FieldsContainer, Field), scopings_container (ScopingsContainer)
            available outputs: fields_container (FieldsContainer)

adapt_with_scopings_container()
adapt_with_scopings_container(field_or_fields_container: object, scopings_container: object, config: OperatorConfig)
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
adapt_with_scopings_container(field_or_fields_container, scopings_container, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `scopings_container` (*object*)
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
