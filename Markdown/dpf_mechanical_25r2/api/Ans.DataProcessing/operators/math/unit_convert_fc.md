---
uid: Ans.DataProcessing.operators.math.unit_convert_fc
---

# unit_convert_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Converts an input fields container of a given unit to another unit.

available inputs: `fields_container` (FieldsContainer), `unit_name` (string)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = unit_convert_fc()

op = unit_convert_fc(fields_container=my_fields_container,unit_name=my_unit_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### unit_name

unit as a string, ex 'm' for meter, 'Pa' for pascal,...

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
unit_convert_fc()
```

#### Constructor

```python
unit_convert_fc(fields_container, unit_name, config)
```

**Parameters:**

- `fields_container` (*object*)
- `unit_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
unit_convert_fc(config)
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
