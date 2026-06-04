---
uid: Ans.DataProcessing.operators.result.mapdl_material_properties
---

# *class* mapdl_material_properties(properties_name: object = None, materials: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Read the values of the properties of a material for a given materials property field (property field that contains materials information for each element of a mesh).It returns a fields container containing a field for each material property, with only one value per material. The following keys can be used: Young's modulus (keys: EX, EY, EZ), Poisson's ratio (keys: NUXY, NUYZ, NUXZ), Shear Modulus (keys: GXY, GYZ, GXZ), Coefficient of Thermal Expansion (keys: ALPX, ALPY, ALPZ), Volumic Mass (key: DENS), second Lame's coefficient (key: MU), Damping coefficient (key: DAMP), thermal Conductivity (keys: KXX, KYY, KZZ), Resistivity (keys: RSVX, RSVY, RSVZ), Specific heat in constant volume (key: C), Film coefficient (key: HF), Viscosity (key: VISC), Emissivity (key: EMIS).

available inputs: `properties_name` (string), `materials` (PropertyField), `streams_container` (StreamsContainer), `data_sources` (DataSources)

available outputs: `properties_value` (FieldsContainer)

**DPF Framework Reference:** [mapdl_material_properties operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/mapdl_material_properties.md)

**Parameters:**

* **properties_name**
* **materials**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = mapdl_material_properties()

op = mapdl_material_properties(properties_name=my_properties_name,materials=my_materials,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### properties_name

**Type:** *LinkableInput*

### materials

Property field that contains a material id per element.

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### properties_value

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
