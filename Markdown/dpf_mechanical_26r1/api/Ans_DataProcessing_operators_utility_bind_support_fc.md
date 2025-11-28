---
uid: Ans.DataProcessing.operators.utility.bind_support_fc
title: bind_support_fc
---

# bind_support_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Ties a support to a fields container.   ///available inputs: fields_container (FieldsContainer), support (MeshedRegion, AbstractFieldSupport, TimeFreqSupport)
            available outputs: fields_container (FieldsContainer)

bind_support_fc()
bind_support_fc(fields_container: object, support: object, config: OperatorConfig)
bind_support_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
bind_support_fc()
```

#### Constructor

```python
bind_support_fc(fields_container, support, config)
```

**Parameters:**

- `fields_container` (*object*)
- `support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
bind_support_fc(config)
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
