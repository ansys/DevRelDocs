---
uid: Ans.DataProcessing.operators.logic.identical_fields
---

# identical_fields Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Check if two fields are identical.

available inputs: `fieldA` (Field), `fieldB` (Field), `double_value` (double) (optional), `double_tolerance` (double) (optional)

available outputs: `boolean` (bool), `message` (string)

## Example

```python
op = identical_fields()

op = identical_fields(fieldA=my_fieldA,fieldB=my_fieldB,double_value=my_double_value,double_tolerance=my_double_tolerance)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

### double_value

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

**Type:** *LinkableInput*

### double_tolerance

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
identical_fields()
```

#### Constructor

```python
identical_fields(fieldA, fieldB, double_value, double_tolerance, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `double_value` (*object*)
- `double_tolerance` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_fields(config)
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
