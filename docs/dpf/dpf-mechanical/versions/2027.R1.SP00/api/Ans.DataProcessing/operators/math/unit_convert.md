---
uid: Ans.DataProcessing.operators.math.unit_convert
---

# *class* unit_convert(entity_to_convert: object = None, unit_name: object = None, config: OperatorConfig = None)

Converts an input field/fields container or mesh of a given unit to another unit.

available inputs: `entity_to_convert` (Field, FieldsContainer, MeshedRegion, MeshesContainer), `unit_name` (string, Int32, Field)

available outputs: `converted_entity` (Field ,FieldsContainer ,MeshedRegion ,MeshesContainer)

**DPF Framework Reference:** [unit_convert operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/unit_convert.md)

**Parameters:**

* **entity_to_convert**
* **unit_name**
* **config**

**Example:**

```python
op = unit_convert()

op = unit_convert(entity_to_convert=my_entity_to_convert,unit_name=my_unit_name)
```

## Inputs

### entity_to_convert

**Type:** *LinkableInput*

### unit_name

unit as a string, ex 'm' for meter, 'Pa' for pascal,... Or ansys unit system's ID, or a field from which expected unit will be extracted.

**Type:** *LinkableInput*

## Outputs

### converted_entity

the output entity is the same as the input (inplace operator)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
