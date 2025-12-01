---
uid: Ans.DataProcessing.operators.utility.merge_meshes_containers
---

# merge_meshes_containers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of meshes containers into a unique one.

available inputs: `meshes_containers1` (MeshesContainer), `meshes_containers2` (MeshesContainer)

available outputs: `merged_meshes_container` (MeshesContainer)

## Example

```python
op = merge_meshes_containers()

op = merge_meshes_containers(meshes_containers1=my_meshes_containers1,meshes_containers2=my_meshes_containers2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### meshes_containers1

a vector of meshes containers to merge or meshes containers from pin 0 to ...

**Type:** *LinkableInput*

### meshes_containers2

a vector of meshes containers to merge or meshes containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_meshes_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_meshes_containers()
```

#### Constructor

```python
merge_meshes_containers(meshes_containers1, meshes_containers2, config)
```

**Parameters:**

- `meshes_containers1` (*object*)
- `meshes_containers2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_meshes_containers(config)
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
