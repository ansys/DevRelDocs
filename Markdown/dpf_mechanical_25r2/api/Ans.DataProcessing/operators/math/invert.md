---
uid: Ans.DataProcessing.operators.math.invert
---

# invert Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

DEPRECATED, PLEASE USE DIVIDE. Computes the element-wise and component-wise inverse of a field (1./x).   ///available inputs: field (Field, FieldsContainer)
            available outputs: field (Field)

invert()
invert(field: object, config: OperatorConfig)
invert(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
invert()
```

#### Constructor

```python
invert(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
invert(config)
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
