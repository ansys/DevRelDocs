---
uid: Ans.DataProcessing.operators.utility.scalars_to_field
---

# *class* scalars_to_field(double_or_vector_double: object = None, unit: object = None, location: object = None, num_entities: object = None, num_components: object = None, scoping: object = None, config: OperatorConfig = None)

scalars_to_field()
scalars_to_field(double_or_vector_double: object, unit: object, location: object, num_entities: object, num_components: object, scoping: object, config: OperatorConfig)
scalars_to_field(config: OperatorConfig)


**DPF Framework Reference:** [scalars_to_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/scalars_to_field.md)

**Parameters:**

* **double_or_vector_double**
* **unit**
* **location**
* **num_entities**
* **num_components**
* **scoping**
* **config**

## Inputs

### double_or_vector_double

Data of the field. Default is 0-field. Specify a double to create a field with uniform values, or a vector for explicit data per entity

**Type:** *LinkableInput*

### unit

Unit symbol (m, Hz, kg, ...). Default is dimensionless

**Type:** *LinkableInput*

### location

Location of the field: 'Nodal', 'ElementalNodal', 'Elemental', etc. Default is 'numeric'

**Type:** *LinkableInput*

### num_entities

Number of field entities. Default is 1, or the size of the scoping if provided

**Type:** *LinkableInput*

### num_entity

Deprecated alias of: num_entities

**Type:** *LinkableInput*

### num_components

Number of field components per entity. Default is 1 for scalar, >1 for vector

**Type:** *LinkableInput*

### num_comp

Deprecated alias of: num_components

**Type:** *LinkableInput*

### scoping

Scoping defining entity IDs and locations. If provided, overrides num_entities

**Type:** *LinkableInput*

## Outputs

### field

Generated field with specified data and properties

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
