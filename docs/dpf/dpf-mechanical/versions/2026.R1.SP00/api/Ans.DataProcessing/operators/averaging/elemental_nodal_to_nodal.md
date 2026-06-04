---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal
---

# elemental_nodal_to_nodal Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `should_average` (bool) (optional), `extend_to_mid_nodes` (bool) (optional), `extend_weights_to_mid_nodes` (bool) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field), `weight` (PropertyField)

## Example

```python
op = elemental_nodal_to_nodal()

op = elemental_nodal_to_nodal(field=my_field,mesh_scoping=my_mesh_scoping,should_average=my_should_average,extend_to_mid_nodes=my_extend_to_mid_nodes,extend_weights_to_mid_nodes=my_extend_weights_to_mid_nodes,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

average only on these entities

**Type:** *LinkableInput*

### should_average

Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

**Type:** *LinkableInput*

### extend_to_mid_nodes

Compute mid nodes (when available) by averaging the neighbour primary nodes.

**Type:** *LinkableInput*

### extend_weights_to_mid_nodes

Extends weights to mid nodes (when available). Default is false.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### weight

Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_nodal_to_nodal()
```

#### Constructor

```python
elemental_nodal_to_nodal(field, mesh_scoping, should_average, extend_to_mid_nodes, extend_weights_to_mid_nodes, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `should_average` (*object*)
- `extend_to_mid_nodes` (*object*)
- `extend_weights_to_mid_nodes` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_nodal_to_nodal(config)
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
