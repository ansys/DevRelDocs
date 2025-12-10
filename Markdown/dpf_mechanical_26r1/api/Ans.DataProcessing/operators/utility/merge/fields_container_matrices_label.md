---
uid: Ans.DataProcessing.operators.utility.merge.fields_container_matrices_label
---

# fields_container_matrices_label Class

**Namespace:** [Ans.DataProcessing.operators.utility.merge](Ans_DataProcessing_operators_utility_merge.md)

## Summary

Merge fields of fields container into field matrices. The output is a fields container of field matrices.

available inputs: `fields_container` (FieldsContainer), `label` (string), `time_scoping` (Int32, IList int, Scoping, System.Collections.IEnumerable) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = fields_container_matrices_label()

op = fields_container_matrices_label(fields_container=my_fields_container,label=my_label,time_scoping=my_time_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility.merge` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

fields container to be merged

**Type:** *LinkableInput*

### label

Label where the merge is required

**Type:** *LinkableInput*

### time_scoping

if it's specified, fields container of field matrices is constructed only on the specified time scoping

**Type:** *LinkableInput*

## Outputs

### fields_container

fields container of field matrices obtained after merging.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
fields_container_matrices_label()
```

#### Constructor

```python
fields_container_matrices_label(fields_container, label, time_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fields_container_matrices_label(config)
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
