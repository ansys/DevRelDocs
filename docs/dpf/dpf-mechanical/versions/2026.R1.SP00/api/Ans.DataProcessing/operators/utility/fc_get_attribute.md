---
uid: Ans.DataProcessing.operators.utility.fc_get_attribute
---

# fc_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Uses the FieldsContainer APIs to return a given attribute of the fields container in input.

available inputs: `fields_container` (FieldsContainer), `property_name` (string), `property_identifier` (string, Int32) (optional)

available outputs: `property` (Scoping ,IList int  ,TimeFreqSupport ,LabelSpace ,Field ,System.Collections.IEnumerable)

## Example

```python
op = fc_get_attribute()

op = fc_get_attribute(fields_container=my_fields_container,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### property_name

Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping" and "field".

**Type:** *LinkableInput*

### property_identifier

Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping" or "field".

**Type:** *LinkableInput*

## Outputs

### property

Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping" and a "field" for "field".

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
fc_get_attribute()
```

#### Constructor

```python
fc_get_attribute(fields_container, property_name, property_identifier, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fc_get_attribute(config)
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
