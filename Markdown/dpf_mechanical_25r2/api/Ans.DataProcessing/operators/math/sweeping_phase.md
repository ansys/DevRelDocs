---
uid: Ans.DataProcessing.operators.math.sweeping_phase
---

# sweeping_phase Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4).

available inputs: `real_field` (Field, FieldsContainer), `imaginary_field` (Field, FieldsContainer), `angle` (double), `unit_name` (string) (optional), `abs_value` (bool), `imaginary_part_null` (bool)

available outputs: `field` (Field)

## Example

```python
op = sweeping_phase()

op = sweeping_phase(real_field=my_real_field,imaginary_field=my_imaginary_field,angle=my_angle,unit_name=my_unit_name,abs_value=my_abs_value,imaginary_part_null=my_imaginary_part_null)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### real_field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### imaginary_field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### angle

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

**Type:** *LinkableInput*

### imaginary_part_null

If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false).

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
sweeping_phase()
```

#### Constructor

```python
sweeping_phase(real_field, imaginary_field, angle, unit_name, abs_value, imaginary_part_null, config)
```

**Parameters:**

- `real_field` (*object*)
- `imaginary_field` (*object*)
- `angle` (*object*)
- `unit_name` (*object*)
- `abs_value` (*object*)
- `imaginary_part_null` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sweeping_phase(config)
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
