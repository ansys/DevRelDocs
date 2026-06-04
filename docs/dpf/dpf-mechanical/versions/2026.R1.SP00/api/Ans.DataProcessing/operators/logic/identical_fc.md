---
uid: Ans.DataProcessing.operators.logic.identical_fc
---

# identical_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Checks if two fields_container are identical.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `small_value` (double) (optional), `tolerance` (double) (optional)

available outputs: `boolean` (bool), `message` (string)

## Example

```python
op = identical_fc()

op = identical_fc(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,small_value=my_small_value,tolerance=my_tolerance)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### small_value

Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

**Type:** *LinkableInput*

### tolerance

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

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
