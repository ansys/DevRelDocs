---
uid: Ans.DataProcessing.operators.math.accumulate_over_label_fc
---

# accumulate_over_label_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Compute the component-wise sum over all the fields that have the same ID as the label set as input in the fields container. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.

available inputs: `fields_container` (FieldsContainer), `label` (string) (optional)

available outputs: `field` (Field)

## Example

```python
op = accumulate_over_label_fc()

op = accumulate_over_label_fc(fields_container=my_fields_container,label=my_label)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### label

Label of the fields container where it should operate. If not defined and the input Fields Container has only one Label, the operation will be done over all the fields.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
accumulate_over_label_fc()
```

#### Constructor

```python
accumulate_over_label_fc(fields_container, label, config)
```

**Parameters:**

- `fields_container` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulate_over_label_fc(config)
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
