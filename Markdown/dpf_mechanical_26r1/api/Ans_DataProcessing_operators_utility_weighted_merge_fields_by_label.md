---
uid: Ans.DataProcessing.operators.utility.weighted_merge_fields_by_label
---

# weighted_merge_fields_by_label Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Performs a weighted merge on fields of a fields container that share the same label value.   ///available inputs: fields_container (FieldsContainer), label (string), merged_field_support (AbstractFieldSupport) (optional), sum_merge (bool) (optional), weights1 (PropertyField), weights2 (PropertyField)
            available outputs: fields_container (FieldsContainer)

weighted_merge_fields_by_label()
weighted_merge_fields_by_label(fields_container: object, label: object, merged_field_support: object, sum_merge: object, weights1: object, weights2: object, config: OperatorConfig)
weighted_merge_fields_by_label(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
weighted_merge_fields_by_label()
```

#### Constructor

```python
weighted_merge_fields_by_label(fields_container, label, merged_field_support, sum_merge, weights1, weights2, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `merged_field_support` (*object*)
- `sum_merge` (*object*)
- `weights1` (*object*)
- `weights2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
weighted_merge_fields_by_label(config)
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
