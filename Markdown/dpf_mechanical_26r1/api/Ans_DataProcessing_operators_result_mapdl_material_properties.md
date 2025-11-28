---
uid: Ans.DataProcessing.operators.result.mapdl_material_properties
---

# mapdl_material_properties Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read the values of the properties of a material for a given materials property field (property field that contains materials information for each element of a mesh).It returns a fields container containing a field for each material property, with only one value per material. The following keys can be used: Young's modulus (keys: EX, EY, EZ), Poisson's ratio (keys: NUXY, NUYZ, NUXZ), Shear Modulus (keys: GXY, GYZ, GXZ), Coefficient of Thermal Expansion (keys: ALPX, ALPY, ALPZ), Volumic Mass (key: DENS), second Lame's coefficient (key: MU), Damping coefficient (key: DAMP), thermal Conductivity (keys: KXX, KYY, KZZ), Resistivity (keys: RSVX, RSVY, RSVZ), Specific heat in constant volume (key: C), Film coefficient (key: HF), Viscosity (key: VISC), Emissivity (key: EMIS).    ///available inputs: properties_name (string), materials (PropertyField), streams_container (StreamsContainer), data_sources (DataSources)
            available outputs: properties_value (FieldsContainer)

mapdl_material_properties()
mapdl_material_properties(properties_name: object, materials: object, streams_container: object, data_sources: object, config: OperatorConfig)
mapdl_material_properties(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mapdl_material_properties()
```

#### Constructor

```python
mapdl_material_properties(properties_name, materials, streams_container, data_sources, config)
```

**Parameters:**

- `properties_name` (*object*)
- `materials` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mapdl_material_properties(config)
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
