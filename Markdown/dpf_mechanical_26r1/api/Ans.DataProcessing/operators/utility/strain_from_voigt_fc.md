---
uid: Ans.DataProcessing.operators.utility.strain_from_voigt_fc
---

# strain_from_voigt_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Converts strain field data from Voigt notation (6-component vector) to standard symmetric matrix format (3x3 tensor).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = strain_from_voigt_fc()

op = strain_from_voigt_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Field with strain data in Voigt notation, or fields container containing such a field

**Type:** *LinkableInput*

### field

Deprecated alias of: fields_container

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with strain data converted to standard 3x3 symmetric matrix format

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
strain_from_voigt_fc()
```

#### Constructor

```python
strain_from_voigt_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
strain_from_voigt_fc(config)
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
