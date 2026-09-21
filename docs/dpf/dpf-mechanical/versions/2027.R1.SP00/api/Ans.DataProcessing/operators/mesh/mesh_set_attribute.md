---
uid: Ans.DataProcessing.operators.mesh.mesh_set_attribute
---

# *class* mesh_set_attribute(meshed_region: object = None, property_name: object = None, property_identifier: object = None, config: OperatorConfig = None)

Uses the MeshedRegion APIs to modify it.

available inputs: `meshed_region` (MeshedRegion), `property_name` (string), `property_identifier` (string)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [mesh_set_attribute operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_set_attribute.md)

**Parameters:**

* **meshed_region**
* **property_name**
* **property_identifier**
* **config**

**Example:**

```python
op = mesh_set_attribute()

op = mesh_set_attribute(meshed_region=my_meshed_region,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Inputs

### meshed_region

**Type:** *LinkableInput*

### property_name

Supported property names are: "unit".

**Type:** *LinkableInput*

### property_identifier

Value of the property to be set: a unit string for "unit".

**Type:** *LinkableInput*

## Outputs

### mesh

Returns the modified MeshedRegion.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
