---
uid: Ans.DataProcessing.operators.min_max.min_max_over_label_fc
title: min_max_over_label_fc
---

# min_max_over_label_fc Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Create two fields (0 min 1 max) by looping over the fields container in input and taking the min/max value by component through all the fields having the same id for the label set in input (in pin 1). If no label is specified or if the specified label doesn't exist, the operation is done over all the fields. The fields out are located on the label set in input, so their scoping are the labels ids.For each min max value, the label id for one other fields container labels is kept and returned in a scoping in pin 2 (min) and 3 (max).The field's scoping ids of the value kept in min max are also returned in the scopings in pin 4 (min) and 5 (max).   ///available inputs: fields_container (FieldsContainer), label (string)
            available outputs: field_min (Field), field_max (Field), domain_ids_min (Scoping), domain_ids_max (Scoping), scoping_ids_min (Scoping), scoping_ids_max (Scoping)

min_max_over_label_fc()
min_max_over_label_fc(fields_container: object, label: object, config: OperatorConfig)
min_max_over_label_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_over_label_fc()
```

#### Constructor

```python
min_max_over_label_fc(fields_container, label, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_over_label_fc(config)
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
