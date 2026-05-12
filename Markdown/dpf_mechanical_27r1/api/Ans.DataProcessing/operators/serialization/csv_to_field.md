---
uid: Ans.DataProcessing.operators.serialization.csv_to_field
---

# *class* csv_to_field(time_scoping: object = None, data_sources: object = None, config: OperatorConfig = None)

transform csv file to a field or fields container

available inputs: `time_scoping` (Scoping) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [csv_to_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/csv_to_field.md)

**Parameters:**

* **time_scoping**
* **data_sources**
* **config**

**Example:**

```python
op = csv_to_field()

op = csv_to_field(time_scoping=my_time_scoping,data_sources=my_data_sources)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### data_sources

data sources containing a file with csv extension

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
