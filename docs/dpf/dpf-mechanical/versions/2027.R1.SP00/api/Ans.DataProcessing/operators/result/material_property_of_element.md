---
uid: Ans.DataProcessing.operators.result.material_property_of_element
---

# *class* material_property_of_element(mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, property_name: object = None, default_value: object = None, filter_zero_values: object = None, config: OperatorConfig = None)

Reads a named scalar material property (pin 6) for each element from result files.

The property value is taken from the linear (constant) material data assigned to each element's material.

The output is a scalar field at elemental location.

If a default value is provided via pin 7, all elements receive that value unless the property exists for their material, in which case the material value takes precedence.

If no default value is provided and filter_zero_values (pin 8) is true, elements whose property value is exactly zero are excluded from the output.

available inputs: `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property_name` (string), `default_value` (double) (optional), `filter_zero_values` (bool) (optional)

available outputs: `material_properties` (Field)

**DPF Framework Reference:** [material_property_of_element operator specification](https://developer.ansys.com/docs/dpf-framework-2027.r1.sp00/operator-specifications/result/material_property_of_element.md)

**Parameters:**

* **mesh_scoping**
* **streams_container**
* **data_sources**
* **property_name**
* **default_value**
* **filter_zero_values**
* **config**

**Example:**

```python
op = material_property_of_element()

op = material_property_of_element(mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property_name=my_property_name,default_value=my_default_value,filter_zero_values=my_filter_zero_values)
```

## Inputs

### mesh_scoping

Element scoping that restricts which elements are processed. If not provided, all elements in the result file are used.

**Type:** *LinkableInput*

### streams_container

Streams containing the result file. If provided, data_sources is ignored.

**Type:** *LinkableInput*

### data_sources

Data sources used to open the result file when streams_container is not provided.

**Type:** *LinkableInput*

### property_name

Name of the linear scalar material property to extract, for example "EX" for Young's modulus or "DENS" for density.

**Type:** *LinkableInput*

### default_value

Scalar value assigned to elements whose material does not define the requested property. If not set, those elements are excluded from the output.

**Type:** *LinkableInput*

### filter_zero_values

When true and no default_value is set, elements whose property value is exactly zero are excluded from the output. Defaults to false.

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
