---
uid: Ans.DataProcessing.operators.math.accumulate_fc
---

# accumulate_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Sums all the elementary data of a field to produce one elementary data point.   ///available inputs: fields_container (FieldsContainer), weights (Field) (optional), time_scoping (Scoping) (optional)
            available outputs: fields_container (FieldsContainer)

accumulate_fc()
accumulate_fc(fields_container: object, weights: object, time_scoping: object, config: OperatorConfig)
accumulate_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
accumulate_fc()
```

#### Constructor

```python
accumulate_fc(fields_container, weights, time_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `weights` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulate_fc(config)
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
