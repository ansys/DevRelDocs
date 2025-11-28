---
uid: Ans.DataProcessing.operators.utility.mesh
title: mesh
---

# mesh Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Incrementaly merge the input.   ///available inputs: input (MeshedRegion)
            available outputs: incremented_result (object)

mesh()
mesh(input: object, config: OperatorConfig)
mesh(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh()
```

#### Constructor

```python
mesh(input, config)
```

**Parameters:**

- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh(config)
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
