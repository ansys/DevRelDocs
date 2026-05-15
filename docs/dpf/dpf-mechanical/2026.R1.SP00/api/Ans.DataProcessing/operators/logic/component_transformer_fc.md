---
uid: Ans.DataProcessing.operators.logic.component_transformer_fc
---

# component_transformer_fc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Takes the input field and creates a field with overriden value on given components.

available inputs: `fields_container` (FieldsContainer), `component_number` (Int32, IList int, System.Collections.IEnumerable), `default_value` (double) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = component_transformer_fc()

op = component_transformer_fc(fields_container=my_fields_container,component_number=my_component_number,default_value=my_default_value)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### component_number

One or several component index that will be modified from the initial field.

**Type:** *LinkableInput*

### default_value

Set a default value for components selected.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
component_transformer_fc()
```

#### Constructor

```python
component_transformer_fc(fields_container, component_number, default_value, config)
```

**Parameters:**

- `fields_container` (*object*)
- `component_number` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_transformer_fc(config)
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
