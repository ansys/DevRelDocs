---
uid: Ans.DataProcessing.operators.math.centroid
---

# centroid Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes centroid of field1 and field2, using fieldOut = field1*(1.-fact)+field2*(fact). Only works by index.   ///available inputs: fieldA (Field, FieldsContainer), fieldB (Field, FieldsContainer), factor (double)
            available outputs: field (Field)

centroid()
centroid(fieldA: object, fieldB: object, factor: object, config: OperatorConfig)
centroid(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
centroid()
```

#### Constructor

```python
centroid(fieldA, fieldB, factor, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `factor` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
centroid(config)
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
