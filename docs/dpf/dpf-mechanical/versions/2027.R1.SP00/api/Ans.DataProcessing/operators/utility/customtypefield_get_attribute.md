---
uid: Ans.DataProcessing.operators.utility.customtypefield_get_attribute
---

# *class* customtypefield_get_attribute(custom_type_field: object = None, property_name: object = None, config: OperatorConfig = None)

Gets a property from an input field/field container. A CustomTypeFieldin pin 0, a property name (string) in pin 1 are expected as inputs

available inputs: `custom_type_field` (CustomTypeField, CustomTypeFieldsContainer), `property_name` (string)

available outputs: `property` (string ,TimeFreqSupport ,Scoping ,DataTree)

**DPF Framework Reference:** [customtypefield_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/customtypefield_get_attribute.md)

**Parameters:**

* **custom_type_field**
* **property_name**
* **config**

**Example:**

```python
op = customtypefield_get_attribute()

op = customtypefield_get_attribute(custom_type_field=my_custom_type_field,property_name=my_property_name)
```

## Inputs

### custom_type_field

**Type:** *LinkableInput*

### property_name

Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping' and 'header'.

**Type:** *LinkableInput*

## Outputs

### property

Property value that is returned. Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
