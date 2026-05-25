---
uid: Ans.DataProcessing.operators.utility.set_property
---

# *class* set_property(field: object = None, property_name: object = None, property: object = None, config: OperatorConfig = None)

Sets a property to an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 and a valid property value in pin 2 are expected as inputs

available inputs: `field` (Field, FieldsContainer), `property_name` (string), `property` (string, TimeFreqSupport, Scoping, DataTree, Int32, double)

available outputs: `field` (Field ,FieldsContainer)

**DPF Framework Reference:** [set_property operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/set_property.md)

**Parameters:**

* **field**
* **property_name**
* **property**
* **config**

**Example:**

```python
op = set_property()

op = set_property(field=my_field,property_name=my_property_name,property=my_property)
```

## Inputs

### field

**Type:** *LinkableInput*

### property_name

Property to set. Accepted inputs are specific strings namely: 'unit', 'name', 'time_freq_support', 'scoping', 'header'.

**Type:** *LinkableInput*

### property

Property Value to set. Accepted inputs on this pin are: CTimeFreqSupport, CScoping, DataTree, int, double, string.

**Type:** *LinkableInput*

## Outputs

### field

Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
