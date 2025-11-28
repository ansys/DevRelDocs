---
uid: Ans.DataProcessing.operators.scoping.from_mesh
title: from_mesh
---

# from_mesh Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Provides the entire mesh scoping based on the requested location   ///available inputs: mesh (MeshedRegion), requested_location (string) (optional)
            available outputs: scoping (Scoping)

from_mesh()
from_mesh(mesh: object, requested_location: object, config: OperatorConfig)
from_mesh(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
from_mesh()
```

#### Constructor

```python
from_mesh(mesh, requested_location, config)
```

**Parameters:**

- `mesh` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_mesh(config)
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
