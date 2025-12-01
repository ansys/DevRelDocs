---
uid: Ans.DataProcessing.operators.mesh.from_scoping
---

# from_scoping Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields of the meshed region: the 'Elemental', 'Face', and 'Nodal' property fields are scoped to the elements, faces or nodes of the output mesh, the 'Global' property fields are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.   ///available inputs: scoping (Scoping), inclusive (Int32) (optional), nodes_only (bool) (optional), mesh (MeshedRegion)
            available outputs: mesh (MeshedRegion)

from_scoping()
from_scoping(scoping: object, inclusive: object, nodes_only: object, mesh: object, config: OperatorConfig)
from_scoping(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
from_scoping()
```

#### Constructor

```python
from_scoping(scoping, inclusive, nodes_only, mesh, config)
```

**Parameters:**

- `scoping` (*object*)
- `inclusive` (*object*)
- `nodes_only` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_scoping(config)
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
