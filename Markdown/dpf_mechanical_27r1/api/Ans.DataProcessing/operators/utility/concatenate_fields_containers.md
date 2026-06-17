---
uid: Ans.DataProcessing.operators.utility.concatenate_fields_containers
---

# *class* concatenate_fields_containers(rescoping_value: object = None, reference_scoping_index: object = None, field_support: object = None, config: OperatorConfig = None)

Concatenates fields containers into a unique one by concatenating each of their fields.

Example:

- Fields Container 1:

	- Field1 with components: { UX, UY, UZ }

	- Field2 with components: { VX, VY, VZ }

- Fields Container 2:

	- Field1 with components: { RX, RY, RZ }

	- Field2 with components: { AX, AY, AZ }

- Output Fields Container:

	- Field1 with components: { UX, UY, UZ, RX, RY, RZ }

	- Field2 with components: { VX, VY, VZ, AX, AY, AZ }

available inputs: `rescoping_value` (double) (optional), `reference_scoping_index` (Int32) (optional), `field_support` (AbstractFieldSupport) (optional), `fields_containers1` (), `fields_containers2` ()

available outputs: `merged_collections` (FieldsContainer)

**DPF Framework Reference:** [concatenate_fields_containers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/concatenate_fields_containers.md)

**Parameters:**

* **rescoping_value**
* **reference_scoping_index**
* **field_support**
* **config**

**Example:**

```python
op = concatenate_fields_containers()

op = concatenate_fields_containers(rescoping_value=my_rescoping_value,reference_scoping_index=my_reference_scoping_index,field_support=my_field_support)
```

## Inputs

### rescoping_value

Value used to fill the missing values when scopings are different. Default is 0.

**Type:** *LinkableInput*

### reference_scoping_index

**Type:** *LinkableInput*

### field_support

Support of the output fields container's fields. By default each field has the support of the corresponding field of the first fields container.

**Type:** *LinkableInput*

## Outputs

### merged_collections

Fields containers with fields which have as many components as the sum of all the input fields' numbers of components of the same index.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
