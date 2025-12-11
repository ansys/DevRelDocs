---
uid: Ans.DataProcessing.operators.logic.identical_anys
---

# identical_anys Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Takes two Any objects and compares them.Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringField, standard types (double, int, string, vector of int, doubles, string). Note: all inputs related to fields, mesh, and so on are passed to each property check.

available inputs: `anyA` (object), `anyB` (object), `double_value` (double), `double_tolerance` (double) (optional), `compare_auxiliary` (bool)

available outputs: `included` (bool), `message` (string)

## Example

```python
op = identical_anys()

op = identical_anys(anyA=my_anyA,anyB=my_anyB,double_value=my_double_value,double_tolerance=my_double_tolerance,compare_auxiliary=my_compare_auxiliary)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### anyA

**Type:** *LinkableInput*

### anyB

**Type:** *LinkableInput*

### double_value

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

**Type:** *LinkableInput*

### double_tolerance

**Type:** *LinkableInput*

### compare_auxiliary

For meshes and meshescontainer: compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.

**Type:** *LinkableInput*

## Outputs

### included

bool (true if belongs...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
identical_anys()
```

#### Constructor

```python
identical_anys(anyA, anyB, double_value, double_tolerance, compare_auxiliary, config)
```

**Parameters:**

- `anyA` (*object*)
- `anyB` (*object*)
- `double_value` (*object*)
- `double_tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_anys(config)
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
