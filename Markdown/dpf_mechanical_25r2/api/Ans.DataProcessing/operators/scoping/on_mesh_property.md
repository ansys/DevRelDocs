---
uid: Ans.DataProcessing.operators.scoping.on_mesh_property
---

# on_mesh_property Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Provides a scoping on a given property name and a property number.   ///available inputs: requested_location (string) (optional), property_name (string), property_id (IList int, Int32, System.Collections.IEnumerable) (optional), inclusive (Int32) (optional), mesh (MeshedRegion)
            available outputs: mesh_scoping (Scoping)

on_mesh_property()
on_mesh_property(requested_location: object, property_name: object, property_id: object, inclusive: object, mesh: object, config: OperatorConfig)
on_mesh_property(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
on_mesh_property()
```

#### Constructor

```python
on_mesh_property(requested_location, property_name, property_id, inclusive, mesh, config)
```

**Parameters:**

- `requested_location` (*object*)
- `property_name` (*object*)
- `property_id` (*object*)
- `inclusive` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_mesh_property(config)
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
