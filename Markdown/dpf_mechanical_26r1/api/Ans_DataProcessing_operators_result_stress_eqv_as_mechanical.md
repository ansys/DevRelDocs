---
uid: Ans.DataProcessing.operators.result.stress_eqv_as_mechanical
---

# stress_eqv_as_mechanical Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Computes the equivalent (Von Mises) stresses and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional)
            available outputs: fields_container (FieldsContainer), meshes_container (MeshesContainer)

stress_eqv_as_mechanical()
stress_eqv_as_mechanical(time_scoping: object, mesh_scoping: object, streams_container: object, data_sources: object, mesh: object, requested_location: object, read_cyclic: object, average_across_bodies: object, config: OperatorConfig)
stress_eqv_as_mechanical(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_MechanicalResults_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
stress_eqv_as_mechanical()
```

#### Constructor

```python
stress_eqv_as_mechanical(time_scoping, mesh_scoping, streams_container, data_sources, mesh, requested_location, read_cyclic, average_across_bodies, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `mesh` (*object*)
- `requested_location` (*object*)
- `read_cyclic` (*object*)
- `average_across_bodies` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
stress_eqv_as_mechanical(config)
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
