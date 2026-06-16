---
uid: Ans.DataProcessing.operators.geo.ans_mat_from_materials_data
---

# *class* ans_mat_from_materials_data(material_data1: object = None, material_data2: object = None, config: OperatorConfig = None)

Create ans_mat materials from materials data.

available inputs: `material_data1` (GenericDataContainer), `material_data2` (GenericDataContainer)

available outputs: `materials_container` (MaterialsContainer)

**DPF Framework Reference:** [ans_mat_from_materials_data operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/ans_mat_from_materials_data.md)

**Parameters:**

* **material_data1**
* **material_data2**
* **config**

**Example:**

```python
op = ans_mat_from_materials_data()

op = ans_mat_from_materials_data(material_data1=my_material_data1,material_data2=my_material_data2)
```

## Inputs

### material_data1

Material data to convert to ans_mat materials. Each pin correspond to a single material from pin 0 to ...

**Type:** *LinkableInput*

### material_data2

Material data to convert to ans_mat materials. Each pin correspond to a single material from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### materials_container

A materials container containing all information of available properties (property scripting names), vuuid, material physic names read through ans_mat

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
