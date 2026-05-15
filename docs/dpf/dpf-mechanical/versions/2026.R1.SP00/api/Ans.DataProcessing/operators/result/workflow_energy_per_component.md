---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_component
---

# workflow_energy_per_component Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `energy_type` (Int32) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `named_selection1` (string) (optional), `named_selection2` (string) (optional)

available outputs: `component_energy` (FieldsContainer), `component_energy_percentage` (FieldsContainer), `component_total_energy` (FieldsContainer), `component_total_energy_percentage` (FieldsContainer), `component_strain_energy` (FieldsContainer), `component_strain_energy_percentage` (FieldsContainer), `component_kinetic_energy` (FieldsContainer), `component_kinetic_energy_percentage` (FieldsContainer)

## Example

```python
op = workflow_energy_per_component()

op = workflow_energy_per_component(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,energy_type=my_energy_type,streams_container=my_streams_container,data_sources=my_data_sources,named_selection1=my_named_selection1,named_selection2=my_named_selection2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed.

**Type:** *LinkableInput*

### energy_type

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy, 3: All energy types)

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### named_selection1

Named Selections. Intersection of all  Named Selections with the master scoping will be done.

**Type:** *LinkableInput*

### named_selection2

Named Selections. Intersection of all  Named Selections with the master scoping will be done.

**Type:** *LinkableInput*

## Outputs

### component_energy

**Type:** *LinkableOutput*

### component_energy_percentage

**Type:** *LinkableOutput*

### component_total_energy

**Type:** *LinkableOutput*

### component_total_energy_percentage

**Type:** *LinkableOutput*

### component_strain_energy

**Type:** *LinkableOutput*

### component_strain_energy_percentage

**Type:** *LinkableOutput*

### component_kinetic_energy

**Type:** *LinkableOutput*

### component_kinetic_energy_percentage

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
workflow_energy_per_component()
```

#### Constructor

```python
workflow_energy_per_component(time_scoping, mesh_scoping, energy_type, streams_container, data_sources, named_selection1, named_selection2, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `energy_type` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `named_selection1` (*object*)
- `named_selection2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_energy_per_component(config)
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
