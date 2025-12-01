---
uid: Ans.DataProcessing.operators.math.norm_fc
---

# norm_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the element-wise L2 norm of the field elementary data. This process is applied on each field of the input fields container.   ///available inputs: fields_container (FieldsContainer), scalar_int (Int32) (optional)
            available outputs: fields_container (FieldsContainer)

norm_fc()
norm_fc(fields_container: object, scalar_int: object, config: OperatorConfig)
norm_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
norm_fc()
```

#### Constructor

```python
norm_fc(fields_container, scalar_int, config)
```

**Parameters:**

- `fields_container` (*object*)
- `scalar_int` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
norm_fc(config)
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
