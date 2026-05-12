---
uid: Ans.DataProcessing.operators.serialization.field_to_csv
---

# *class* field_to_csv(field_or_fields_container: object = None, file_path: object = None, storage_type: object = None, config: OperatorConfig = None)

Exports a field or a fields container into a csv file. Currently only homogenous Fields Definition of Fields Container are supported.

available inputs: `field_or_fields_container` (FieldsContainer, Field), `file_path` (string), `storage_type` (Int32) (optional)

available outputs:

**DPF Framework Reference:** [field_to_csv operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/field_to_csv.md)

**Parameters:**

* **field_or_fields_container**
* **file_path**
* **storage_type**
* **config**

**Example:**

```python
op = field_to_csv()

op = field_to_csv(field_or_fields_container=my_field_or_fields_container,file_path=my_file_path,storage_type=my_storage_type)
```

## Inputs

### field_or_fields_container

field_or_fields_container

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

### storage_type

storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0.

**Type:** *LinkableInput*

## Outputs

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
