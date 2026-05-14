---
uid: Ans.DataProcessing.operators.math.unit_convert
---

# *class* unit_convert(entity_to_convert: object = None, unit_name: object = None, config: OperatorConfig = None)

Converts an input entity from one unit to another using the linear relation

$v_\mathrm{out}[i] = k \cdot v_\mathrm{in}[i] + \delta$,

where $k$ and $\delta$ are the unit conversion factor and shift.

Accepts fields, fields containers, meshes, and meshes containers.

For mesh inputs only the coordinate field is converted.

When the permissive option is enabled and units are not homogeneous with the target unit,

the conversion is silently skipped.

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

Converted entity of the same type as the input, modified in place.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
