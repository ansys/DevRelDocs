---
uid: Ans.DataProcessing.operators.result.compute_stress_Y
---

# compute_stress_Y Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the YY normal component (11 component).

available inputs: `scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `requested_location` (string) (optional), `strain` (FieldsContainer, Field)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = compute_stress_Y()

op = compute_stress_Y(scoping=my_scoping,streams_container=my_streams_container,data_sources=my_data_sources,requested_location=my_requested_location,strain=my_strain)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_LivePost_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scoping

The element scoping on which the result is computed.

**Type:** *LinkableInput*

### streams_container

Needed to get mesh and material ids. Optional if a data_sources have been connected.

**Type:** *LinkableInput*

### data_sources

Needed to get mesh and material ids. Optional if a streams_container have been connected.

**Type:** *LinkableInput*

### requested_location

Average the Elemental Nodal result to the requested location.

**Type:** *LinkableInput*

### strain

Field/or fields container containing only the elastic strain field (element nodal).

**Type:** *LinkableInput*

## Outputs

### fields_container

The computed result fields container (elemental nodal).

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
compute_stress_Y()
```

#### Constructor

```python
compute_stress_Y(scoping, streams_container, data_sources, requested_location, strain, config)
```

**Parameters:**

- `scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `requested_location` (*object*)
- `strain` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_stress_Y(config)
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
