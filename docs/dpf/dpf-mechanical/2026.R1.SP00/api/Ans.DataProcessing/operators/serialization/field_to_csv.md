---
uid: Ans.DataProcessing.operators.serialization.field_to_csv
---

# field_to_csv Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Exports a field or a fields container into a csv file

available inputs: `field_or_fields_container` (FieldsContainer, Field), `file_path` (string), `storage_type` (Int32) (optional)

available outputs:

## Example

```python
op = field_to_csv()

op = field_to_csv(field_or_fields_container=my_field_or_fields_container,file_path=my_file_path,storage_type=my_storage_type)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_or_fields_container

field_or_fields_container

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

### storage_type

storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0.

**Type:** *LinkableInput*

## Outputs

## Constructors

#### Constructor

```python
field_to_csv()
```

#### Constructor

```python
field_to_csv(field_or_fields_container, file_path, storage_type, config)
```

**Parameters:**

- `field_or_fields_container` (*object*)
- `file_path` (*object*)
- `storage_type` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_to_csv(config)
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
