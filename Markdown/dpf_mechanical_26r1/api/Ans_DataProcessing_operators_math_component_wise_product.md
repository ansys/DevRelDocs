---
uid: Ans.DataProcessing.operators.math.component_wise_product
title: component_wise_product
---

# component_wise_product Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes component-wise product between two fields of same dimensionality. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely. When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields.   ///available inputs: fieldA (Field, FieldsContainer), fieldB (Field, FieldsContainer)
            available outputs: field (Field)

component_wise_product()
component_wise_product(fieldA: object, fieldB: object, config: OperatorConfig)
component_wise_product(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
component_wise_product()
```

#### Constructor

```python
component_wise_product(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_wise_product(config)
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
