---
uid: Ans.DataProcessing.operators.scoping.nodal_from_mesh
---

# nodal_from_mesh Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Retrieves the nodal scoping of a given input mesh, which contains the node IDs.   ///available inputs: mesh (MeshedRegion)
            available outputs: mesh_scoping (Scoping)

nodal_from_mesh()
nodal_from_mesh(mesh: object, config: OperatorConfig)
nodal_from_mesh(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_from_mesh()
```

#### Constructor

```python
nodal_from_mesh(mesh, config)
```

**Parameters:**

- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_from_mesh(config)
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
