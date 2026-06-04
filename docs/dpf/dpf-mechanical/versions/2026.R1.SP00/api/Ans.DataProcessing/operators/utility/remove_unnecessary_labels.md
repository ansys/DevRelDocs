---
uid: Ans.DataProcessing.operators.utility.remove_unnecessary_labels
---

# remove_unnecessary_labels Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Removes the selected label from a fields container.

available inputs: `permissive` (bool) (optional), `fields_container` (FieldsContainer), `label_to_remove` (string)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = remove_unnecessary_labels()

op = remove_unnecessary_labels(permissive=my_permissive,fields_container=my_fields_container,label_to_remove=my_label_to_remove)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### permissive

If true, the operator does not throw an error if the label to be removed has more than one entry.

**Type:** *LinkableInput*

### fields_container

Fields Container with the label to be removed.

**Type:** *LinkableInput*

### label_to_remove

Label to be removed from the fields container.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
remove_unnecessary_labels()
```

#### Constructor

```python
remove_unnecessary_labels(permissive, fields_container, label_to_remove, config)
```

**Parameters:**

- `permissive` (*object*)
- `fields_container` (*object*)
- `label_to_remove` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remove_unnecessary_labels(config)
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
