---
uid: Ans.DataProcessing.operators.mesh.combine_levelset
---

# combine_levelset Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Takes two level sets and computes their binary union.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

## Example

```python
op = combine_levelset()

op = combine_levelset(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
combine_levelset()
```

#### Constructor

```python
combine_levelset(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
combine_levelset(config)
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
