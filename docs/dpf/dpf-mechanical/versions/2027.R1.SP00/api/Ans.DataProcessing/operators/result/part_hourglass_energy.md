---
uid: Ans.DataProcessing.operators.result.part_hourglass_energy
---

# *class* part_hourglass_energy(data_sources: object = None, entity_scoping: object = None, unit_system: object = None, config: OperatorConfig = None)

Read Part Hourglass Energy (LSDyna) by calling the readers defined by the datasources.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `entity_scoping` (Scoping) (optional), `unit_system` (Int32, string) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [part_hourglass_energy operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/part_hourglass_energy.md)

**Parameters:**

* **data_sources**
* **entity_scoping**
* **unit_system**
* **config**

**Example:**

```python
op = part_hourglass_energy()

op = part_hourglass_energy(data_sources=my_data_sources,entity_scoping=my_entity_scoping,unit_system=my_unit_system)
```

## Inputs

### streams_container

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### entity_scoping

entity (part for matsum, interface for rcforc) where the result will be scoped

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
