---
uid: Ans.DataProcessing.operators.utility.ds_get_attribute
---

# *class* ds_get_attribute(data_sources: object = None, property_name: object = None, property_index: object = None, property_key: object = None, property_result_key: object = None, config: OperatorConfig = None)

A DataSources in pin 0 and a property name (string) in pin 1 are expected in input. An index refering to the property can also be provided.

available inputs: `data_sources` (DataSources), `property_name` (string), `property_index` (Int32) (optional), `property_key` (string) (optional), `property_result_key` (string) (optional)

available outputs: `property` (string ,Int32)

**DPF Framework Reference:** [ds_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/ds_get_attribute.md)

**Parameters:**

* **data_sources**
* **property_name**
* **property_index**
* **property_key**
* **property_result_key**
* **config**

**Example:**

```python
op = ds_get_attribute()

op = ds_get_attribute(data_sources=my_data_sources,property_name=my_property_name,property_index=my_property_index,property_key=my_property_key,property_result_key=my_property_result_key)
```

## Inputs

### data_sources

**Type:** *LinkableInput*

### property_name

Accepted inputs are: 'file_path' (returns string), 'result_file_name' (returns string), 'domain_file_path' (returns string), 'domain_result_file_name' (returns string), 'num_keys' (returns int), num_result_key (returns int), num_file_path (returns int), 'num_result_file_path' (returns int), 'key_by_index' (returns string), 'result_key_by_index' (returns string), 'path_by_index' (returns string), 'path_key_by_index' (returns string).

**Type:** *LinkableInput*

### property_index

Index for the property. Must be set for 'domain_file_path', 'domain_result_file_name' 'key_by_index', 'result_key_by_index', 'path_by_index' and 'path_key_by_index' properties.

**Type:** *LinkableInput*

### property_key

Key to look for. Must be set for 'file_path' and 'domain_file_path' properties.

**Type:** *LinkableInput*

### property_result_key

Result key to look for. Can be used for 'file_path', 'result_file_name', 'domain_file_path' and 'domain_result_file_name'.

**Type:** *LinkableInput*

## Outputs

### property

Property value.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
