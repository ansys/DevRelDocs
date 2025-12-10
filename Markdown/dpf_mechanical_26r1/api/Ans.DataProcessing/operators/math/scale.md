---
uid: Ans.DataProcessing.operators.math.scale
---

# scale Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

scale()
scale(field: object, weights: object, boolean: object, algorithm: object, config: OperatorConfig)
scale(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

Double/Field/Vector of doubles. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping

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

### field

Field with scaled values (input_field * scale_factor)

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scale()
```

#### Constructor

```python
scale(field, weights, boolean, algorithm, config)
```

**Parameters:**

- `field` (*object*)
- `weights` (*object*)
- `boolean` (*object*)
- `algorithm` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scale(config)
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
