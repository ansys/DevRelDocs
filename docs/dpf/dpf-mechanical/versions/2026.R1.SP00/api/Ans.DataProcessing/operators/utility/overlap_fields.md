---
uid: Ans.DataProcessing.operators.utility.overlap_fields
---

# overlap_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Take two fields and superpose them, the overlapping field will override values of base_field.

available inputs: `base_field` (Field) (optional), `overlapping_field` (Field) (optional)

available outputs: `field` (Field)

## Example

```python
op = overlap_fields()

op = overlap_fields(base_field=my_base_field,overlapping_field=my_overlapping_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### base_field

**Type:** *LinkableInput*

### overlapping_field

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
overlap_fields()
```

#### Constructor

```python
overlap_fields(base_field, overlapping_field, config)
```

**Parameters:**

- `base_field` (*object*)
- `overlapping_field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
overlap_fields(config)
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
