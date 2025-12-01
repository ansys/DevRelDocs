---
uid: Ans.DataProcessing.operators.result.torque
---

# torque Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Compute torque of a force based on a 3D point.

available inputs: `fields_container` (FieldsContainer), `field` (Field)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = torque()

op = torque(fields_container=my_fields_container,field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### field

field

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
torque()
```

#### Constructor

```python
torque(fields_container, field, config)
```

**Parameters:**

- `fields_container` (*object*)
- `field` (*object*)
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
