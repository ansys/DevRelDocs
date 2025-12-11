---
uid: Ans.DataProcessing.operators.utility.extract_field
---

# extract_field Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0). If a single index is provided, returns a field; if multiple indices are provided, returns a fields container.

available inputs: `fields_container` (Field, FieldsContainer), `indices` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `field` (Field)

## Example

```python
op = extract_field()

op = extract_field(fields_container=my_fields_container,indices=my_indices)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Fields container or single field. If a field is provided, it is passed through as output

**Type:** *LinkableInput*

### indices

Indices of fields to extract. Default is [0] (first field). Single index returns a field, multiple indices return a fields container

**Type:** *LinkableInput*

## Outputs

### field

Extracted field(s). Single index produces a field, multiple indices produce a fields container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
extract_field()
```

#### Constructor

```python
extract_field(fields_container, indices, config)
```

**Parameters:**

- `fields_container` (*object*)
- `indices` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_field(config)
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
