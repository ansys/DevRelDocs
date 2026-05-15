---
uid: Ans.DataProcessing.operators.math.absolute_value_by_component_fc
---

# absolute_value_by_component_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the absolute value of each data value in the input field component-wise, without performing vector norm operations.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = absolute_value_by_component_fc()

op = absolute_value_by_component_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Field, fields container, or numeric data for which to compute absolute values

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with absolute values applied to each component

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
absolute_value_by_component_fc()
```

#### Constructor

```python
absolute_value_by_component_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
absolute_value_by_component_fc(config)
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
