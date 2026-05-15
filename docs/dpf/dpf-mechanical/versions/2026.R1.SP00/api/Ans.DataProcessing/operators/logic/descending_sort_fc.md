---
uid: Ans.DataProcessing.operators.logic.descending_sort_fc
---

# descending_sort_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Sort a field (in 0) in descending order, with an optional component priority table or a boolean to enable sort by scoping (in 1). This operator doesn't support multiple elementary data per entity.

available inputs: `fields_container` (FieldsContainer), `component_priority_table` (IList int, System.Collections.IEnumerable) (optional), `sort_by_scoping` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = descending_sort_fc()

op = descending_sort_fc(fields_container=my_fields_container,component_priority_table=my_component_priority_table,sort_by_scoping=my_sort_by_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### component_priority_table

component priority table (vector of int)

**Type:** *LinkableInput*

### sort_by_scoping

if true, uses scoping to sort the field (default is false)

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
descending_sort_fc()
```

#### Constructor

```python
descending_sort_fc(fields_container, component_priority_table, sort_by_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `component_priority_table` (*object*)
- `sort_by_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
descending_sort_fc(config)
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
