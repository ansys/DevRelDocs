---
uid: Ans.DataProcessing.operators.utility.meshes_container
title: meshes_container
---

# meshes_container Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Incrementaly merge the input.   ///available inputs: input (MeshesContainer)
            available outputs: incremented_result (object)

meshes_container()
meshes_container(input: object, config: OperatorConfig)
meshes_container(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
meshes_container()
```

#### Constructor

```python
meshes_container(input, config)
```

**Parameters:**

- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
meshes_container(config)
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
