---
uid: Ans.DataProcessing.operators.result.material_property_of_element
---

# *class* material_property_of_element(mesh_scoping: object = None, streams: object = None, data_sources: object = None, property_name: object = None, config: OperatorConfig = None)

Reads a material property for each element from result files.

The operator first retrieves each element's material ID from the mesh property "mat",

then maps the requested property name to the corresponding material value.

The output is a scalar field at elemental location.

available inputs: `mesh_scoping` (Scoping) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `property_name` (string)

available outputs: `material_properties` (Field)

**DPF Framework Reference:** [material_property_of_element operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/result/material_property_of_element.md)

**Parameters:**

* **mesh_scoping**
* **streams**
* **data_sources**
* **property_name**
* **config**

**Example:**

```python
op = material_property_of_element()

op = material_property_of_element(mesh_scoping=my_mesh_scoping,streams=my_streams,data_sources=my_data_sources,property_name=my_property_name)
```

## Inputs

### mesh_scoping

Element scoping that restricts which elements are processed. If not provided, all elements in the result file are used.

**Type:** *LinkableInput*

### streams

result file container allowed to be kept open to cache data

**Type:** *LinkableInput*

### data_sources

result file path container, used if no streams are set

**Type:** *LinkableInput*

### property_name

Name of the linear scalar material property to extract, for example "EX" for Young's modulus or "DENS" for density.

**Type:** *LinkableInput*

## Outputs

### material_properties

Scalar field at elemental location containing the requested material property value for each processed element.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
