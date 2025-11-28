---
uid: Ans.DataProcessing.operators.filter.field_high_pass_fc
---

# field_high_pass_fc Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

The high pass filter returns all the values above (but not equal to) the threshold value in input.   ///available inputs: fields_container (FieldsContainer), threshold (double, Field), both (bool) (optional)
            available outputs: fields_container (FieldsContainer)

field_high_pass_fc()
field_high_pass_fc(fields_container: object, threshold: object, both: object, config: OperatorConfig)
field_high_pass_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
field_high_pass_fc()
```

#### Constructor

```python
field_high_pass_fc(fields_container, threshold, both, config)
```

**Parameters:**

- `fields_container` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_high_pass_fc(config)
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
