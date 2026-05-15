---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt
---

# strain_from_voigt Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Converts strain field data from Voigt notation (6-component vector) to standard symmetric matrix format (3x3 tensor).

available inputs: `strain_field` (Field, FieldsContainer)

available outputs: `field` (Field)

## Example

```python
op = strain_from_voigt()

op = strain_from_voigt(strain_field=my_strain_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### strain_field

Field with strain data in Voigt notation, or fields container containing such a field

**Type:** *LinkableInput*

### field

Deprecated alias of: strain_field

**Type:** *LinkableInput*

## Outputs

### field

Field with strain data converted to standard 3x3 symmetric matrix format

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
strain_from_voigt()
```

#### Constructor

```python
strain_from_voigt(strain_field, config)
```

**Parameters:**

- `strain_field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
strain_from_voigt(config)
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
