---
uid: Ans.DataProcessing.operators.result.global_eroded_hourglass_energy
---

# *class* global_eroded_hourglass_energy(data_sources: object = None, unit_system: object = None, config: OperatorConfig = None)

Read Global Eroded Hourglass Energy (LSDyna) by calling the readers defined by the datasources.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `unit_system` (Int32, string) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [global_eroded_hourglass_energy operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/global_eroded_hourglass_energy.md)

**Parameters:**

* **data_sources**
* **unit_system**
* **config**

**Example:**

```python
op = global_eroded_hourglass_energy()

op = global_eroded_hourglass_energy(data_sources=my_data_sources,unit_system=my_unit_system)
```

## Inputs

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### unit_system

(LSDyna) Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
