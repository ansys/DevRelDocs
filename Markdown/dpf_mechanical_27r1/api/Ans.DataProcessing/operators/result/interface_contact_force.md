---
uid: Ans.DataProcessing.operators.result.interface_contact_force
---

# *class* interface_contact_force(data_sources: object = None, entity_scoping: object = None, unit_system: object = None, config: OperatorConfig = None)

Read Interface Contact Force (LSDyna) by calling the readers defined by the datasources.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `entity_scoping` (Scoping) (optional), `unit_system` (Int32, string) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [interface_contact_force operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/interface_contact_force.md)

**Parameters:**

* **data_sources**
* **entity_scoping**
* **unit_system**
* **config**

**Example:**

```python
op = interface_contact_force()

op = interface_contact_force(data_sources=my_data_sources,entity_scoping=my_entity_scoping,unit_system=my_unit_system)
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
