---
uid: Ans.DataProcessing.operators.math.absolute_value_by_component
---

# absolute_value_by_component Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

absolute_value_by_component()
absolute_value_by_component(field: object, config: OperatorConfig)
absolute_value_by_component(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field, fields container, or numeric data for which to compute absolute values

**Type:** *LinkableInput*

## Outputs

### field

Field with absolute values applied to each component

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
absolute_value_by_component()
```

#### Constructor

```python
absolute_value_by_component(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
absolute_value_by_component(config)
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
