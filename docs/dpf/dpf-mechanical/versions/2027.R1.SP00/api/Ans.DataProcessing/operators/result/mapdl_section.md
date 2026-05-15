---
uid: Ans.DataProcessing.operators.result.mapdl_section
---

# *class* mapdl_section(properties_name: object = None, section: object = None, streams_container: object = None, data_sources: object = None, layer_property: object = None, layers_requested: object = None, config: OperatorConfig = None)

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.

available inputs: `properties_name` (string), `section` (PropertyField) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `layer_property` (bool) (optional), `layers_requested` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `properties_value` (FieldsContainer), `layers_per_section` (PropertyField)

**DPF Framework Reference:** [mapdl_section operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/mapdl_section.md)

**Parameters:**

* **properties_name**
* **section**
* **streams_container**
* **data_sources**
* **layer_property**
* **layers_requested**
* **config**

**Example:**

```python
op = mapdl_section()

op = mapdl_section(properties_name=my_properties_name,section=my_section,streams_container=my_streams_container,data_sources=my_data_sources,layer_property=my_layer_property,layers_requested=my_layers_requested)
```

## Inputs

### properties_name

**Type:** *LinkableInput*

### section

Property field that contains a section id per element.(optional)

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### layer_property

Property requested is layered. Default = False.

**Type:** *LinkableInput*

### layers_requested

Array with layers requested for the section. Default = AllLayers.

**Type:** *LinkableInput*

## Outputs

### properties_value

**Type:** *LinkableOutput*

### layers_per_section

Only available if layer_property option is set to True.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
