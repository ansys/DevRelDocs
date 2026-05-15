---
uid: Ans.DataProcessing.operators.utility.merge_materials
---

# merge_materials Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of materials into a unique one.

available inputs: `materials1` (Materials), `materials2` (Materials)

available outputs: `merged_materials` (Materials)

## Example

```python
op = merge_materials()

op = merge_materials(materials1=my_materials1,materials2=my_materials2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### materials1

A vector of materials to merge or materials from pin 0 to ...

**Type:** *LinkableInput*

### materials2

A vector of materials to merge or materials from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_materials

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_materials()
```

#### Constructor

```python
merge_materials(materials1, materials2, config)
```

**Parameters:**

- `materials1` (*object*)
- `materials2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_materials(config)
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
