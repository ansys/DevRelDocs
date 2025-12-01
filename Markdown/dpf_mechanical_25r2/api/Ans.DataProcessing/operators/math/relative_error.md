---
uid: Ans.DataProcessing.operators.math.relative_error
---

# relative_error Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

relative_error()
relative_error(value: object, reference: object, config: OperatorConfig)
relative_error(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### value

field or fields container with only one field is expected

**Type:** *LinkableInput*

### reference

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### zero_ref_scoping

Ids of entities where reference value is zero.

**Type:** *LinkableOutput*

### no_ref_scoping

Ids of entities where there are no reference value.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
relative_error()
```

#### Constructor

```python
relative_error(value, reference, config)
```

**Parameters:**

- `value` (*object*)
- `reference` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
relative_error(config)
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
