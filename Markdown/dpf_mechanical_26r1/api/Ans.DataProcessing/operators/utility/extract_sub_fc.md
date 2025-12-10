---
uid: Ans.DataProcessing.operators.utility.extract_sub_fc
---

# extract_sub_fc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Creates a new fields container with all the fields corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

available inputs: `fields_container` (FieldsContainer), `label_space` (LabelSpace, Scoping) (optional), `collapse_labels` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = extract_sub_fc()

op = extract_sub_fc(fields_container=my_fields_container,label_space=my_label_space,collapse_labels=my_collapse_labels)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### label_space

Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

**Type:** *LinkableInput*

### collapse_labels

If set to true (default) the input label space (scoping location) is suppressed from the output fields container, otherwise, label space is kept.

**Type:** *LinkableInput*

## Outputs

### fields_container

fields_container

**Type:** *LinkableOutput*

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
