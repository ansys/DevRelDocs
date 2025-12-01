---
uid: Ans.DataProcessing.operators.math.cplx_dot
---

# cplx_dot Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes product between two field containers containing complex fields.   ///available inputs: fields_containerA (FieldsContainer), fields_containerB (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

cplx_dot()
cplx_dot(fields_containerA: object, fields_containerB: object, config: OperatorConfig)
cplx_dot(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cplx_dot()
```

#### Constructor

```python
cplx_dot(fields_containerA, fields_containerB, config)
```

**Parameters:**

- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cplx_dot(config)
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
