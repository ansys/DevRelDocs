---
uid: Ans.DataProcessing.operators.scoping.on_mesh_property
---

# *class* on_mesh_property(requested_location: object = None, property_name: object = None, property_id: object = None, inclusive: object = None, mesh: object = None, config: OperatorConfig = None)

Provides a scoping on a given property name and a property number.

available inputs: `requested_location` (string) (optional), `property_name` (string), `property_id` (IList int, Int32, System.Collections.IEnumerable) (optional), `inclusive` (Int32) (optional), `mesh` (MeshedRegion)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [on_mesh_property operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/on_mesh_property.md)

**Parameters:**

* **requested_location**
* **property_name**
* **property_id**
* **inclusive**
* **mesh**
* **config**

**Example:**

```python
op = on_mesh_property()

op = on_mesh_property(requested_location=my_requested_location,property_name=my_property_name,property_id=my_property_id,inclusive=my_inclusive,mesh=my_mesh)
```

## Inputs

### requested_location

Nodal or Elemental location are expected

**Type:** *LinkableInput*

### property_name

ex "apdl_element_type", "elprops", "mat", "eltype", "connectivity", "shell_elements", "solid_elements", "skin_elements", "beam_elements", "point_elements"...

**Type:** *LinkableInput*

### property_id

**Type:** *LinkableInput*

### inclusive

Default is 1 (inclusive is true). Only used if 'shape_values' property is requested. If inclusive is set to 1 and 'elprops' property field is available, it will select all elements that are set on the corresponding property. If inclusive is set to 0 (exclusive) and 'elprops' property field is available, it will select the elements that are only set on this property.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
