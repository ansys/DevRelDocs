---
uid: Ans.DataProcessing.operators.math.scale_fc
---

# scale_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

scale_fc()
scale_fc(fields_container: object, weights: object, boolean: object, algorithm: object, config: OperatorConfig)
scale_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

fields container to be scaled

**Type:** *LinkableInput*

### weights

Double/Vector of doubles/Field/FieldsContainer. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### boolean

Default is false. If set to true, output of scale is made dimensionless

**Type:** *LinkableInput*

### algorithm

Algorithm selection: 0 (default) uses MKL for optimization, 1 uses standard loops

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer with scaled field values

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scale_fc()
```

#### Constructor

```python
scale_fc(fields_container, weights, boolean, algorithm, config)
```

**Parameters:**

- `fields_container` (*object*)
- `weights` (*object*)
- `boolean` (*object*)
- `algorithm` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scale_fc(config)
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
