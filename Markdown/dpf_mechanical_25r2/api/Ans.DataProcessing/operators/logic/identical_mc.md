---
uid: Ans.DataProcessing.operators.logic.identical_mc
---

# identical_mc Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Checks if two meshes_container are identical.   ///available inputs: meshes_containerA (MeshesContainer), meshes_containerB (MeshesContainer), small_value (double) (optional), tolerance (double) (optional), compare_auxiliary (bool)
            available outputs: boolean (bool), message (string)

identical_mc()
identical_mc(meshes_containerA: object, meshes_containerB: object, small_value: object, tolerance: object, compare_auxiliary: object, config: OperatorConfig)
identical_mc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
identical_mc()
```

#### Constructor

```python
identical_mc(meshes_containerA, meshes_containerB, small_value, tolerance, compare_auxiliary, config)
```

**Parameters:**

- `meshes_containerA` (*object*)
- `meshes_containerB` (*object*)
- `small_value` (*object*)
- `tolerance` (*object*)
- `compare_auxiliary` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_mc(config)
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
