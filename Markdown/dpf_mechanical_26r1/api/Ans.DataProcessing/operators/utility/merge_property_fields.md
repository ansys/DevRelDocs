---
uid: Ans.DataProcessing.operators.utility.merge_property_fields
---

# merge_property_fields Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of property fields into a unique one.

available inputs: `naive_merge` (bool), `property_fields1` (PropertyField, PropertyFieldsContainer), `property_fields2` (PropertyField, PropertyFieldsContainer)

available outputs: `property_field` (PropertyField)

## Example

```python
op = merge_property_fields()

op = merge_property_fields(naive_merge=my_naive_merge,property_fields1=my_property_fields1,property_fields2=my_property_fields2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### naive_merge

If true, merge the input property fields assuming that there is no repetition in their scoping ids. Default is false.

**Type:** *LinkableInput*

### property_fields1

Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...

**Type:** *LinkableInput*

### property_fields2

Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### property_field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_property_fields()
```

#### Constructor

```python
merge_property_fields(naive_merge, property_fields1, property_fields2, config)
```

**Parameters:**

- `naive_merge` (*object*)
- `property_fields1` (*object*)
- `property_fields2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_property_fields(config)
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
