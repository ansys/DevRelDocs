---
uid: Ans.DataProcessing.operators.geo.normals
---

# normals Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

compute the normals at the given nodes or element scoping based on the given mesh (first version, the element normal is only handled on the shell elements)   ///available inputs: mesh (MeshedRegion) (optional), mesh_scoping (Scoping) (optional), field (Field) (optional)
            available outputs: field (Field)

normals()
normals(mesh: object, mesh_scoping: object, field: object, config: OperatorConfig)
normals(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
normals()
```

#### Constructor

```python
normals(mesh, mesh_scoping, field, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
normals(config)
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
