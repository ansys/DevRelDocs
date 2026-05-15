---
uid: Ans.DataProcessing.operators.result.mapdl_section
---

# mapdl_section Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.

available inputs: `properties_name` (string), `section` (PropertyField) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `layer_property` (bool) (optional), `layers_requested` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `properties_value` (FieldsContainer), `layers_per_section` (PropertyField)

## Example

```python
op = mapdl_section()

op = mapdl_section(properties_name=my_properties_name,section=my_section,streams_container=my_streams_container,data_sources=my_data_sources,layer_property=my_layer_property,layers_requested=my_layers_requested)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
mapdl_section()
```

#### Constructor

```python
mapdl_section(properties_name, section, streams_container, data_sources, layer_property, layers_requested, config)
```

**Parameters:**

- `properties_name` (*object*)
- `section` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `layer_property` (*object*)
- `layers_requested` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mapdl_section(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
