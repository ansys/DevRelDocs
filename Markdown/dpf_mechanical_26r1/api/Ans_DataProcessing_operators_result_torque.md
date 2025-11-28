---
uid: Ans.DataProcessing.operators.result.torque
title: torque
---

# torque Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Compute torque of a force based on a 3D point.   ///available inputs: fields_container (FieldsContainer), spoint (Field, FieldsContainer)
            available outputs: fields_container (FieldsContainer)

torque()
torque(fields_container: object, spoint: object, config: OperatorConfig)
torque(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
torque()
```

#### Constructor

```python
torque(fields_container, spoint, config)
```

**Parameters:**

- `fields_container` (*object*)
- `spoint` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
torque(config)
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
