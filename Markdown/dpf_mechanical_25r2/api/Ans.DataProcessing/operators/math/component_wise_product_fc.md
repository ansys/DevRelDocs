---
uid: Ans.DataProcessing.operators.math.component_wise_product_fc
---

# component_wise_product_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes component-wise product between two fields of same dimensionality. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely. When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields.   ///available inputs: fields_container (FieldsContainer), fieldB (Field, FieldsContainer)
            available outputs: fields_container (FieldsContainer)

component_wise_product_fc()
component_wise_product_fc(fields_container: object, fieldB: object, config: OperatorConfig)
component_wise_product_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
component_wise_product_fc()
```

#### Constructor

```python
component_wise_product_fc(fields_container, fieldB, config)
```

**Parameters:**

- `fields_container` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
component_wise_product_fc(config)
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
