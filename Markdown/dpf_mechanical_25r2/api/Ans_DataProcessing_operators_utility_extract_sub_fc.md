---
uid: Ans.DataProcessing.operators.utility.extract_sub_fc
---

# extract_sub_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Creates a new fields container with all the fields corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.   ///available inputs: fields_container (FieldsContainer), label_space (LabelSpace, Scoping) (optional), collapse_labels (bool) (optional)
            available outputs: fields_container (FieldsContainer)

extract_sub_fc()
extract_sub_fc(fields_container: object, label_space: object, collapse_labels: object, config: OperatorConfig)
extract_sub_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
extract_sub_fc()
```

#### Constructor

```python
extract_sub_fc(fields_container, label_space, collapse_labels, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label_space` (*object*)
- `collapse_labels` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_sub_fc(config)
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
