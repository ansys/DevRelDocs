---
uid: Ans.DataProcessing.operators.logic.identical_pfc
---

# identical_pfc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Checks if two property_fields_container are identical.

available inputs: `property_fields_containerA` (PropertyFieldsContainer), `property_fields_containerB` (PropertyFieldsContainer)

available outputs: `boolean` (bool), `message` (string)

## Example

```python
op = identical_pfc()

op = identical_pfc(property_fields_containerA=my_property_fields_containerA,property_fields_containerB=my_property_fields_containerB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### property_fields_containerA

**Type:** *LinkableInput*

### property_fields_containerB

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
identical_pfc()
```

#### Constructor

```python
identical_pfc(property_fields_containerA, property_fields_containerB, config)
```

**Parameters:**

- `property_fields_containerA` (*object*)
- `property_fields_containerB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_pfc(config)
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
