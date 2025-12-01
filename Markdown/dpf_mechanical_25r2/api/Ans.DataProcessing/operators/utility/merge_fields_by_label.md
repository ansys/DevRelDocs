---
uid: Ans.DataProcessing.operators.utility.merge_fields_by_label
---

# merge_fields_by_label Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Merges the fields of a fields container that share the same label value.   ///available inputs: fields_container (FieldsContainer), label (string), merged_field_support (AbstractFieldSupport) (optional), sum_merge (bool) (optional)
            available outputs: fields_container (FieldsContainer), merged_field_support (AbstractFieldSupport)

merge_fields_by_label()
merge_fields_by_label(fields_container: object, label: object, merged_field_support: object, sum_merge: object, config: OperatorConfig)
merge_fields_by_label(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_fields_by_label()
```

#### Constructor

```python
merge_fields_by_label(fields_container, label, merged_field_support, sum_merge, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `merged_field_support` (*object*)
- `sum_merge` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_fields_by_label(config)
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
