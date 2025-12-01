---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_harmonic
---

# workflow_energy_per_harmonic Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping) (optional), `energy_type` (Int32) (optional), `data_sources` (DataSources)

available outputs: `harmonic_energy` (FieldsContainer), `harmonic_energy_percentage` (FieldsContainer)

## Example

```python
op = workflow_energy_per_harmonic()

op = workflow_energy_per_harmonic(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,energy_type=my_energy_type,data_sources=my_data_sources)
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

Master scoping. All harmonics will be intersected with this scoping.

**Type:** *LinkableInput*

### energy_type

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy)

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### harmonic_energy

**Type:** *LinkableOutput*

### harmonic_energy_percentage

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
workflow_energy_per_harmonic()
```

#### Constructor

```python
workflow_energy_per_harmonic(time_scoping, mesh_scoping, energy_type, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `energy_type` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
workflow_energy_per_harmonic(config)
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
