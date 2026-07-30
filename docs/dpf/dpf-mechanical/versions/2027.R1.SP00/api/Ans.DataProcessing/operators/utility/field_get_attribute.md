---
uid: Ans.DataProcessing.operators.utility.field_get_attribute
---

# *class* field_get_attribute(field: object = None, property_name: object = None, config: OperatorConfig = None)

field_get_attribute()

field_get_attribute(field: object, property_name: object, config: OperatorConfig)

field_get_attribute(config: OperatorConfig)



**DPF Framework Reference:** [field_get_attribute operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/field_get_attribute.md)

**Parameters:**

* **field**
* **property_name**
* **config**

## Inputs

### field

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
