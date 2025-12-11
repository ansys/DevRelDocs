---
uid: Ans.DataProcessing.operators.math.sweeping_phase_fc
---

# sweeping_phase_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4). An output field is computed for each pair of real and imaginary fields in the input fields_container as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).

available inputs: `fields_container` (FieldsContainer), `angle` (double), `unit_name` (string) (optional), `abs_value` (bool)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = sweeping_phase_fc()

op = sweeping_phase_fc(fields_container=my_fields_container,angle=my_angle,unit_name=my_unit_name,abs_value=my_abs_value)
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

### angle

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
sweeping_phase_fc()
```

#### Constructor

```python
sweeping_phase_fc(fields_container, angle, unit_name, abs_value, config)
```

**Parameters:**

- `fields_container` (*object*)
- `angle` (*object*)
- `unit_name` (*object*)
- `abs_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sweeping_phase_fc(config)
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
