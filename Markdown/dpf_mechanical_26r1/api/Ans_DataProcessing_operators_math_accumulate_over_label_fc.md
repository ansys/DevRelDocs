---
uid: Ans.DataProcessing.operators.math.accumulate_over_label_fc
title: accumulate_over_label_fc
---

# accumulate_over_label_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Compute the component-wise sum over all the fields that have the same ID as the label set as input in the fields container. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.   ///available inputs: fields_container (FieldsContainer), label (string) (optional)
            available outputs: field (Field)

accumulate_over_label_fc()
accumulate_over_label_fc(fields_container: object, label: object, config: OperatorConfig)
accumulate_over_label_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
accumulate_over_label_fc()
```

#### Constructor

```python
accumulate_over_label_fc(fields_container, label, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulate_over_label_fc(config)
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
