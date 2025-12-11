---
uid: Ans.DataProcessing.operators.utility.make_label_space
---

# make_label_space Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assemble strings and integers to make a label space.

available inputs: `base_label` (LabelSpace, FieldsContainer, ScopingsContainer) (optional), `label_name` (string), `label_value1` (Int32), `label_value2` (Int32)

available outputs: `label` (LabelSpace)

## Example

```python
op = make_label_space()

op = make_label_space(base_label=my_base_label,label_name=my_label_name,label_value1=my_label_value1,label_value2=my_label_value2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### base_label

Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values.

**Type:** *LinkableInput*

### label_name

**Type:** *LinkableInput*

### label_value1

**Type:** *LinkableInput*

### label_value2

**Type:** *LinkableInput*

## Outputs

### label

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
make_label_space()
```

#### Constructor

```python
make_label_space(base_label, label_name, label_value1, label_value2, config)
```

**Parameters:**

- `base_label` (*object*)
- `label_name` (*object*)
- `label_value1` (*object*)
- `label_value2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_label_space(config)
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
