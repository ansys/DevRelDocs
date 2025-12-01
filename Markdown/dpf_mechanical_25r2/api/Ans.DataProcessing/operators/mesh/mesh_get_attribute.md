---
uid: Ans.DataProcessing.operators.mesh.mesh_get_attribute
---

# mesh_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.   ///available inputs: meshed_region (MeshedRegion), property_name (string), property_identifier (Int32, string) (optional)
            available outputs: property (Scoping ,Field ,PropertyField ,Int32 ,StringField)

mesh_get_attribute()
mesh_get_attribute(meshed_region: object, property_name: object, property_identifier: object, config: OperatorConfig)
mesh_get_attribute(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_get_attribute()
```

#### Constructor

```python
mesh_get_attribute(meshed_region, property_name, property_identifier, config)
```

**Parameters:**

- `meshed_region` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_get_attribute(config)
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
