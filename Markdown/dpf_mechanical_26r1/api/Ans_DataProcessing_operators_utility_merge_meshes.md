---
uid: Ans.DataProcessing.operators.utility.merge_meshes
---

# merge_meshes Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Take a set of meshes and assemble them in a unique one   ///available inputs: naive_merge_elements (bool) (optional), should_merge_named_selections (bool) (optional), meshes1 (MeshedRegion, MeshesContainer), meshes2 (MeshedRegion, MeshesContainer), merge_method (Int32) (optional), box_size (double) (optional), remove_duplicate_elements (Int32) (optional)
            available outputs: merges_mesh (MeshedRegion)

merge_meshes()
merge_meshes(naive_merge_elements: object, should_merge_named_selections: object, meshes1: object, meshes2: object, merge_method: object, box_size: object, remove_duplicate_elements: object, config: OperatorConfig)
merge_meshes(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
merge_meshes()
```

#### Constructor

```python
merge_meshes(naive_merge_elements, should_merge_named_selections, meshes1, meshes2, merge_method, box_size, remove_duplicate_elements, config)
```

**Parameters:**

- `naive_merge_elements` (*object*)
- `should_merge_named_selections` (*object*)
- `meshes1` (*object*)
- `meshes2` (*object*)
- `merge_method` (*object*)
- `box_size` (*object*)
- `remove_duplicate_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_meshes(config)
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
