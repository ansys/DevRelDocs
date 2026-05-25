---
uid: Ans.DataProcessing.operators.mesh.split_fields
---

# *class* split_fields(field_or_fields_container: object = None, meshes: object = None, config: OperatorConfig = None)

Split the input field or fields container based on the input mesh regions

available inputs: `field_or_fields_container` (Field, FieldsContainer), `meshes` (MeshesContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [split_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/split_fields.md)

**Parameters:**

* **field_or_fields_container**
* **meshes**
* **config**

**Example:**

```python
op = split_fields()

op = split_fields(field_or_fields_container=my_field_or_fields_container,meshes=my_meshes)
```

## Inputs

### field_or_fields_container

**Type:** *LinkableInput*

### meshes

body meshes in the mesh controller cannot be mixed shell/solid

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
