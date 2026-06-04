---
uid: Ans.DataProcessing.operators.utility.propertyfield_get_attribute
---

# *class* propertyfield_get_attribute(property_field: object = None, property_name: object = None, config: OperatorConfig = None)

Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs

available inputs: `property_field` (PropertyField, PropertyFieldsContainer), `property_name` (string)

available outputs: `property` (string ,TimeFreqSupport ,Scoping ,DataTree)

**DPF Framework Reference:** [propertyfield_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/propertyfield_get_attribute.md)

**Parameters:**

* **property_field**
* **property_name**
* **config**

**Example:**

```python
op = propertyfield_get_attribute()

op = propertyfield_get_attribute(property_field=my_property_field,property_name=my_property_name)
```

## Inputs

### property_field

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
