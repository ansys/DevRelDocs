---
uid: Ans.DataProcessing.operators.utility.change_location
---

# *class* change_location(field: object = None, new_location: object = None, config: OperatorConfig = None)

Changes the location property of a field without modifying the field data.

available inputs: `field` (Field), `new_location` (string)

available outputs: `field` (Field)

**DPF Framework Reference:** [change_location operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/change_location.md)

**Parameters:**

* **field**
* **new_location**
* **config**

**Example:**

```python
op = change_location()

op = change_location(field=my_field,new_location=my_new_location)
```

## Inputs

### field

Field whose location will be changed

**Type:** *LinkableInput*

### new_location

New location string for the field (e.g., 'Nodal', 'ElementalNodal', 'Elemental')

**Type:** *LinkableInput*

## Outputs

### field

Field with the updated location property

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
