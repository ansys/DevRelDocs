---
uid: Ans.DataProcessing.operators.utility.concatenate_fields
---

# *class* concatenate_fields(rescoping_value: object = None, reference_scoping_index: object = None, field_support: object = None, config: OperatorConfig = None)

Concatenates fields into a unique one by incrementing the number of components.

Example:

- Field1 components: { UX, UY, UZ }

- Field2 components: { RX, RY, RZ }

- Output field : { UX, UY, UZ, RX, RY, RZ }

available inputs: `rescoping_value` (double) (optional), `reference_scoping_index` (Int32) (optional), `field_support` (AbstractFieldSupport) (optional), `fields1` (), `fields2` ()

available outputs: `merged_fields` (Field)

**DPF Framework Reference:** [concatenate_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/concatenate_fields.md)

**Parameters:**

* **rescoping_value**
* **reference_scoping_index**
* **field_support**
* **config**

**Example:**

```python
op = concatenate_fields()

op = concatenate_fields(rescoping_value=my_rescoping_value,reference_scoping_index=my_reference_scoping_index,field_support=my_field_support)
```

## Inputs

### rescoping_value

Value used to fill the missing values when scopings are different. Default is 0.

**Type:** *LinkableInput*

### reference_scoping_index

**Type:** *LinkableInput*

### field_support

Support of the output field.

**Type:** *LinkableInput*

## Outputs

### merged_fields

Field which has as many components as the sum of all the input fields' numbers of components.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
