---
uid: Ans.DataProcessing.operators.result.compute_total_strain_YZ
---

# compute_total_strain_YZ Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

compute_total_strain_YZ()
compute_total_strain_YZ(time_scoping: object, scoping: object, streams_container: object, data_sources: object, extrapolate: object, nonlinear: object, meshed_region: object, requested_location: object, displacement: object, config: OperatorConfig)
compute_total_strain_YZ(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_LivePost_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.. Will only be used if no displacement input is given (will be applied on displacement operator).

**Type:** *LinkableInput*

### scoping

The element scoping on which the result is computed.

**Type:** *LinkableInput*

### streams_container

Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected.

**Type:** *LinkableInput*

### data_sources

Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected.

**Type:** *LinkableInput*

### extrapolate

Whether to extrapolate the data from the integration points to the nodes.

**Type:** *LinkableInput*

### nonlinear

Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity).

**Type:** *LinkableInput*

### meshed_region

The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support.

**Type:** *LinkableInput*

### requested_location

Average the Elemental Nodal result to the requested location.

**Type:** *LinkableInput*

### displacement

Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources.

**Type:** *LinkableInput*

## Outputs

### fields_container

The computed result fields container (elemental nodal).

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
compute_total_strain_YZ()
```

#### Constructor

```python
compute_total_strain_YZ(time_scoping, scoping, streams_container, data_sources, extrapolate, nonlinear, meshed_region, requested_location, displacement, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `extrapolate` (*object*)
- `nonlinear` (*object*)
- `meshed_region` (*object*)
- `requested_location` (*object*)
- `displacement` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_total_strain_YZ(config)
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
