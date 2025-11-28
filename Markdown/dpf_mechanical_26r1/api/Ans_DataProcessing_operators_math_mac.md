---
uid: Ans.DataProcessing.operators.math.mac
title: mac
---

# mac Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes MAC Matrix between two fields container, both for real and complex cases. For mixed cases (real-complex and complex) only the real part is considered. Providing inputs with the same component scoping is an user responsability.   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer), weights (Field)
            available outputs: field (Field)

mac()
mac(fields_containerA: object, fields_containerB: object, weights: object, config: OperatorConfig)
mac(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
