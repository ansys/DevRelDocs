---
uid: Ans.DataProcessing.operators.math.mac
---

# mac Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes MAC Matrix between two fields container, both for real and complex cases. For mixed cases (real-complex and complex) only the real part is considered. Providing inputs with the same component scoping is an user responsability.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `weights` (Field)

available outputs: `field` (Field)

## Example

```python
op = mac()

op = mac(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,weights=my_weights)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_containerA

Fields Container A.

**Type:** *LinkableInput*

### fields_containerB

Fields Container B.

**Type:** *LinkableInput*

### weights

Field M, optional weighting for MAC Matrix computation.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

## Outputs

### field

MAC Matrix for all the combinations between mode fields of Field Container A and Field Container B. Results listed row by row.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mac()
```

#### Constructor

```python
mac(fields_containerA, fields_containerB, weights, config)
```

**Parameters:**

- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `weights` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mac(config)
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
