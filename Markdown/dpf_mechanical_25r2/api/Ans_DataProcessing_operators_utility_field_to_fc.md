---
uid: Ans.DataProcessing.operators.utility.field_to_fc
---

# field_to_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Creates a fields container containing the field provided on pin 0.   ///available inputs: field (Field, FieldsContainer), label (LabelSpace)
            available outputs: fields_container (FieldsContainer)

field_to_fc()
field_to_fc(field: object, label: object, config: OperatorConfig)
field_to_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
field_to_fc()
```

#### Constructor

```python
field_to_fc(field, label, config)
```

**Parameters:**

- `field` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_to_fc(config)
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
