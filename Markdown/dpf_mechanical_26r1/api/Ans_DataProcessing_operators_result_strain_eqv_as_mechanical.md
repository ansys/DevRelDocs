---
uid: Ans.DataProcessing.operators.result.strain_eqv_as_mechanical
title: strain_eqv_as_mechanical
---

# strain_eqv_as_mechanical Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.   ///available inputs: time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), mesh (MeshedRegion, MeshesContainer) (optional), requested_location (string) (optional), poisson_ratio (Int32, double) (optional), read_cyclic (bool) (optional), average_across_bodies (bool) (optional)
            available outputs: fields_container (FieldsContainer), meshes_container (MeshesContainer)

strain_eqv_as_mechanical()
strain_eqv_as_mechanical(time_scoping: object, mesh_scoping: object, streams_container: object, data_sources: object, mesh: object, requested_location: object, poisson_ratio: object, read_cyclic: object, average_across_bodies: object, config: OperatorConfig)
strain_eqv_as_mechanical(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_MechanicalResults_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
strain_eqv_as_mechanical()
```

#### Constructor

```python
strain_eqv_as_mechanical(time_scoping, mesh_scoping, streams_container, data_sources, mesh, requested_location, poisson_ratio, read_cyclic, average_across_bodies, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `mesh` (*object*)
- `requested_location` (*object*)
- `poisson_ratio` (*object*)
- `read_cyclic` (*object*)
- `average_across_bodies` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
strain_eqv_as_mechanical(config)
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
