---
uid: Ans.DataProcessing.operators.scoping.rescope_custom_type_field
---

# *class* rescope_custom_type_field(fields: object = None, mesh_scoping: object = None, default_value: object = None, config: OperatorConfig = None)

Rescopes a custom type field on the given scoping. If an ID does not exist in the original custom type field, the default value (in 2) is used when defined.

available inputs: `fields` (CustomTypeFieldsContainer, CustomTypeField), `mesh_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `default_value` (CustomTypeFieldCustomTypeField) (optional)

available outputs: `fields` (CustomTypeFieldsContainer ,CustomTypeField)

**DPF Framework Reference:** [rescope_custom_type_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/rescope_custom_type_field.md)

**Parameters:**

* **fields**
* **mesh_scoping**
* **default_value**
* **config**

**Example:**

```python
op = rescope_custom_type_field()

op = rescope_custom_type_field(fields=my_fields,mesh_scoping=my_mesh_scoping,default_value=my_default_value)
```

## Inputs

### fields

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### default_value

If pin 2 is used, the IDs not found in the custom type field are added with this default value.

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
