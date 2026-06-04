---
uid: Ans.DataProcessing.operators.logic.elementary_data_selector
---

# elementary_data_selector Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Creates a scalar/vector field based on the selected elementary data.

available inputs: `field` (Field, FieldsContainer), `elementary_data_index` (Int32, IList int, System.Collections.IEnumerable), `default_value` (double) (optional), `elementary_data_index_2` (Int32, IList int, System.Collections.IEnumerable) (optional)

available outputs: `field` (Field)

## Example

```python
op = elementary_data_selector()

op = elementary_data_selector(field=my_field,elementary_data_index=my_elementary_data_index,default_value=my_default_value,elementary_data_index_2=my_elementary_data_index_2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

**Type:** *LinkableInput*

### elementary_data_index

One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract.

**Type:** *LinkableInput*

### default_value

Set a default value for elementary data that do not exist.

**Type:** *LinkableInput*

### elementary_data_index_2

For field with nature matrix, this is the column indices to extract.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elementary_data_selector()
```

#### Constructor

```python
elementary_data_selector(field, elementary_data_index, default_value, elementary_data_index_2, config)
```

**Parameters:**

- `field` (*object*)
- `elementary_data_index` (*object*)
- `default_value` (*object*)
- `elementary_data_index_2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elementary_data_selector(config)
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
