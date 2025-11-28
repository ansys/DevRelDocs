---
uid: Ans.DataProcessing.operators.utility.incremental_concatenate_as_fc
title: incremental_concatenate_as_fc
---

# incremental_concatenate_as_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Assemble fields in a fields container.   ///available inputs: field (Field), label (LabelSpace) (optional)
            available outputs: output (FieldsContainer)

incremental_concatenate_as_fc()
incremental_concatenate_as_fc(field: object, label: object, config: OperatorConfig)
incremental_concatenate_as_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
incremental_concatenate_as_fc()
```

#### Constructor

```python
incremental_concatenate_as_fc(field, label, config)
```

**Parameters:**

- `field` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
incremental_concatenate_as_fc(config)
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
