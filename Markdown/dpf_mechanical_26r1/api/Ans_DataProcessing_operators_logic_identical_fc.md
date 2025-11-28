---
uid: Ans.DataProcessing.operators.logic.identical_fc
---

# identical_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Checks if two fields_container are identical.   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer), small_value (double) (optional), tolerance (double) (optional)
            available outputs: boolean (bool), message (string)

identical_fc()
identical_fc(fields_containerA: object, fields_containerB: object, small_value: object, tolerance: object, config: OperatorConfig)
identical_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_fc()
```

#### Constructor

```python
identical_fc(fields_containerA, fields_containerB, small_value, tolerance, config)
```

**Parameters:**

- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `small_value` (*object*)
- `tolerance` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_fc(config)
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
