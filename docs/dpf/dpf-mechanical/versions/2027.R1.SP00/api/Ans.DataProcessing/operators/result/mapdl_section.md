---
uid: Ans.DataProcessing.operators.result.mapdl_section
---

# *class* mapdl_section(properties_name: object = None, section: object = None, streams_container: object = None, data_sources: object = None, layer_property: object = None, layers_requested: object = None, config: OperatorConfig = None)

mapdl_section()

mapdl_section(properties_name: object, section: object, streams_container: object, data_sources: object, layer_property: object, layers_requested: object, config: OperatorConfig)

mapdl_section(config: OperatorConfig)



**DPF Framework Reference:** [mapdl_section operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/result/mapdl_section.md)

**Parameters:**

* **properties_name**
* **section**
* **streams_container**
* **data_sources**
* **layer_property**
* **layers_requested**
* **config**

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
