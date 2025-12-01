---
uid: Ans.DataProcessing.operators.utility.change_location
---

# change_location Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

change the location of a field.

available inputs: `field` (Field), `new_location` (string)

available outputs: `field` (Field)

## Example

```python
op = change_location()

op = change_location(field=my_field,new_location=my_new_location)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

**Type:** *LinkableInput*

### new_location

new location of the output field ex 'Nodal', 'ElementalNodal', 'Elemental'...

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
change_location()
```

#### Constructor

```python
change_location(field, new_location, config)
```

**Parameters:**

- `field` (*object*)
- `new_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_location(config)
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
