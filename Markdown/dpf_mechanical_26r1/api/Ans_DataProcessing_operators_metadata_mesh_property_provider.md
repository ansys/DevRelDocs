---
uid: Ans.DataProcessing.operators.metadata.mesh_property_provider
---

# mesh_property_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.   ///available inputs: mesh_scoping (Scoping) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), property_name (string), property_identifier (Int32, string) (optional)
            available outputs: property (Scoping ,PropertyField ,StringField)

mesh_property_provider()
mesh_property_provider(mesh_scoping: object, streams_container: object, data_sources: object, property_name: object, property_identifier: object, config: OperatorConfig)
mesh_property_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_property_provider()
```

#### Constructor

```python
mesh_property_provider(mesh_scoping, streams_container, data_sources, property_name, property_identifier, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_property_provider(config)
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
