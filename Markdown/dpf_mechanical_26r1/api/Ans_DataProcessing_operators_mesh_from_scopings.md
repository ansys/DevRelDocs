---
uid: Ans.DataProcessing.operators.mesh.from_scopings
title: from_scopings
---

# from_scopings Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer   ///available inputs: scopings_container (ScopingsContainer), inclusive (Int32) (optional), nodes_only (bool) (optional), mesh (MeshedRegion)
            available outputs: meshes (MeshesContainer)

from_scopings()
from_scopings(scopings_container: object, inclusive: object, nodes_only: object, mesh: object, config: OperatorConfig)
from_scopings(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
from_scopings()
```

#### Constructor

```python
from_scopings(scopings_container, inclusive, nodes_only, mesh, config)
```

**Parameters:**

- `scopings_container` (*object*)
- `inclusive` (*object*)
- `nodes_only` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_scopings(config)
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
