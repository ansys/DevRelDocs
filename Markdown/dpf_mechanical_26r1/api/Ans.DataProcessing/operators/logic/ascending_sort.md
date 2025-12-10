---
uid: Ans.DataProcessing.operators.logic.ascending_sort
---

# ascending_sort Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.

available inputs: `field` (Field, FieldsContainer), `component_priority_table` (IList int, System.Collections.IEnumerable) (optional), `sort_by_scoping` (bool) (optional)

available outputs: `field` (Field)

## Example

```python
op = ascending_sort()

op = ascending_sort(field=my_field,component_priority_table=my_component_priority_table,sort_by_scoping=my_sort_by_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### component_priority_table

component priority table (vector of int)

**Type:** *LinkableInput*

### sort_by_scoping

if true, uses scoping to sort the field (default is false)

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
ascending_sort()
```

#### Constructor

```python
ascending_sort(field, component_priority_table, sort_by_scoping, config)
```

**Parameters:**

- `field` (*object*)
- `component_priority_table` (*object*)
- `sort_by_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ascending_sort(config)
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
