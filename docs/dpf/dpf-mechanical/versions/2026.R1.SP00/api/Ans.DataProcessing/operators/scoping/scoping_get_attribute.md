---
uid: Ans.DataProcessing.operators.scoping.scoping_get_attribute
---

# scoping_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Uses the Scoping APIs to return a given attribute of the scoping in input.

available inputs: `scoping` (Scoping), `property_name` (string)

available outputs: `property` (IList int  ,string ,System.Collections.IEnumerable)

## Example

```python
op = scoping_get_attribute()

op = scoping_get_attribute(scoping=my_scoping,property_name=my_property_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scoping

**Type:** *LinkableInput*

### property_name

Supported property names are: "ids", "location".

**Type:** *LinkableInput*

## Outputs

### property

Returns a vector of int for property: "ids" and a string for property: "location".

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scoping_get_attribute()
```

#### Constructor

```python
scoping_get_attribute(scoping, property_name, config)
```

**Parameters:**

- `scoping` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scoping_get_attribute(config)
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
