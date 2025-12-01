---
uid: Ans.DataProcessing.operators.averaging.force_summation
---

# force_summation Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

force_summation()
force_summation(time_scoping: object, nodal_scoping: object, elemental_scoping: object, streams_container: object, data_sources: object, force_type: object, spoint: object, config: OperatorConfig)
force_summation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

default = all time steps

**Type:** *LinkableInput*

### nodal_scoping

Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes)

**Type:** *LinkableInput*

### elemental_scoping

Elemental Scoping. Set of elements contributing to the force calcuation. (default = all elements)

**Type:** *LinkableInput*

### streams_container

Streams container. Optional if using data sources.

**Type:** *LinkableInput*

### data_sources

Data sources. Optional if using a streams container.

**Type:** *LinkableInput*

### force_type

Type of force to be processed (0 - default: Total forces (static, damping, and inertia)., 1: Static forces, 2: Damping forces, 3: Inertia forces)

**Type:** *LinkableInput*

### spoint

Coordinate field of a point for moment summations. Defaults to (0,0,0).

**Type:** *LinkableInput*

## Outputs

### force_accumulation

**Type:** *LinkableOutput*

### moment_accumulation

**Type:** *LinkableOutput*

### heat_accumulation

**Type:** *LinkableOutput*

### forces_on_nodes

**Type:** *LinkableOutput*

### moments_on_nodes

**Type:** *LinkableOutput*

### heats_on_nodes

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
force_summation()
```

#### Constructor

```python
force_summation(time_scoping, nodal_scoping, elemental_scoping, streams_container, data_sources, force_type, spoint, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `nodal_scoping` (*object*)
- `elemental_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `force_type` (*object*)
- `spoint` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
force_summation(config)
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
