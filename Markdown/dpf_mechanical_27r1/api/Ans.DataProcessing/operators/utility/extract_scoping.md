---
uid: Ans.DataProcessing.operators.utility.extract_scoping
---

# *class* extract_scoping(field_or_fields_container: object = None, requested_location: object = None, config: OperatorConfig = None)

Takes a field type object, mesh or a collection of them and extracts its scoping or scopings container.

available inputs: `field_or_fields_container` (Field, FieldsContainer, PropertyField, PropertyFieldsContainer, CustomTypeField, CustomTypeFieldsContainer, StringField, Scoping, ScopingsContainer, MeshedRegion, MeshesContainer) (optional), `requested_location` (Int32) (optional)

available outputs: `mesh_scoping` (Scoping ,ScopingsContainer)

**DPF Framework Reference:** [extract_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_scoping.md)

**Parameters:**

* **field_or_fields_container**
* **requested_location**
* **config**

**Example:**

```python
op = extract_scoping()

op = extract_scoping(field_or_fields_container=my_field_or_fields_container,requested_location=my_requested_location)
```

## Inputs

### field_or_fields_container

**Type:** *LinkableInput*

### requested_location

If input 0 is a mesh or a meshes_container, the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
