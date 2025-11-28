---
uid: Ans.DataProcessing.operators.invariant.eigen_vectors_fc
title: eigen_vectors_fc
---

# eigen_vectors_fc Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Computes the element-wise Eigen vectors for each tensor in the fields of the field container.   ///available inputs: fields_container (FieldsContainer, Field)
            available outputs: fields_container (FieldsContainer)

eigen_vectors_fc()
eigen_vectors_fc(fields_container: object, config: OperatorConfig)
eigen_vectors_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
eigen_vectors_fc()
```

#### Constructor

```python
eigen_vectors_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
eigen_vectors_fc(config)
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
