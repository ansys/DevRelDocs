---
uid: Ans.DataProcessing.operators.logic.identical_string_fields
---

# identical_string_fields Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Takes two string fields and compares them.

available inputs: `string_fieldA` (StringField), `string_fieldB` (StringField)

available outputs: `are_identical` (bool), `information` (string)

## Example

```python
op = identical_string_fields()

op = identical_string_fields(string_fieldA=my_string_fieldA,string_fieldB=my_string_fieldB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### string_fieldA

**Type:** *LinkableInput*

### string_fieldB

**Type:** *LinkableInput*

## Outputs

### are_identical

**Type:** *LinkableOutput*

### information

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
identical_string_fields()
```

#### Constructor

```python
identical_string_fields(string_fieldA, string_fieldB, config)
```

**Parameters:**

- `string_fieldA` (*object*)
- `string_fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_string_fields(config)
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
