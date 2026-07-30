---
uid: Ans.DataProcessing.operators.utility.fc_get_attribute
---

# *class* fc_get_attribute(fields_container: object = None, property_name: object = None, property_identifier: object = None, config: OperatorConfig = None)

fc_get_attribute()

fc_get_attribute(fields_container: object, property_name: object, property_identifier: object, config: OperatorConfig)

fc_get_attribute(config: OperatorConfig)



**DPF Framework Reference:** [fc_get_attribute operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/fc_get_attribute.md)

**Parameters:**

* **fields_container**
* **property_name**
* **property_identifier**
* **config**

## Inputs

### fields_container

**Type:** *LinkableInput*

### property_name

Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping", "base_name", "field_names", "field" and "num_fields".

**Type:** *LinkableInput*

### property_identifier

Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping" or "field".

**Type:** *LinkableInput*

## Outputs

### property

Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping", a Field for "field", and an integer for "num_fields". For "base_name" the container name (string) and for "field_names" a StringField containing individual field names.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
