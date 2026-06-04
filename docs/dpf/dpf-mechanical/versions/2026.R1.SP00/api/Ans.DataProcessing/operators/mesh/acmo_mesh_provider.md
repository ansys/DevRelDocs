---
uid: Ans.DataProcessing.operators.mesh.acmo_mesh_provider
---

# acmo_mesh_provider Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Converts an Assembly Mesh into a DPF Meshes container

available inputs: `assembly_mesh` (AnsDispatchHolder), `unit` (string) (optional)

available outputs: `meshes_container` (MeshesContainer)

## Example

```python
op = acmo_mesh_provider()

op = acmo_mesh_provider(assembly_mesh=my_assembly_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Mechanical_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### assembly_mesh

**Type:** *LinkableInput*

### unit

**Type:** *LinkableInput*

## Outputs

### meshes_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
acmo_mesh_provider()
```

#### Constructor

```python
acmo_mesh_provider(assembly_mesh, config)
```

**Parameters:**

- `assembly_mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
acmo_mesh_provider(config)
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
