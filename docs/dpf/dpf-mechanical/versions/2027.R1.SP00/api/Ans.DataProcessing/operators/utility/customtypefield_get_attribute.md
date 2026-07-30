---
uid: Ans.DataProcessing.operators.utility.customtypefield_get_attribute
---

# *class* customtypefield_get_attribute(custom_type_field: object = None, property_name: object = None, config: OperatorConfig = None)

customtypefield_get_attribute()

customtypefield_get_attribute(custom_type_field: object, property_name: object, config: OperatorConfig)

customtypefield_get_attribute(config: OperatorConfig)



**DPF Framework Reference:** [customtypefield_get_attribute operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/customtypefield_get_attribute.md)

**Parameters:**

* **custom_type_field**
* **property_name**
* **config**

## Inputs

### custom_type_field

**Type:** *LinkableInput*

### property_name

Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping', 'header', 'datasize' and 'data'.

**Type:** *LinkableInput*

## Outputs

### property

Property value that is returned.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
