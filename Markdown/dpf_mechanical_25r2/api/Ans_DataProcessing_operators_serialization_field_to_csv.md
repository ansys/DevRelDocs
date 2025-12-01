---
uid: Ans.DataProcessing.operators.serialization.field_to_csv
---

# field_to_csv Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Exports a field or a fields container into a csv file   ///available inputs: field_or_fields_container (FieldsContainer, Field), file_path (string), storage_type (Int32) (optional)
            available outputs:

field_to_csv()
field_to_csv(field_or_fields_container: object, file_path: object, storage_type: object, config: OperatorConfig)
field_to_csv(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
