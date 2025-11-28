---
uid: Ans.DataProcessing.operators.math.kronecker_prod
title: kronecker_prod
---

# kronecker_prod Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes element-wise Kronecker product between two tensor fields.   ///available inputs: fieldA (Field, FieldsContainer), fieldB (Field, FieldsContainer)
            available outputs: field (Field)

kronecker_prod()
kronecker_prod(fieldA: object, fieldB: object, config: OperatorConfig)
kronecker_prod(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
kronecker_prod()
```

#### Constructor

```python
kronecker_prod(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
kronecker_prod(config)
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
