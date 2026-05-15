---
uid: Ans.DataProcessing.operators.geo.ans_mat_property_field_provider
---

# *class* ans_mat_property_field_provider(materials_container: object = None, mesh_scoping: object = None, dependencies1: object = None, dependencies2: object = None, unit_system_or_result_info: object = None, material_physic_name: object = None, dpf_mat_id: object = None, material_vuuid: object = None, property_name: object = None, location: object = None, location_standard_condition: object = None, config: OperatorConfig = None)

Load a named property from an ENGD file using ANS_MAT.Important: ANS_MAT uses different property names if compared with ENGD.If there is any value's property equaling 0.0, that means this material doesnt have that named property.This operator returns fields container of named property value. If pin 10 is set False, its scoping will be the mat IDs in Mechanicaland it is only available without dependencies.

available inputs: `materials_container` (MaterialsContainer), `mesh_scoping` (Scoping) (optional), `dependencies1` (Field) (optional), `dependencies2` (Field) (optional), `unit_system_or_result_info` (ResultInfo), `material_physic_name` (string) (optional), `dpf_mat_id` (Int32, IList int, Scoping, System.Collections.IEnumerable) (optional), `material_vuuid` (string) (optional), `property_name` (string) (optional), `location` (string) (optional), `location_standard_condition` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [ans_mat_property_field_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/ans_mat_property_field_provider.md)

**Parameters:**

* **materials_container**
* **mesh_scoping**
* **dependencies1**
* **dependencies2**
* **unit_system_or_result_info**
* **material_physic_name**
* **dpf_mat_id**
* **material_vuuid**
* **property_name**
* **location**
* **location_standard_condition**
* **config**

**Example:**

```python
op = ans_mat_property_field_provider()

op = ans_mat_property_field_provider(materials_container=my_materials_container,mesh_scoping=my_mesh_scoping,dependencies1=my_dependencies1,dependencies2=my_dependencies2,unit_system_or_result_info=my_unit_system_or_result_info,material_physic_name=my_material_physic_name,dpf_mat_id=my_dpf_mat_id,material_vuuid=my_material_vuuid,property_name=my_property_name,location=my_location,location_standard_condition=my_location_standard_condition)
```

## Inputs

### materials_container

materials container

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### dependencies1

dependencies defined by user. If it's a CField, user must set a name of dependency type for this CField (for example: Temperature)

**Type:** *LinkableInput*

### dependencies2

dependencies defined by user. If it's a CField, user must set a name of dependency type for this CField (for example: Temperature)

**Type:** *LinkableInput*

### unit_system_or_result_info

**Type:** *LinkableInput*

### material_physic_name

scoping: material physic name

**Type:** *LinkableInput*

### dpf_mat_id

scoping: DpfMatID, DpfMatId is the id used in dpf

**Type:** *LinkableInput*

### material_vuuid

scoping: VUUID, VUUID is the equivalent to the DataTransferID in the ENGD's material.engd file

**Type:** *LinkableInput*

### property_name

**Type:** *LinkableInput*

### location

Location: material, overall

**Type:** *LinkableInput*

### location_standard_condition

Only available for standard conditions (without dependencies). False: output relating to a set of SolverMatID. True: output relating to a set of DpfMatID. Default value: TRUE

**Type:** *LinkableInput*

## Outputs

### fields_container

fields containers containing property value (from scoping if defined) in Enginnering Data file including material support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
