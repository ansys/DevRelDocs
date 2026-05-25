---
uid: Ans.DataProcessing.operators.result.record_reader
---

# *class* record_reader(streams: object = None, data_sources: object = None, record_name: object = None, config: OperatorConfig = None)

Extracts a record from a file.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources), `record_name` (Any)

available outputs: `field` (PropertyField ,Field)

**DPF Framework Reference:** [record_reader operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/record_reader.md)

**Parameters:**

* **streams**
* **data_sources**
* **record_name**
* **config**

**Example:**

```python
op = record_reader()

op = record_reader(streams=my_streams,data_sources=my_data_sources,record_name=my_record_name)
```

## Inputs

### streams

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### record_name

**Type:** *LinkableInput*

## Outputs

### field

Output is of type property_field for integer records and of type field for double records.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
