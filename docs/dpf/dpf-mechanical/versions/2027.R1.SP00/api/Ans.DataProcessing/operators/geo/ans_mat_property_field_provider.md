---
uid: Ans.DataProcessing.operators.geo.ans_mat_property_field_provider
---

# *class* ans_mat_property_field_provider(materials_container: object = None, mesh_scoping: object = None, dependencies1: object = None, dependencies2: object = None, unit_system_or_result_info: object = None, material_physic_name: object = None, dpf_mat_id: object = None, material_vuuid: object = None, property_name: object = None, location: object = None, location_standard_condition: object = None, config: OperatorConfig = None)

ans_mat_property_field_provider()

ans_mat_property_field_provider(materials_container: object, mesh_scoping: object, dependencies1: object, dependencies2: object, unit_system_or_result_info: object, material_physic_name: object, dpf_mat_id: object, material_vuuid: object, property_name: object, location: object, location_standard_condition: object, config: OperatorConfig)

ans_mat_property_field_provider(config: OperatorConfig)



**DPF Framework Reference:** [ans_mat_property_field_provider operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/ans_mat_property_field_provider.md)

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

using <eng_data::ans_mat_material_provider> the user can find out the available property scripting names,then define one of those names at this input

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
