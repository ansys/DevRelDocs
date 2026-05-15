---
uid: Ans.DataProcessing.operators.result.workflow_energy_per_harmonic
---

# *class* workflow_energy_per_harmonic(time_scoping: object = None, mesh_scoping: object = None, energy_type: object = None, stream: object = None, data_sources: object = None, config: OperatorConfig = None)

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping) (optional), `energy_type` (Int32) (optional), `stream` (Stream), `data_sources` (DataSources)

available outputs: `harmonic_energy` (FieldsContainer), `harmonic_energy_percentage` (FieldsContainer)

**DPF Framework Reference:** [workflow_energy_per_harmonic operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/workflow_energy_per_harmonic.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **energy_type**
* **stream**
* **data_sources**
* **config**

**Example:**

```python
op = workflow_energy_per_harmonic()

op = workflow_energy_per_harmonic(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,energy_type=my_energy_type,stream=my_stream,data_sources=my_data_sources)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

Master scoping. All harmonics will be intersected with this scoping.

**Type:** *LinkableInput*

### energy_type

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy)

**Type:** *LinkableInput*

### stream

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### harmonic_energy

**Type:** *LinkableOutput*

### harmonic_energy_percentage

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
