---
uid: Ans.DataProcessing.operators.min_max.min_max_fc
---

# min_max_fc Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

## Summary

Compute the component-wise minimum (out 0) and maximum (out 1) over a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

## Example

```python
op = min_max_fc()

op = min_max_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
min_max_fc()
```

#### Constructor

```python
min_max_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_fc(config)
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
