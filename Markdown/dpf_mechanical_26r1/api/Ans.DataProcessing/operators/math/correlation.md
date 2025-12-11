---
uid: Ans.DataProcessing.operators.math.correlation
---

# correlation Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

correlation()
correlation(fieldA: object, fieldB: object, weights: object, absoluteValue: object, config: OperatorConfig)
correlation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

Field a. The reference field.

**Type:** *LinkableInput*

### fieldB

Field b. If a fields container is provided, correlation is computed for each field.

**Type:** *LinkableInput*

### weights

Field M, optional weighting for correlation computation.

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### absoluteValue

If true, correlation factor is ||aMb||/(||aMa||.||bMb||)

**Type:** *LinkableInput*

## Outputs

### field

Correlation factor for each input field b.

**Type:** *LinkableOutput*

### index

If several b are provided, this output contains the index of the highest correlation factor.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
correlation()
```

#### Constructor

```python
correlation(fieldA, fieldB, weights, absoluteValue, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `weights` (*object*)
- `absoluteValue` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
correlation(config)
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
