---
uid: Ans.DataProcessing.operators.serialization.mechanical_csv_to_field
---

# *class* mechanical_csv_to_field(mesh: object = None, data_sources: object = None, requested_location: object = None, config: OperatorConfig = None)

Reads mechanical exported csv file

available inputs: `unit` (), `mesh` (MeshedRegion) (optional), `data_sources` (DataSources), `requested_location` (string, FieldDefinition)

available outputs: `field` (Field)

**DPF Framework Reference:** [mechanical_csv_to_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/mechanical_csv_to_field.md)

**Parameters:**

* **mesh**
* **data_sources**
* **requested_location**
* **config**

**Example:**

```python
op = mechanical_csv_to_field()

op = mechanical_csv_to_field(mesh=my_mesh,data_sources=my_data_sources,requested_location=my_requested_location)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### requested_location

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
