---
uid: Ans.DataProcessing.operators.utility.forward_meshes_container
---

# forward_meshes_container Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Returns the input mesh or meshes container into a meshes container.   ///available inputs: meshes (MeshesContainer, MeshedRegion), default_label (string) (optional)
            available outputs: meshes_container (MeshesContainer)

forward_meshes_container()
forward_meshes_container(meshes: object, default_label: object, config: OperatorConfig)
forward_meshes_container(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
forward_meshes_container()
```

#### Constructor

```python
forward_meshes_container(meshes, default_label, config)
```

**Parameters:**

- `meshes` (*object*)
- `default_label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
forward_meshes_container(config)
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
