---
uid: Ans.DataProcessing.operators.utility.set_attribute
---

# *class* set_attribute(fields_container: object = None, property_name: object = None, property_identifier: object = None, config: OperatorConfig = None)

Uses the FieldsContainer APIs to modify it.

available inputs: `fields_container` (FieldsContainer), `property_name` (string), `property_identifier` (LabelSpace, string, StringField) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [set_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/set_attribute.md)

**Parameters:**

* **fields_container**
* **property_name**
* **property_identifier**
* **config**

**Example:**

```python
op = set_attribute()

op = set_attribute(fields_container=my_fields_container,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### property_name

Supported property names are: "labels", "base_name", "field_names".

**Type:** *LinkableInput*

### property_identifier

Value of the property to be set: vector of string or LabelSpace for "labels", a result name string for "base_name" (sets the container name and renames all fields with time/complex/label suffixes), a StringField for "field_names" to manually set the field names.

**Type:** *LinkableInput*

## Outputs

### fields_container

Returns the modified FieldsContainer.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
