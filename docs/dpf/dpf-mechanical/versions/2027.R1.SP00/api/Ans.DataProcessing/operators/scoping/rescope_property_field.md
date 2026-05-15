---
uid: Ans.DataProcessing.operators.scoping.rescope_property_field
---

# *class* rescope_property_field(fields: object = None, mesh_scoping: object = None, default_value: object = None, config: OperatorConfig = None)

Rescopes a property field on the given scoping. If an ID does not exist in the original property field, the default value (in 2) is used when defined.

available inputs: `fields` (PropertyFieldsContainer, PropertyField), `mesh_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `default_value` (Int32, IList int, System.Collections.IEnumerable) (optional)

available outputs: `fields` (PropertyFieldsContainer ,PropertyField)

**DPF Framework Reference:** [rescope_property_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_property_field.md)

**Parameters:**

* **fields**
* **mesh_scoping**
* **default_value**
* **config**

**Example:**

```python
op = rescope_property_field()

op = rescope_property_field(fields=my_fields,mesh_scoping=my_mesh_scoping,default_value=my_default_value)
```

## Inputs

### fields

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### default_value

If pin 2 is used, the IDs not found in the property field are added with this default value.

**Type:** *LinkableInput*

## Outputs

### fields

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
