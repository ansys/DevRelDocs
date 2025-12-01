---
uid: Ans.DataProcessing.operators.utility.bind_support
---

# bind_support Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Ties a support to a field.   ///available inputs: field (Field, FieldsContainer), support (MeshedRegion, AbstractFieldSupport)
            available outputs: field (Field)

bind_support()
bind_support(field: object, support: object, config: OperatorConfig)
bind_support(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
bind_support()
```

#### Constructor

```python
bind_support(field, support, config)
```

**Parameters:**

- `field` (*object*)
- `support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
bind_support(config)
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
