---
uid: Ans.DataProcessing.operators.utility.extract_sub_mc
title: extract_sub_mc
---

# extract_sub_mc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Creates a new meshes container with all the meshed regions corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.   ///available inputs: meshes (MeshesContainer), label_space (LabelSpace, Scoping) (optional), collapse_labels (bool) (optional)
            available outputs: meshes_container (MeshesContainer)

extract_sub_mc()
extract_sub_mc(meshes: object, label_space: object, collapse_labels: object, config: OperatorConfig)
extract_sub_mc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
extract_sub_mc()
```

#### Constructor

```python
extract_sub_mc(meshes, label_space, collapse_labels, config)
```

**Parameters:**

- `meshes` (*object*)
- `label_space` (*object*)
- `collapse_labels` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_sub_mc(config)
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
